import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/headers";
import Login from './components/login';
import SignUp from './components/signup';
import Home from './pages/home';
import './App.css';
import Sample from './pages/sample';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sample" element={<Sample />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;