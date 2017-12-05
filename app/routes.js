import Home from './pages/Home';
import App from './components/App'
import { renderRoutes } from 'react-router-config';

export default [{
  component: App,
  routes: [{
    path: '/',
    exact: true,
    component: Home,
  }]
}]
