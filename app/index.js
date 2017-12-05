import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

render(<Router>
  <div>{ renderRoutes(routes) }</div>
</Router>, document.getElementById('root'))
