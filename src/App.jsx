import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      {/* <HashRouter basename='/*'> */}
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/portfolio-web/'}>
        <Routes>
          <Route path='/portfolio-web' element={ <Home/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </BrowserRouter>
      
      {/* </HashRouter> */}
    </div>
  )
}

export default App
