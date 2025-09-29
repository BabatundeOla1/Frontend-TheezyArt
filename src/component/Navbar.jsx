import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <h2 style={{ display: 'inline', marginRight: '2rem' }}>BABATUNDE OLALEYE STUDIO</h2>
      <Link to="/about">About</Link> | 
      <Link to="/paintings"> Paintings</Link> | 
      <Link to="/portfolio"> Portfolio</Link> | 
      <Link to="/cv"> CV</Link> | 
      <Link to="/contact"> Contact</Link>
    </nav>
  );
};

export default Navbar;
