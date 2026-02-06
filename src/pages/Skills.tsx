import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const skills = [
  // Mix them up for organic feel
  { name: "Kubernetes", size: "text-4xl md:text-5xl", color: "text-cyan", category: "cloud", proficiency: "Expert" },
  { name: "Go", size: "text-2xl md:text-3xl", color: "text-terminal", category: "language", proficiency: "Proficient" },
  { name: "System Design", size: "text-3xl md:text-4xl", color: "text-emerald-400", category: "soft", proficiency: "Advanced" },
  { name: "Kafka", size: "text-4xl md:text-5xl", color: "text-amber", category: "data", proficiency: "Expert" },
  { name: "Grafana", size: "text-xl md:text-2xl", color: "text-terminal", category: "observability", proficiency: "Working" },
  { name: "Python", size: "text-4xl md:text-5xl", color: "text-terminal", category: "language", proficiency: "Expert" },
  { name: "Problem Solving", size: "text-2xl md:text-3xl", color: "text-emerald-400", category: "soft", proficiency: "Advanced" },
  { name: "vLLM", size: "text-2xl md:text-3xl", color: "text-purple-400", category: "ml", proficiency: "Proficient" },
  { name: "AWS", size: "text-3xl md:text-4xl", color: "text-cyan", category: "cloud", proficiency: "Advanced" },
  { name: "Redis", size: "text-xl md:text-2xl", color: "text-amber", category: "data", proficiency: "Working" },
  { name: "Collaboration", size: "text-2xl md:text-3xl", color: "text-emerald-400", category: "soft", proficiency: "Advanced" },
  { name: "PyTorch", size: "text-3xl md:text-4xl", color: "text-purple-400", category: "ml", proficiency: "Advanced" },
  { name: "OpenSearch", size: "text-xl md:text-2xl", color: "text-amber", category: "data", proficiency: "Working" },
  { name: "Terraform", size: "text-3xl md:text-4xl", color: "text-cyan", category: "cloud", proficiency: "Advanced" },
  { name: "Debugging", size: "text-2xl md:text-3xl", color: "text-emerald-400", category: "soft", proficiency: "Advanced" },
  { name: "SLURM", size: "text-2xl md:text-3xl", color: "text-purple-400", category: "ml", proficiency: "Proficient" },
  { name: "Docker", size: "text-3xl md:text-4xl", color: "text-cyan", category: "cloud", proficiency: "Advanced" },
  { name: "JavaScript", size: "text-xl md:text-2xl", color: "text-terminal", category: "language", proficiency: "Working" },
  { name: "Mentoring", size: "text-xl md:text-2xl", color: "text-emerald-400", category: "soft", proficiency: "Proficient" },
  { name: "Flink", size: "text-2xl md:text-3xl", color: "text-amber", category: "data", proficiency: "Proficient" },
  { name: "Kubeflow", size: "text-xl md:text-2xl", color: "text-purple-400", category: "ml", proficiency: "Working" },
  { name: "Documentation", size: "text-xl md:text-2xl", color: "text-emerald-400", category: "soft", proficiency: "Proficient" },
  { name: "Spark", size: "text-3xl md:text-4xl", color: "text-amber", category: "data", proficiency: "Advanced" },
  { name: "gRPC", size: "text-xl md:text-2xl", color: "text-cyan", category: "cloud", proficiency: "Working" },
  { name: "ArgoCD", size: "text-2xl md:text-3xl", color: "text-cyan", category: "cloud", proficiency: "Proficient" },
  { name: "Code Review", size: "text-xl md:text-2xl", color: "text-emerald-400", category: "soft", proficiency: "Proficient" },
  { name: "TensorFlow", size: "text-xl md:text-2xl", color: "text-purple-400", category: "ml", proficiency: "Working" },
  { name: "Prometheus", size: "text-2xl md:text-3xl", color: "text-terminal", category: "observability", proficiency: "Proficient" },
  { name: "Agile", size: "text-xl md:text-2xl", color: "text-emerald-400", category: "soft", proficiency: "Working" },
  { name: "OpenTelemetry", size: "text-xl md:text-2xl", color: "text-terminal", category: "observability", proficiency: "Working" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <PageLayout section="/skills" sectionNumber="03">
      <div className="min-h-screen flex items-center py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="font-mono text-terminal text-xs mb-3">
                $ cat /etc/skills.conf
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">
                Tech <span className="text-terminal">Stack</span>
              </h1>
              <p className="text-muted-foreground text-sm max-w-2xl mb-6">
                Technologies I use to build scalable ML platforms. Size indicates proficiency.
              </p>
              
              {/* Legend */}
              <div className="flex flex-wrap gap-3 text-xs font-mono">
                <span className="text-terminal">● Languages</span>
                <span className="text-cyan">● Cloud & Infra</span>
                <span className="text-amber">● Data & Streaming</span>
                <span className="text-purple-400">● ML/AI</span>
                <span className="text-emerald-400">● Soft Skills</span>
              </div>
            </div>

            {/* Tag Cloud - Organic blob shape */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="py-12 mb-6 min-h-[600px] relative"
            >
              <div className="max-w-5xl mx-auto">
                {/* Create rows with varying widths for blob effect */}
                <div className="space-y-4">
                  {/* Top - narrow */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-md mx-auto">
                    {skills.slice(0, 3).map((skill, index) => {
                      const randomX = (Math.random() - 0.5) * 10;
                      const randomY = (Math.random() - 0.5) * 8;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5, x: randomX, y: randomY }}
                          animate={{ opacity: 1, scale: 1, x: randomX, y: randomY }}
                          transition={{ 
                            delay: index * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.15, x: randomX, y: randomY }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative cursor-default"
                        >
                          <span className={`${skill.size} ${skill.color} font-bold font-mono transition-all duration-300 hover:opacity-60`}>
                            {skill.name}
                          </span>
                          
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20"
                            >
                              <div className="bg-background/95 backdrop-blur-sm border border-terminal rounded px-3 py-1.5 whitespace-nowrap shadow-xl">
                                <div className="text-xs font-mono text-terminal font-bold">{skill.proficiency}</div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Upper middle - wider */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-3xl mx-auto">
                    {skills.slice(3, 9).map((skill, index) => {
                      const randomX = (Math.random() - 0.5) * 12;
                      const randomY = (Math.random() - 0.5) * 10;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5, x: randomX, y: randomY }}
                          animate={{ opacity: 1, scale: 1, x: randomX, y: randomY }}
                          transition={{ 
                            delay: (index + 3) * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.15, x: randomX, y: randomY }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative cursor-default"
                        >
                          <span className={`${skill.size} ${skill.color} font-bold font-mono transition-all duration-300 hover:opacity-60`}>
                            {skill.name}
                          </span>
                          
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20"
                            >
                              <div className="bg-background/95 backdrop-blur-sm border border-terminal rounded px-3 py-1.5 whitespace-nowrap shadow-xl">
                                <div className="text-xs font-mono text-terminal font-bold">{skill.proficiency}</div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Center - widest */}
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 max-w-4xl mx-auto">
                    {skills.slice(9, 18).map((skill, index) => {
                      const randomX = (Math.random() - 0.5) * 15;
                      const randomY = (Math.random() - 0.5) * 12;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5, x: randomX, y: randomY }}
                          animate={{ opacity: 1, scale: 1, x: randomX, y: randomY }}
                          transition={{ 
                            delay: (index + 9) * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.15, x: randomX, y: randomY }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative cursor-default"
                        >
                          <span className={`${skill.size} ${skill.color} font-bold font-mono transition-all duration-300 hover:opacity-60`}>
                            {skill.name}
                          </span>
                          
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20"
                            >
                              <div className="bg-background/95 backdrop-blur-sm border border-terminal rounded px-3 py-1.5 whitespace-nowrap shadow-xl">
                                <div className="text-xs font-mono text-terminal font-bold">{skill.proficiency}</div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Lower middle - narrower */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-3xl mx-auto">
                    {skills.slice(18, 25).map((skill, index) => {
                      const randomX = (Math.random() - 0.5) * 12;
                      const randomY = (Math.random() - 0.5) * 10;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5, x: randomX, y: randomY }}
                          animate={{ opacity: 1, scale: 1, x: randomX, y: randomY }}
                          transition={{ 
                            delay: (index + 18) * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.15, x: randomX, y: randomY }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative cursor-default"
                        >
                          <span className={`${skill.size} ${skill.color} font-bold font-mono transition-all duration-300 hover:opacity-60`}>
                            {skill.name}
                          </span>
                          
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20"
                            >
                              <div className="bg-background/95 backdrop-blur-sm border border-terminal rounded px-3 py-1.5 whitespace-nowrap shadow-xl">
                                <div className="text-xs font-mono text-terminal font-bold">{skill.proficiency}</div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom - narrow */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-2xl mx-auto">
                    {skills.slice(25).map((skill, index) => {
                      const randomX = (Math.random() - 0.5) * 10;
                      const randomY = (Math.random() - 0.5) * 8;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5, x: randomX, y: randomY }}
                          animate={{ opacity: 1, scale: 1, x: randomX, y: randomY }}
                          transition={{ 
                            delay: (index + 25) * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.15, x: randomX, y: randomY }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative cursor-default"
                        >
                          <span className={`${skill.size} ${skill.color} font-bold font-mono transition-all duration-300 hover:opacity-60`}>
                            {skill.name}
                          </span>
                          
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20"
                            >
                              <div className="bg-background/95 backdrop-blur-sm border border-terminal rounded px-3 py-1.5 whitespace-nowrap shadow-xl">
                                <div className="text-xs font-mono text-terminal font-bold">{skill.proficiency}</div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-terminal/30 rounded-lg px-6 py-4 mb-6"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
                <div>
                  <div className="text-2xl font-bold text-terminal">{skills.length}</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan">6</div>
                  <div className="text-xs text-muted-foreground">Domains</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber">3+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">∞</div>
                  <div className="text-xs text-muted-foreground">Learning</div>
                </div>
              </div>
            </motion.div>

            {/* Continue link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-terminal font-mono text-xs hover:gap-3 transition-all duration-300"
              >
                <span>cd /contact</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
