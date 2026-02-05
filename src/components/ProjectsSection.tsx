import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Agent",
    description:
      "AI-native browser assistant using GPT and MCP agent architecture for automated task tracking, deadline management, email workflows, and content summarization.",
    tags: ["GPT", "MCP", "AI Agents", "Browser Extension"],
    github: "https://github.com/vishwa419/PersonalAgent",
    period: "Oct 2025 – Present",
  },
  {
    title: "Agentic Docker",
    description:
      "Modular agentic-AI system for task orchestration integrating GPT, MCP, and RAG to automate container deployments with LangGraph, LangChain, and Qdrant.",
    tags: ["LangGraph", "LangChain", "RAG", "Docker", "Qdrant"],
    github: "https://github.com/vishwa419/Kitty_containers",
    period: "Aug 2025 – Sep 2025",
  },
  {
    title: "MLOps Pipeline",
    description:
      "GitOps-driven ML pipeline with automated data validation, feature store, model training, deployment, and monitoring using BentoML, MLFlow, Feast, and Grafana.",
    tags: ["MLOps", "BentoML", "MLFlow", "Feast", "Grafana"],
    github: "https://github.com/vishwa419/MLOps_Inference",
    period: "Jun 2025 – Aug 2025",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground">
                  {project.period}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
