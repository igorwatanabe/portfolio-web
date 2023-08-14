import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import Provider from './context/myProvider'
import './index.css'

ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/portfolio-web/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
