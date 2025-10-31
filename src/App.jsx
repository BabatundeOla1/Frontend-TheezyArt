// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import LandingPage from './component/LandingPage';
// import About from './component/About';
// import Paintings from './component/Paintings';
// import Portfolio from './component/Portfolio';
// import CV from './component/CV';
// import Contact from './component/Contact';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="nav">
//           <h2 className="logo">B.O</h2>
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/paintings">Paintings</Link></li>
//             <li><Link to="/portfolio">Portfolio</Link></li>
//             <li><Link to="/cv">CV</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         <main className="main">
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/paintings" element={<Paintings />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/cv" element={<CV />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import About from './component/About';
import Paintings from './component/Paintings';
import Portfolio from './component/Portfolio';
import CV from './component/CV';
import Contact from './component/Contact';
import AdminLogin from './component/admin/AdminLogin';
import AdminDashboard from './component/admin/AdminDashboard';
import ProtectedRoute from './component/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav">
          <h2 className="logo">B.O</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/paintings">Paintings</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin/login">Admin</Link></li>
          </ul>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
