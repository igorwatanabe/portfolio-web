import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import Provider from './context/myProvider'
import './index.css'

ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/portfolio-web/'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
