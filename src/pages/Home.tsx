import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import AccessibleH1 from '../components/AccessibleH1';

const Home = () => {
  return (
    <PageWrapper title="Home">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 1rem', 
            background: 'rgba(99, 102, 241, 0.1)', 
            borderRadius: '100px',
            color: 'var(--primary)',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            border: '1px solid rgba(99, 102, 241, 0.2)'
          }}>
            <Sparkles size={16} /> New: NovaStack 2.0 is here
          </div>
          
          <AccessibleH1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Build your next big idea <br />
            <span className="gradient-text">faster than ever.</span>
          </AccessibleH1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            The ultimate boilerplate for modern web applications. Beautiful, responsive, and ready for production.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Start Building <ArrowRight size={20} />
            </button>
            <button className="btn glass" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Documentation
            </button>
          </div>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '2rem', 
          marginTop: '6rem' 
        }}>
          {[
            { icon: <Zap color="#6366f1" />, title: 'Lightning Fast', desc: 'Built with Vite for the fastest development experience.' },
            { icon: <Shield color="#6366f1" />, title: 'Secure by Default', desc: 'Enterprise-grade security patterns for your peace of mind.' },
            { icon: <Sparkles color="#6366f1" />, title: 'Modern UI', desc: 'Pre-built components with premium aesthetics and animations.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="glass"
              style={{ padding: '2rem' }}
            >
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
