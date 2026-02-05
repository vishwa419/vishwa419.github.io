import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Init", short: "~" },
  { path: "/about", label: "System Overview", short: "01" },
  { path: "/experience", label: "Pipeline History", short: "02" },
  { path: "/projects", label: "Deployments", short: "03" },
  { path: "/skills", label: "Stack", short: "04" },
  { path: "/contact", label: "Connect", short: "05" },
];

export const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-terminal/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-mono text-terminal">
            <Terminal size={20} />
            <span className="font-bold">kv@platform</span>
            <span className="text-muted-foreground">:~$</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 font-mono text-sm rounded-md transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-terminal bg-primary/10 border border-terminal/30"
                    : "text-muted-foreground hover:text-terminal hover:bg-primary/5"
                }`}
              >
                <span className="text-terminal/60 mr-1">{item.short}/</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-terminal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-terminal/20 pt-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-mono text-sm rounded-md transition-all ${
                    location.pathname === item.path
                      ? "text-terminal bg-primary/10 border border-terminal/30"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="text-terminal/60 mr-2">{item.short}/</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
