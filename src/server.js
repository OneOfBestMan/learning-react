import React from 'react'
import express from 'express'
import path from 'path'
import {renderRoutes, matchRoutes} from 'react-router-config'
import {renderToString} from 'react-dom/server'
import {StaticRouter as Router} from 'react-router-dom'
import routes from './app/routes'
import thunk from 'redux-thunk'
import * as reducers from './app/reducers'
import {createStore, combineReducers, applyMiddleware}  from 'redux'
import {Provider} from 'react-redux'

const matchRouteComponents = (path, routes) => matchRoutes(routes, path).map(({ route }) => route.component)

const fetchComponentData = (dispatch, components) => Promise.all(components.reduce((prev, cur) => cur ? (cur.requirements || []).concat(prev) : prev, []).map(r => dispatch(r())))

const render = (path, store, routes) => {
  const context = {}
  const view = <Provider store={store}>
  <Router location={path} context={context}>
    <div>{renderRoutes(routes)}</div>
  </Router>
</Provider>

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React SSR Demo</title>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
    </script>
  </head>
  <body>
    <div id="root">${renderToString(view)}</div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
</html>`
}

const server = express()
server.use(express.static(path.join(__dirname, 'assets')))
const rootReducer = combineReducers(reducers)
server.use((req, res) => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  const components = matchRouteComponents(req.path, routes)
  fetchComponentData(store.dispatch, components)
    .then(() => {
      const html = render(req.path, store, routes)
      res.type('text/html; charset=UTF-8')
      res.end(html)
    })
})

export default server
