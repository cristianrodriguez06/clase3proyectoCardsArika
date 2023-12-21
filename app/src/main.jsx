import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Footer.jsx'
import Header from './HEADER.jsx'
import Principal from './Principal.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Principal />
    <Footer />    
  </React.StrictMode>,
)
