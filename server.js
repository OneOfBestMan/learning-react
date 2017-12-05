const express = require('express')
const path = require('path')

const server = express()
server.use(express.static(path.join(__dirname, 'dist')))
server.use((req, res) => res.end(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
</html>`))

module.exports = server
