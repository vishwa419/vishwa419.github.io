import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { MapPin, GraduationCap, Cpu, Database, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const architectureNodes = [
  { id: "user", label: "You", x: 50, y: 20, icon: "👤" },
  { id: "api", label: "Portfolio API", x: 50, y: 40, icon: "🌐" },
  { id: "experience", label: "Experience Service", x: 20, y: 60, icon: "💼" },
  { id: "projects", label: "Project Registry", x: 50, y: 60, icon: "📦" },
  { id: "skills", label: "Skills Cache", x: 80, y: 60, icon: "⚡" },
  { id: "db", label: "Knowledge Base", x: 50, y: 80, icon: "🗄️" },
];

const About = () => {
  return (
    <PageLayout section="System Overview" sectionNumber="01">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <div className="font-mono text-terminal text-sm mb-4">
              $ cat /system/overview.md
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              System <span className="text-terminal">Overview</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Understanding the architecture behind this platform engineer. 
              Here's how the system components connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-terminal/30 rounded-xl p-8 relative overflow-hidden"
            >
              <div className="font-mono text-xs text-muted-foreground mb-6">
                // system-architecture.diagram
              </div>
              
              <div className="relative h-[400px]">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(142 70% 45% / 0.2)" />
                      <stop offset="50%" stopColor="hsl(142 70% 45% / 0.6)" />
                      <stop offset="100%" stopColor="hsl(142 70% 45% / 0.2)" />
                    </linearGradient>
                  </defs>
                  {/* User to API */}
                  <line x1="50%" y1="25%" x2="50%" y2="38%" stroke="url(#lineGradient)" strokeWidth="2" />
                  {/* API to services */}
                  <line x1="50%" y1="45%" x2="20%" y2="58%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50%" y1="45%" x2="50%" y2="58%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50%" y1="45%" x2="80%" y2="58%" stroke="url(#lineGradient)" strokeWidth="2" />
                  {/* Services to DB */}
                  <line x1="20%" y1="68%" x2="50%" y2="78%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50%" y1="68%" x2="50%" y2="78%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="80%" y1="68%" x2="50%" y2="78%" stroke="url(#lineGradient)" strokeWidth="2" />
                </svg>

                {/* Nodes */}
                {architectureNodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className="bg-secondary border border-terminal/40 rounded-lg px-4 py-3 text-center hover:border-terminal hover:shadow-glow-sm transition-all duration-300 cursor-default">
                      <div className="text-2xl mb-1">{node.icon}</div>
                      <div className="font-mono text-xs text-terminal">{node.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Terminal-style intro */}
              <div className="bg-card border border-terminal/30 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <span className="text-terminal">→</span> whoami
                </div>
                <p className="text-foreground leading-relaxed">
                  A <span className="text-terminal">platform engineer</span> who builds the 
                  infrastructure that enables teams to ship ML models at scale. I design 
                  systems that handle <span className="text-amber">1M+ events/day</span>, 
                  orchestrate <span className="text-cyan">500+ pipelines</span>, and reduce 
                  deployment times from <span className="text-terminal-red">days</span> to 
                  <span className="text-terminal"> minutes</span>.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-terminal" size={18} />
                    <span className="font-mono text-xs text-muted-foreground">location</span>
                  </div>
                  <div className="font-display font-semibold">San Francisco, CA</div>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="text-terminal" size={18} />
                    <span className="font-mono text-xs text-muted-foreground">education</span>
                  </div>
                  <div className="font-display font-semibold">MS, Syracuse U</div>
                </div>
              </div>

              {/* Core competencies */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="font-mono text-xs text-muted-foreground mb-4">
                  // core_competencies[]
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-terminal" size={18} />
                    <span>ML/AI Infrastructure at Scale</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="text-amber" size={18} />
                    <span>Real-time Data Pipelines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="text-cyan" size={18} />
                    <span>Cloud-Native Platform Engineering</span>
                  </div>
                </div>
              </div>

              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-terminal font-mono text-sm hover:gap-4 transition-all duration-300"
              >
                <span>Continue to Pipeline History</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;
