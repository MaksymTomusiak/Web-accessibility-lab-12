import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Container with aria-live */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          pointerEvents: "none",
        }}
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="glass"
              style={{
                padding: "1rem 1.5rem",
                minWidth: "300px",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                pointerEvents: "auto",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                borderLeft: `4px solid ${
                  toast.type === "success"
                    ? "#10b981"
                    : toast.type === "error"
                      ? "#ef4444"
                      : "#6366f1"
                }`,
              }}
            >
              <div
                style={{
                  color:
                    toast.type === "success"
                      ? "#10b981"
                      : toast.type === "error"
                        ? "#ef4444"
                        : "#6366f1",
                }}
              >
                {toast.type === "success" && <CheckCircle size={20} />}
                {toast.type === "error" && <AlertCircle size={20} />}
                {toast.type === "info" && <Info size={20} />}
              </div>
              <p
                style={{
                  margin: 0,
                  flex: 1,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {toast.message}
              </p>
              <button
                onClick={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                }}
                aria-label="Close notification"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
