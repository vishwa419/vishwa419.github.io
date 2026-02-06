import { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight, ExternalLink, Github, Activity, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectDetailDialog } from "@/components/ProjectDetailDialog";
import { projectArchitectures } from "@/data/projectArchitectures";

const projects = [
  {
    id: "personal-agent",
    name: "personal-agent",
    namespace: "ai-agents",
    status: "Running",
    replicas: "3/3",
    image: "vishwa419/personal-agent:latest",
    title: "Personal Agent",
    description: "AI-native browser assistant using GPT and MCP agent architecture for automated task tracking, deadline management, email workflows, and content summarization.",
    tags: ["GPT", "MCP", "AI Agents", "Browser Extension"],
    github: "https://github.com/vishwa419/PersonalAgent",
    period: "Oct 2025 – Present",
    metrics: { type: "Agent", runtime: "Node.js" },
  },
  {
    id: "agentic-docker",
    name: "agentic-docker",
    namespace: "orchestration",
    status: "Running",
    replicas: "2/2",
    image: "vishwa419/kitty-containers:v2.1",
    title: "Agentic Docker",
    description: "Modular agentic-AI system for task orchestration integrating GPT, MCP, and RAG to automate container deployments with LangGraph, LangChain, and Qdrant.",
    tags: ["LangGraph", "LangChain", "RAG", "Docker", "Qdrant"],
    github: "https://github.com/vishwa419/Kitty_containers",
    period: "Aug 2025 – Sep 2025",
    metrics: { type: "Orchestrator", runtime: "Python" },
  },
  {
    id: "mlops-pipeline",
    name: "mlops-pipeline",
    namespace: "ml-infra",
    status: "Running",
    replicas: "5/5",
    image: "vishwa419/mlops-inference:stable",
    title: "MLOps Pipeline",
    description: "GitOps-driven ML pipeline with automated data validation, feature store, model training, deployment, and monitoring using BentoML, MLFlow, Feast, and Grafana.",
    tags: ["MLOps", "BentoML", "MLFlow", "Feast", "Grafana"],
    github: "https://github.com/vishwa419/MLOps_Inference",
    period: "Jun 2025 – Aug 2025",
    metrics: { type: "Pipeline", runtime: "Python" },
  },
];

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedArchitecture = selectedProjectId
    ? projectArchitectures.find((p) => p.id === selectedProjectId) ?? null
    : null;

  return (
    <PageLayout section="Deployments" sectionNumber="03">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <div className="font-mono text-terminal text-sm mb-4">
              $ kubectl get deployments -o wide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Active <span className="text-terminal">Deployments</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Production-ready projects running in the wild. Each container represents
              a system I've designed, built, and shipped.{" "}
              <span className="text-terminal font-mono text-sm">Click a deployment to inspect its architecture.</span>
            </p>
          </div>

          {/* Deployment table header */}
          <div className="bg-card border border-terminal/30 rounded-t-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-secondary/50 font-mono text-xs text-muted-foreground border-b border-terminal/20">
              <div className="col-span-1">STATUS</div>
              <div className="col-span-3">NAME</div>
              <div className="col-span-2 hidden md:block">NAMESPACE</div>
              <div className="col-span-2 hidden lg:block">REPLICAS</div>
              <div className="col-span-3 hidden md:block">IMAGE</div>
              <div className="col-span-1 hidden md:block text-right">INSPECT</div>
            </div>

            {/* Deployments list */}
            <div className="divide-y divide-terminal/10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* Row summary — clickable */}
                  <div
                    onClick={() => setSelectedProjectId(project.id)}
                    className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-terminal/5 transition-colors cursor-pointer"
                  >
                    <div className="col-span-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-terminal pulse-node" />
                        <Activity className="text-terminal hidden sm:block" size={14} />
                      </div>
                    </div>
                    <div className="col-span-11 md:col-span-3">
                      <span className="font-mono text-sm text-terminal group-hover:underline">{project.name}</span>
                    </div>
                    <div className="col-span-2 hidden md:block">
                      <span className="font-mono text-xs text-muted-foreground">{project.namespace}</span>
                    </div>
                    <div className="col-span-2 hidden lg:block">
                      <span className="font-mono text-xs text-terminal">{project.replicas}</span>
                    </div>
                    <div className="col-span-3 hidden md:block">
                      <span className="font-mono text-xs text-muted-foreground truncate block">{project.image}</span>
                    </div>
                    <div className="col-span-1 hidden md:flex justify-end">
                      <ChevronRight size={16} className="text-muted-foreground group-hover:text-terminal transition-colors" />
                    </div>
                  </div>

                  {/* Expanded details */}
                  <div className="px-6 pb-6 bg-secondary/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="font-mono text-xs px-2 py-1 rounded bg-terminal/10 text-terminal border border-terminal/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="space-y-2 mb-4">
                          <div className="font-mono text-xs">
                            <span className="text-muted-foreground">Period: </span>
                            <span className="text-foreground">{project.period}</span>
                          </div>
                          <div className="font-mono text-xs">
                            <span className="text-muted-foreground">Type: </span>
                            <span className="text-amber">{project.metrics.type}</span>
                          </div>
                          <div className="font-mono text-xs">
                            <span className="text-muted-foreground">Runtime: </span>
                            <span className="text-cyan">{project.metrics.runtime}</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-terminal font-mono text-sm hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                            <span>Source</span>
                            <ExternalLink size={12} />
                          </a>
                          <button
                            onClick={() => setSelectedProjectId(project.id)}
                            className="inline-flex items-center gap-2 text-terminal font-mono text-sm hover:underline border border-terminal/30 px-3 py-1 rounded hover:bg-terminal/10 transition-colors"
                          >
                            <span>Inspect Architecture</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer stats */}
          <div className="bg-card border border-t-0 border-terminal/30 rounded-b-xl px-6 py-4">
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>3 deployments running</span>
              <span className="text-terminal">All systems operational</span>
            </div>
          </div>

          {/* Continue link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-terminal font-mono text-sm hover:gap-4 transition-all duration-300"
            >
              <span>Explore the Stack</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
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
