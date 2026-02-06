import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Layers, Server, Cpu } from "lucide-react";
import { MermaidDiagram } from "./MermaidDiagram";

export interface ProjectArchitecture {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  github: string;
  tags: string[];
  architectureOverview: string;
  systemDiagram: string;
  deepDiveDiagram: string;
  deepDiveTitle: string;
  deepDiveDescription: string;
  keyDecisions: { label: string; detail: string }[];
}

interface ProjectDetailDialogProps {
  project: ProjectArchitecture | null;
  onClose: () => void;
}

export const ProjectDetailDialog = ({ project, onClose }: ProjectDetailDialogProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto px-6 py-8 max-w-5xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="font-mono text-terminal text-xs mb-2">
                $ kubectl describe deployment {project.id}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-sm">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-terminal/30 hover:bg-terminal/10 text-terminal transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Metadata bar */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-card border border-terminal/20 rounded-lg font-mono text-xs">
            <div>
              <span className="text-muted-foreground">Period: </span>
              <span className="text-foreground">{project.period}</span>
            </div>
            <div className="text-terminal/30">|</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded bg-terminal/10 text-terminal border border-terminal/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="ml-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-terminal hover:underline"
              >
                <Github size={14} />
                source
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Server size={16} className="text-terminal" />
              <h3 className="font-mono text-sm text-terminal uppercase tracking-wider">
                System Overview
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.architectureOverview}
            </p>
            <div className="bg-card border border-terminal/20 rounded-xl p-6 overflow-hidden">
              <div className="font-mono text-xs text-muted-foreground mb-4">
                // high-level architecture
              </div>
              <MermaidDiagram chart={project.systemDiagram} className="flex justify-center" />
            </div>
          </div>

          {/* Deep Dive */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Layers size={16} className="text-terminal" />
              <h3 className="font-mono text-sm text-terminal uppercase tracking-wider">
                {project.deepDiveTitle}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.deepDiveDescription}
            </p>
            <div className="bg-card border border-terminal/20 rounded-xl p-6 overflow-hidden">
              <div className="font-mono text-xs text-muted-foreground mb-4">
                // detailed component interaction
              </div>
              <MermaidDiagram chart={project.deepDiveDiagram} className="flex justify-center" />
            </div>
          </div>

          {/* Key Architecture Decisions */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={16} className="text-terminal" />
              <h3 className="font-mono text-sm text-terminal uppercase tracking-wider">
                Key Architecture Decisions
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.keyDecisions.map((decision, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-terminal/20 rounded-lg p-4"
                >
                  <div className="font-mono text-xs text-terminal mb-2">
                    {decision.label}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {decision.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-terminal/20 pt-6 flex items-center justify-between">
            <button
              onClick={onClose}
              className="font-mono text-sm text-muted-foreground hover:text-terminal transition-colors"
            >
              ← Back to Deployments
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-terminal hover:underline"
            >
              <Github size={16} />
              View Full Source
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
