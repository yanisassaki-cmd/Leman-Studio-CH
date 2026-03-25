import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#F5F0E8] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              className="tracking-[0.25em] text-[#8B5E3C] mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: 500 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              KALIS
            </motion.div>

            {/* Loading Bar */}
            <div className="w-48 h-[2px] bg-[#8B5E3C]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#8B5E3C]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              className="text-[#7A6A60] mt-8 tracking-[0.2em] uppercase"
              style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Fleuriste Artisan · Genève
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
