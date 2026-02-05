import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight, Layers, Server, Database, Cloud, Activity, Network } from "lucide-react";
import { Link } from "react-router-dom";

const stackLayers = [
  {
    layer: "L7",
    name: "Application",
    color: "terminal-purple",
    icon: Layers,
    skills: ["Go", "Python", "JavaScript"],
    description: "Core languages powering the platform",
  },
  {
    layer: "L6",
    name: "ML/AI Runtime",
    color: "terminal",
    icon: Server,
    skills: ["SLURM", "vLLM", "Kubeflow", "PyTorch", "TensorFlow"],
    description: "Machine learning infrastructure & training systems",
  },
  {
    layer: "L5",
    name: "Orchestration",
    color: "cyan",
    icon: Cloud,
    skills: ["Kubernetes (EKS)", "Terraform", "ArgoCD", "Docker"],
    description: "Container orchestration & infrastructure as code",
  },
  {
    layer: "L4",
    name: "Data Layer",
    color: "amber",
    icon: Database,
    skills: ["Kafka", "Flink", "Spark", "OpenSearch", "Redis"],
    description: "Real-time streaming & data processing",
  },
  {
    layer: "L3",
    name: "Observability",
    color: "terminal",
    icon: Activity,
    skills: ["OpenTelemetry", "Prometheus", "Grafana", "CloudWatch"],
    description: "Monitoring, tracing & system visibility",
  },
  {
    layer: "L2",
    name: "Network",
    color: "cyan",
    icon: Network,
    skills: ["gRPC", "REST", "WebSocket", "InfiniBand"],
    description: "High-performance communication protocols",
  },
];

const Skills = () => {
  return (
    <PageLayout section="Infrastructure Stack" sectionNumber="04">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <div className="font-mono text-terminal text-sm mb-4">
              $ docker inspect --format='{`{{.Config.Labels}}`}' platform-stack
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Infrastructure <span className="text-terminal">Stack</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              The layered technology stack that powers scalable ML infrastructure.
              Each layer builds upon the next, creating a robust platform.
            </p>
          </div>

          {/* Stack visualization */}
          <div className="relative">
            {/* Vertical connection line */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-terminal via-cyan to-amber opacity-30" />

            <div className="space-y-4">
              {stackLayers.map((layer, index) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Layer indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-secondary border flex items-center justify-center ${
                      layer.color === "terminal" ? "border-terminal/50 text-terminal" :
                      layer.color === "cyan" ? "border-cyan/50 text-cyan" :
                      layer.color === "amber" ? "border-amber/50 text-amber" :
                      "border-terminal-purple/50 text-terminal-purple"
                    }`}>
                      <layer.icon size={20} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-card border border-terminal/20 rounded-xl p-6 hover:border-terminal/40 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                            layer.color === "terminal" ? "bg-terminal/20 text-terminal" :
                            layer.color === "cyan" ? "bg-cyan/20 text-cyan" :
                            layer.color === "amber" ? "bg-amber/20 text-amber" :
                            "bg-terminal-purple/20 text-terminal-purple"
                          }`}>
                            {layer.layer}
                          </span>
                          <h3 className="font-display text-lg font-bold">{layer.name}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{layer.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {layer.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="font-mono text-sm px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-terminal/50 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stack summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-card border border-terminal/30 rounded-xl p-6"
          >
            <div className="font-mono text-xs text-muted-foreground mb-4">
              // stack_summary.json
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="font-display text-3xl font-bold text-terminal">6</div>
                <div className="font-mono text-xs text-muted-foreground">Stack Layers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-amber">24</div>
                <div className="font-mono text-xs text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-cyan">3</div>
                <div className="font-mono text-xs text-muted-foreground">Languages</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-terminal-purple">∞</div>
                <div className="font-mono text-xs text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </motion.div>

          {/* Continue link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-terminal font-mono text-sm hover:gap-4 transition-all duration-300"
            >
              <span>Establish Connection</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Skills;
