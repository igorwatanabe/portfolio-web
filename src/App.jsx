import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/portfolio-web" component={ Home } />
      </Switch>
    </div>
  )
}

export default App
