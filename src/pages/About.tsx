import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Briefcase, FolderGit2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SystemStatus } from "@/components/SystemStatus";
import { MagneticCard } from "@/components/MagneticCard";
import { CounterAnimation } from "@/components/CounterAnimation";
import { TypingEffect } from "@/components/TypingEffect";

const About = () => {
  return (
    <PageLayout section="Home" sectionNumber="~">
      <div className="min-h-screen flex items-center py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-5 gap-8 items-start mb-12">
              {/* Left: Hero Content */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="font-mono text-terminal text-xs mb-3">
                    $ whoami
                  </div>
                  
                  <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                    KOTHE <span className="text-terminal">VISWANATH</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 font-mono">
                    <TypingEffect text="Building ML infrastructure that scales" speed={60} />
                  </p>

                  {/* Metric Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-card border border-terminal/30 rounded-lg p-3 text-center backdrop-blur-sm"
                    >
                      <div className="text-xl md:text-2xl font-bold text-terminal mb-1">
                        <CounterAnimation end={1} suffix="M+" />
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">events/day</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-card border border-amber/30 rounded-lg p-3 text-center backdrop-blur-sm"
                    >
                      <div className="text-xl md:text-2xl font-bold text-amber mb-1">
                        <CounterAnimation end={500} suffix="+" />
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">pipelines</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-card border border-cyan/30 rounded-lg p-3 text-center backdrop-blur-sm"
                    >
                      <div className="text-xl md:text-2xl font-bold text-cyan mb-1">
                        <CounterAnimation end={3} suffix="+" />
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">years</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right: System Status */}
              <div className="lg:col-span-2">
                <SystemStatus />
              </div>
            </div>

            {/* Main Content Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/experience" className="block">
                <MagneticCard>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-card border border-terminal/30 rounded-xl p-6 h-full hover:border-terminal hover:shadow-glow-sm transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-terminal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative">
                      <Briefcase className="text-terminal mb-3" size={28} />
                      <h3 className="font-display text-xl font-bold mb-2">Experience</h3>
                      <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                        3+ years building ML platforms<br />
                        Scaled systems 0 → production
                      </p>
                      <div className="flex items-center gap-2 text-terminal text-xs font-mono group-hover:gap-3 transition-all">
                        <span>View journey</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </MagneticCard>
              </Link>

              <Link to="/projects" className="block">
                <MagneticCard>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-card border border-amber/30 rounded-xl p-6 h-full hover:border-amber hover:shadow-glow-sm transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative">
                      <FolderGit2 className="text-amber mb-3" size={28} />
                      <h3 className="font-display text-xl font-bold mb-2">Projects</h3>
                      <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                        Real-world deployments<br />
                        Pipelines • K8s • Cloud infra
                      </p>
                      <div className="flex items-center gap-2 text-amber text-xs font-mono group-hover:gap-3 transition-all">
                        <span>See builds</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </MagneticCard>
              </Link>

              <Link to="/skills" className="block">
                <MagneticCard>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-card border border-cyan/30 rounded-xl p-6 h-full hover:border-cyan hover:shadow-glow-sm transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative">
                      <Zap className="text-cyan mb-3" size={28} />
                      <h3 className="font-display text-xl font-bold mb-2">Skills</h3>
                      <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                        Python • Kubernetes • AWS<br />
                        Code to deploy expertise
                      </p>
                      <div className="flex items-center gap-2 text-cyan text-xs font-mono group-hover:gap-3 transition-all">
                        <span>Explore stack</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </MagneticCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
