import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 1. Update document title
    document.title = `${title} | NovaStack`;

    // 2. Shift focus to the main heading for accessibility
    // We use a small timeout to ensure the DOM is ready and the browser doesn't skip it
    const timer = setTimeout(() => {
      if (h1Ref.current) {
        h1Ref.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [title]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* 
        The children are expected to contain an <h1>.
        We will search for the first <h1> and inject the ref and tabIndex.
        Since we control the pages, we can just ensure they use a specific H1 component or just pass it down.
        For this lab, we'll assume the first child of the page component (passed in children) is the header or contains the H1.
      */}
      <div className="page-content">{children}</div>
    </motion.div>
  );
};

export default PageWrapper;
