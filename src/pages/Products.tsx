import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import AccessibleH1 from '../components/AccessibleH1';
import Loader from '../components/Loader';
import { useToast } from '../components/Toast';

const productsData = [
  { id: 1, name: 'Cloud Core', price: '$49', category: 'Infrastructure', rating: 4.8 },
  { id: 2, name: 'Neural Flow', price: '$79', category: 'AI Tools', rating: 4.9 },
  { id: 3, name: 'Data Prism', price: '$29', category: 'Analytics', rating: 4.7 },
  { id: 4, name: 'Edge Node', price: '$99', category: 'Hardware', rating: 5.0 },
  { id: 5, name: 'Sync Hub', price: '$39', category: 'Software', rating: 4.6 },
  { id: 6, name: 'Quantum Link', price: '$149', category: 'Security', rating: 4.9 },
];

const Products = () => {
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (name: string) => {
    showToast(`${name} added to cart!`, 'success');
  };

  return (
    <PageWrapper title="Products">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <AccessibleH1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Our Products</AccessibleH1>
          <p style={{ color: 'var(--text-secondary)' }}>Explore our range of next-generation solutions.</p>
        </div>

        {loading ? (
          <Loader message="Fetching the latest products..." />
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {productsData.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="glass"
                style={{ overflow: 'hidden' }}
              >
                <div style={{ 
                  height: '200px', 
                  background: 'linear-gradient(45deg, #1e1b4b, #312e81)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <div style={{ opacity: 0.2, fontSize: '4rem', fontWeight: 800 }}>NOVA</div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase' }}>{product.category}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                      <Star size={14} fill="currentColor" color="#fbbf24" /> {product.rating}
                    </div>
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{product.price}</span>
                    <button 
                      onClick={() => handleAddToCart(product.name)}
                      className="btn btn-primary" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                    >
                      <ShoppingCart size={16} /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Products;
