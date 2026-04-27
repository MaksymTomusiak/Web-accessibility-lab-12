import { motion } from 'framer-motion';

const Loader = ({ message = "Loading content..." }: { message?: string }) => {
  return (
    <div 
      role="status" 
      aria-live="polite" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '4rem',
        gap: '1.5rem'
      }}
    >
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(99, 102, 241, 0.1)',
          borderTop: '4px solid var(--primary)',
          borderRadius: '50%'
        }}
      />
      <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
        {message}
      </span>
      {/* Screen reader only text for loading state */}
      <span className="sr-only" style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0'
      }}>
        The page is currently loading, please wait.
      </span>
    </div>
  );
};

export default Loader;
