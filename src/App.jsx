// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import About from './component/About';
// import Paintings from './component/Paintings';
// import Portfolio from './component/Portfolio';
// import CV from './component/CV';
// import Contact from './component/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/paintings" element={<Paintings />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/cv" element={<CV />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './component/About';
import Paintings from './component/Paintings';
import Portfolio from './component/Portfolio';
import CV from './component/CV';
import Contact from './component/Contact';
import './App.css'; // Plain CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav">
          <h2 className="logo">BABATUNDE OLALEYE</h2>
          <ul className="nav-links">
            <li><Link to="/">About</Link></li>
            <li><Link to="/paintings">Paintings</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
