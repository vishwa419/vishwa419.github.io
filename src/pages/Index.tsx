import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const bootSequence = [
  { text: "$ init platform-engineer-portfolio", delay: 0 },
  { text: "[OK] Loading system modules...", delay: 800 },
  { text: "[OK] Mounting experience data...", delay: 1400 },
  { text: "[OK] Connecting to project deployments...", delay: 2000 },
  { text: "[OK] Initializing skill infrastructure...", delay: 2600 },
  { text: "[OK] System ready.", delay: 3200 },
  { text: "", delay: 3800 },
  { text: "Welcome to the platform.", delay: 4000 },
];

const Index = () => {
  const navigate = useNavigate();
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showMain, setShowMain] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    // Check if user has seen boot sequence
    const hasBooted = sessionStorage.getItem("hasBooted");
    if (hasBooted) {
      setShowMain(true);
      setBootComplete(true);
      return;
    }

    // Run boot sequence
    bootSequence.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, bootSequence[index].delay);
    });

    setTimeout(() => {
      setShowMain(true);
      setBootComplete(true);
      sessionStorage.setItem("hasBooted", "true");
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Terminal glow background */}
      <div className="absolute inset-0 bg-terminal-glow opacity-50" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <div className="max-w-2xl w-full">
              <div className="bg-card border border-terminal rounded-lg p-6 shadow-terminal font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-terminal">
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-red))]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-amber))]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-green))]" />
                  <span className="ml-4 text-muted-foreground text-xs">platform-engineer — bash</span>
                </div>
                
                <div className="space-y-1">
                  {bootSequence.slice(0, visibleLines).map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`${
                        line.text.startsWith("[OK]") 
                          ? "text-terminal" 
                          : line.text.startsWith("$") 
                          ? "text-amber" 
                          : "text-foreground"
                      }`}
                    >
                      {line.text}
                      {index === visibleLines - 1 && (
                        <span className="inline-block w-2 h-4 bg-terminal ml-1 cursor-blink" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center max-w-4xl"
            >
              <div className="font-mono text-terminal text-sm mb-6 tracking-wider">
                PLATFORM ENGINEER // AI/ML INFRASTRUCTURE
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="text-foreground">Kothe</span>{" "}
                <span className="text-terminal">Viswanath</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Architecting the infrastructure that powers machine learning at scale. 
                From distributed training systems to real-time data pipelines.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => navigate("/about")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg shadow-terminal hover:shadow-glow-sm transition-all duration-300"
                >
                  Enter the Platform →
                </motion.button>
                
                <motion.a
                  href="https://github.com/vishwa419"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="px-8 py-4 border border-terminal text-terminal font-mono text-sm rounded-lg hover:bg-primary/10 transition-all duration-300"
                >
                  $ git clone portfolio
                </motion.a>
              </div>
            </motion.div>

            {/* System status indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 font-mono text-xs text-muted-foreground hidden md:block"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-primary pulse-node" />
                <span>Systems operational</span>
              </div>
              <div className="text-terminal/60">
                San Francisco, CA • {new Date().toLocaleTimeString()}
              </div>
            </motion.div>

            {/* Quick nav hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 right-8 font-mono text-xs text-muted-foreground hidden md:block text-right"
            >
              <div>Navigate: ↑ ↓ or scroll</div>
              <div className="text-terminal/60">Press Enter to continue</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
