import { ReactNode } from "react";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";

interface PageLayoutProps {
  children: ReactNode;
  section: string;
  sectionNumber: string;
}

export const PageLayout = ({ children, section, sectionNumber }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-terminal-glow opacity-30 pointer-events-none" />
      <div className="fixed inset-0 scanlines pointer-events-none opacity-50" />
      
      <NavBar />
      
      {/* Section indicator */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground hidden lg:block z-40"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-border" />
          <div className="text-terminal font-bold">{sectionNumber}</div>
          <div className="writing-mode-vertical rotate-180 tracking-widest uppercase text-[10px]" style={{ writingMode: 'vertical-rl' }}>
            {section}
          </div>
          <div className="w-px h-16 bg-border" />
        </div>
      </motion.div>

      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
};
