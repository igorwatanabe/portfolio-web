import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      {/* <HashRouter basename='/*'> */}
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/portfolio-web/'}>
        <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/portfolio-web/projects" component={ Projects } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
      </BrowserRouter>
      
      {/* </HashRouter> */}
    </div>
  )
}

export default App
