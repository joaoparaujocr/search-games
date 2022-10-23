import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Providers from './contexts'
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <Toaster position="top-center" />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
)
