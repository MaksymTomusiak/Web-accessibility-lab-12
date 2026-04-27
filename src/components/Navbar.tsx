import { NavLink } from 'react-router-dom';
import { Layout, Home, ShoppingBag, Info, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass"
      aria-label="Main Navigation"
      style={{
        position: 'sticky',
        top: '1rem',
        zIndex: 1000,
        margin: '1rem 2rem',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '10px', display: 'flex' }}>
          <Layout size={20} color="white" />
        </div>
        <span className="gradient-text">NovaStack</span>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Home size={18} /> Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShoppingBag size={18} /> Products
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Info size={18} /> About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Mail size={18} /> Contact
        </NavLink>
      </div>

      <button className="btn btn-primary">Get Started</button>
    </motion.nav>
  );
};

export default Navbar;
