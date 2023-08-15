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
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
      {/* </HashRouter> */}
    </div>
  )
}

export default App
