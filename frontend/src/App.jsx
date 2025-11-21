 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-layout">
        <header>
          <nav>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5em', fontWeight: 'bold' }}>
              VyomGarud Blog
            </Link>
          </nav>
        </header>
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;