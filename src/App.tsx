import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/Toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ToastProvider>
      <Router basename="/Web-accessibility-lab-12">
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer style={{ 
          padding: '4rem 2rem', 
          borderTop: '1px solid var(--border-color)', 
          marginTop: '4rem',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem'
        }}>
          <p>© 2024 NovaStack Technologies. All rights reserved.</p>
        </footer>
      </div>
    </Router>
    </ToastProvider>
  );
}

export default App;
