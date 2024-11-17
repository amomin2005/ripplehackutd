import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import FinancialServices from './pages/financialservices.jsx'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'

function App() {
  return (
    <Router>
      <div>
        <header className='homepageheader'>
          <nav className='homepagenavheader'>
            <Link to="/"> Home </Link>
            <Link to="/financial-services"> Financial Services </Link>
            <Link to="/login"> Login </Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-services" element={<FinancialServices />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App