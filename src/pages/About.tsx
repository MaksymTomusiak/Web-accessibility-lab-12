import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AccessibleH1 from '../components/AccessibleH1';

const About = () => {
  return (
    <PageWrapper title="About">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <AccessibleH1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Pioneering the <span className="gradient-text">Future of Web</span></AccessibleH1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Founded in 2024, NovaStack was born from a simple mission: to empower developers with the most beautiful and functional tools imaginable.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              We believe that software should not only work perfectly but also look stunning and feel intuitive. Our team of world-class engineers and designers works tirelessly to push the boundaries of what's possible on the web.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>10k+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Active Developers</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>99.9%</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Uptime SLA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass"
            style={{ height: '400px', background: 'linear-gradient(135deg, #4338ca, #db2777)', borderRadius: '24px' }}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
