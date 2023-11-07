import React from 'react'
import {ReactDOM, BrowserRouter} from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={"/my-portfolio/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
