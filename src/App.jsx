import { Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      {/* <HashRouter basename='/*'> */}
      <Switch>
        <Route exact path="/portfolio-web" component={ Home } />
        <Route exact path="/portfolio-web/projects" component={ Projects } />
        <Route exact path="/portfolio-web/contact" component={ Contact } />
      </Switch>
      {/* </HashRouter> */}
    </div>
  )
}

export default App
