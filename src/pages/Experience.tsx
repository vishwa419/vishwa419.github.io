import { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectDetailDialog } from "@/components/ProjectDetailDialog";
import { experienceArchitectures } from "@/data/experienceArchitectures";

const experiences = [
  {
    id: "syracuse",
    status: "RUNNING",
    title: "Software Engineer",
    company: "Syracuse University",
    location: "Remote, California",
    period: "Jun 2025 – Present",
    metrics: ["50+ researchers", "500+ pipelines/day", "60% fewer failures"],
    achievements: [
      "Multi-tenant GPU training platform with distributed training",
      "LLM inference stack (vLLM + QLoRA) for high-throughput experiments",
      "GitOps IaC + OpenTelemetry monitoring",
    ],
    transition: "Pursuing MS while building research infrastructure",
  },
  {
    id: "isro",
    status: "COMPLETED",
    title: "Software Engineer",
    company: "ISRO",
    location: "Bangalore, India",
    period: "Jan 2022 – Jun 2023",
    metrics: ["1M+ events/day", "0.95 F1 score", "<30min deploys"],
    achievements: [
      "End-to-end ML infrastructure (SLURM, K8s, SAN/Infiniband)",
      "Kafka + Flink/Spark pipelines with sub-200ms latency",
      "Real-time anomaly detection for satellite failure alerts",
    ],
    transition: "Moved from backend to ML platform engineering",
  },
  {
    id: "nuviso",
    status: "COMPLETED",
    title: "Software Engineer",
    company: "Nuviso",
    location: "Bangalore, India",
    period: "Jun 2020 – Dec 2021",
    metrics: ["500+ devices", "Go + React", "GitOps workflows"],
    achievements: [
      "Streaming platform ingesting telemetry from 500+ devices",
      "Go + OpenSearch + React dashboards for incident response",
      "Standardized containerized CI/CD across services",
    ],
    transition: null,
  },
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedArchitecture = selectedId
    ? experienceArchitectures.find((e) => e.id === selectedId) ?? null
    : null;

  return (
    <PageLayout section="/experience" sectionNumber="01">
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
                $ cat experience.log
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">
                Experience <span className="text-terminal">Timeline</span>
              </h1>
              <p className="text-muted-foreground text-sm max-w-2xl">
                3+ years building ML platforms and data infrastructure
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-terminal/20 hidden md:block" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative grid md:grid-cols-2 gap-4 items-start"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 hidden md:flex z-10">
                        <div
                          className={`w-3 h-3 rounded-full border-2 ${
                            exp.status === "RUNNING"
                              ? "bg-terminal border-terminal pulse-node"
                              : "bg-background border-terminal/50"
                          }`}
                        />
                      </div>

                      {/* Left: Role Card */}
                      <div className="md:pr-8">
                        <div className="bg-card border border-terminal/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                                exp.status === "RUNNING"
                                  ? "bg-terminal/20 text-terminal"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {exp.status}
                            </span>
                            <span className="font-mono text-[10px] text-muted-foreground">
                              {exp.period}
                            </span>
                          </div>

                          <h3 className="font-display text-lg font-bold mb-1">
                            {exp.title}
                          </h3>
                          <div className="text-terminal text-sm font-medium mb-1">
                            {exp.company}
                          </div>
                          <div className="text-muted-foreground text-xs mb-3">
                            {exp.location}
                          </div>

                          {/* Metrics */}
                          <div className="flex flex-wrap gap-1.5">
                            {exp.metrics.map((metric, i) => (
                              <span
                                key={i}
                                className="font-mono text-[10px] px-2 py-1 rounded bg-secondary border border-terminal/20 text-terminal"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Achievements Card */}
                      <div className="md:pl-8">
                        <div
                          onClick={() => setSelectedId(exp.id)}
                          className="bg-card border border-border rounded-lg p-4 cursor-pointer hover:border-terminal/50 transition-all group"
                        >
                          <div className="space-y-2 mb-3">
                            {exp.achievements.map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                              >
                                <span className="text-terminal mt-0.5">→</span>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>

                          <button className="flex items-center gap-1.5 text-terminal text-xs font-mono group-hover:gap-2 transition-all">
                            <Layers size={12} />
                            <span>View architecture</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Transition story */}
                    {exp.transition && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                        className="relative mt-4 mb-4"
                      >
                        <div className="flex items-center justify-center">
                          <div className="bg-secondary border border-terminal/20 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground">
                            {exp.transition}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Continue link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-terminal font-mono text-xs hover:gap-3 transition-all duration-300"
              >
                <span>cd /projects</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Architecture Detail Dialog */}
      <ProjectDetailDialog
        project={selectedArchitecture}
        onClose={() => setSelectedId(null)}
      />
    </PageLayout>
  );
};

export default Experience;
