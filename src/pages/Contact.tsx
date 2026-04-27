import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import AccessibleH1 from '../components/AccessibleH1';
import { useToast } from '../components/Toast';

const Contact = () => {
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent! We'll get back to you soon.", "success");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageWrapper title="Contact">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <AccessibleH1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Get in Touch</AccessibleH1>
            <p style={{ color: 'var(--text-secondary)' }}>We'd love to hear from you. Send us a message!</p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass" 
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label 
                htmlFor="full-name"
                style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}
              >
                Full Name <span aria-hidden="true" style={{ color: 'var(--secondary)' }}>*</span>
              </label>
              <input 
                id="full-name"
                name="name"
                type="text" 
                required
                aria-required="true"
                autoComplete="name"
                placeholder="John Doe" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '10px', 
                  padding: '0.75rem 1rem',
                  color: 'white',
                  outline: 'none'
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label 
                htmlFor="email"
                style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}
              >
                Email Address <span aria-hidden="true" style={{ color: 'var(--secondary)' }}>*</span>
              </label>
              <input 
                id="email"
                name="email"
                type="email" 
                required
                aria-required="true"
                autoComplete="email"
                placeholder="john@example.com" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '10px', 
                  padding: '0.75rem 1rem',
                  color: 'white',
                  outline: 'none'
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label 
                htmlFor="message"
                style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}
              >
                Message <span aria-hidden="true" style={{ color: 'var(--secondary)' }}>*</span>
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                required
                aria-required="true"
                placeholder="Tell us about your project..." 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '10px', 
                  padding: '0.75rem 1rem',
                  color: 'white',
                  outline: 'none',
                  resize: 'none'
                }} 
              />
            </div>

            <button 
              type="submit"
              className="btn btn-primary" 
              style={{ justifyContent: 'center', marginTop: '1rem' }}
            >
              Send Message <Send size={18} aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
