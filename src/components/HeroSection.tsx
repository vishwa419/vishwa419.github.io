import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary font-medium mb-4 tracking-wide"
          >
            SOFTWARE ENGINEER
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Kothe Viswanath</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable AI/ML infrastructure and cloud-native platforms.
            Turning complex systems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com/vishwa419"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/kothe-viswanath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:viswanathkothe@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={18} className="animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
