import React from 'react'
import express from 'express'
import path from 'path'
import {renderRoutes} from 'react-router-config'
import {renderToString} from 'react-dom/server'
import {StaticRouter as Router} from 'react-router-dom'
import routes from './app/routes'

const render = (path, routes) => {
  const context = {}
  const view = <Router location={path} context={context}>
  <div>{renderRoutes(routes)}</div>
</Router>

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
server.use((req, res) => res.end(render(req.path, routes)))

export default server
