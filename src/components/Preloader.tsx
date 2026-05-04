import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  loading: boolean;
}

const Preloader = ({ loading }: PreloaderProps) => {
  const wordmark = "SEGIS".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0D1B2A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          {/* Radial gold glow */}
          <motion.div
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Brand logo */}
          <motion.img
            src="/logo.png"
            alt="SEGIS Logo"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          />

          {/* Wordmark — staggered letters */}
          <div
            style={{ display: "flex", gap: "0.18em", marginBottom: "0.5rem" }}
          >
            {wordmark.map((letter, i) => (
              <motion.span
                key={i}
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + i * 0.08,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C9A227",
              marginBottom: "3.5rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Global Investment Limited
          </motion.p>

          {/* Progress bar */}
          <motion.div
            style={{
              width: "180px",
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "999px",
              overflow: "hidden",
              position: "relative",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                background: "linear-gradient(90deg, #C9A227, #E0BA4A)",
                borderRadius: "999px",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
