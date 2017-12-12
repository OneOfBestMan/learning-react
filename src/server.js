import React from 'react'
import express from 'express'
import path from 'path'
import {renderRoutes} from 'react-router-config'
import {renderToString} from 'react-dom/server'
import {StaticRouter as Router} from 'react-router-dom'
import routes from './app/routes'
import thunk from 'redux-thunk'
import * as reducers from './app/reducers'
import {createStore, combineReducers, applyMiddleware}  from 'redux'
import {Provider} from 'react-redux'

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
const store = createStore(rootReducer, applyMiddleware(thunk))
server.use((req, res) => res.end(render(req.path, store, routes)))

export default server
