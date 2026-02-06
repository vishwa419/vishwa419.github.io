import { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight, Github, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticCard } from "@/components/MagneticCard";
import { ProjectDetailDialog } from "@/components/ProjectDetailDialog";
import { projectArchitectures } from "@/data/projectArchitectures";

const projects = [
  {
    id: "personal-agent",
    title: "Personal Agent",
    description: "AI browser assistant for task tracking and automation",
    tags: ["GPT", "MCP", "AI Agents"],
    github: "https://github.com/vishwa419/PersonalAgent",
    period: "Oct 2025 – Present",
  },
  {
    id: "agentic-docker",
    title: "Agentic Docker",
    description: "Task orchestration with GPT, MCP, and RAG",
    tags: ["LangGraph", "RAG", "Docker"],
    github: "https://github.com/vishwa419/Kitty_containers",
    period: "Aug 2025 – Sep 2025",
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Pipeline",
    description: "GitOps-driven ML deployment with monitoring",
    tags: ["MLOps", "BentoML", "MLFlow"],
    github: "https://github.com/vishwa419/MLOps_Inference",
    period: "Jun 2025 – Aug 2025",
  },
];

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedArchitecture = selectedProjectId
    ? projectArchitectures.find((p) => p.id === selectedProjectId) ?? null
    : null;

  return (
    <PageLayout section="/projects" sectionNumber="02">
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
                $ ls -la ~/projects
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">
                Featured <span className="text-terminal">Projects</span>
              </h1>
              <p className="text-muted-foreground text-sm max-w-2xl">
                Production systems showcasing ML infrastructure and platform engineering
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {projects.map((project, index) => (
                <Link key={project.id} to="#" onClick={(e) => {
                  e.preventDefault();
                  setSelectedProjectId(project.id);
                }}>
                  <MagneticCard>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card border border-terminal/30 rounded-xl p-6 h-full hover:border-terminal hover:shadow-glow-sm transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-terminal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative h-full flex flex-col">
                        {/* Status indicator */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-terminal pulse-node" />
                          <span className="font-mono text-[10px] text-muted-foreground">
                            {project.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-terminal transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs mb-4 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] px-2 py-0.5 rounded bg-terminal/10 text-terminal border border-terminal/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-terminal/10">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-terminal text-xs font-mono hover:gap-2 transition-all"
                          >
                            <Github size={12} />
                            <span>Source</span>
                          </a>
                          
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedProjectId(project.id);
                            }}
                            className="flex items-center gap-1.5 text-terminal text-xs font-mono group-hover:gap-2 transition-all"
                          >
                            <Layers size={12} />
                            <span>Architecture</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </MagneticCard>
                </Link>
              ))}
            </div>

            {/* Stats footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-terminal/30 rounded-lg px-4 py-3 mb-8"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-muted-foreground">
                  {projects.length} projects deployed
                </span>
                <span className="text-terminal">All systems operational</span>
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
                to="/skills"
                className="inline-flex items-center gap-2 text-terminal font-mono text-xs hover:gap-3 transition-all duration-300"
              >
                <span>cd /skills</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Architecture Detail Dialog */}
      <ProjectDetailDialog
        project={selectedArchitecture}
        onClose={() => setSelectedProjectId(null)}
      />
    </PageLayout>
  );
};

export default Projects;
