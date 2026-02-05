import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: "syracuse",
    stage: "STAGE_3",
    status: "RUNNING",
    title: "Software Engineer",
    team: "Research Platform",
    company: "Syracuse University",
    location: "Remote, California",
    period: "Jun 2025 – Present",
    metrics: {
      researchers: "50+",
      pipelines: "500+/day",
      improvement: "60%",
    },
    tasks: [
      "Designed multi-tenant GPU training platform (SLURM) with distributed training & checkpointing",
      "Built LLM inference stack (vLLM + QLoRA) enabling high-throughput experimentation",
      "Orchestrated 500+ ML pipelines/day on AWS EKS with sandbox isolation",
      "Deployed GitOps IaC and OpenTelemetry reducing job failures by 60%",
    ],
  },
  {
    id: "isro",
    stage: "STAGE_2",
    status: "COMPLETED",
    title: "Software Engineer",
    team: "AI/ML Platform",
    company: "ISRO",
    location: "Bangalore, India",
    period: "Jan 2022 – Jun 2023",
    metrics: {
      events: "1M+/day",
      f1Score: "0.95",
      deployTime: "<30min",
    },
    tasks: [
      "Owned end-to-end ML infrastructure across SLURM, Kubernetes, SAN/Infiniband",
      "Built Kafka + Flink/Spark pipelines processing 1M+ events/day with sub-200ms latency",
      "Created CI/CD platform reducing model releases from days to <30 minutes",
      "Deployed real-time anomaly detection (0.95 F1) for satellite failure alerts",
    ],
  },
  {
    id: "nuviso",
    stage: "STAGE_1",
    status: "COMPLETED",
    title: "Software Engineer",
    team: "Observability",
    company: "Nuviso",
    location: "Bangalore, India",
    period: "Jun 2020 – Dec 2021",
    metrics: {
      devices: "500+",
      stack: "Go + React",
    },
    tasks: [
      "Architected streaming platform ingesting telemetry from 500+ devices into Kafka",
      "Built Go + OpenSearch + React dashboards for incident response",
      "Standardized containerized CI/CD + GitOps workflows across services",
    ],
  },
];

const Experience = () => {
  return (
    <PageLayout section="Pipeline History" sectionNumber="02">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <div className="font-mono text-terminal text-sm mb-4">
              $ kubectl get jobs --all-namespaces
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pipeline <span className="text-terminal">History</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Each role is a stage in my career pipeline. Data flows through, 
              transformations happen, and value is delivered downstream.
            </p>
          </div>

          {/* Pipeline visualization */}
          <div className="relative">
            {/* Central pipeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 gradient-pipeline opacity-30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-8`}
                >
                  {/* Pipeline node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      exp.status === "RUNNING" 
                        ? "bg-terminal border-terminal pulse-node" 
                        : "bg-secondary border-terminal/50"
                    }`} />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="bg-card border border-terminal/30 rounded-xl p-6 hover:border-terminal/60 transition-all duration-300">
                      {/* Stage header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${
                          exp.status === "RUNNING" 
                            ? "bg-terminal/20 text-terminal" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {exp.stage}
                        </span>
                        <span className={`font-mono text-xs ${
                          exp.status === "RUNNING" ? "text-terminal" : "text-muted-foreground"
                        }`}>
                          {exp.status}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground ml-auto">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role info */}
                      <h3 className="font-display text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="text-terminal font-medium mb-1">{exp.team}</div>
                      <div className="text-muted-foreground text-sm mb-4">
                        {exp.company} • {exp.location}
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(exp.metrics).map(([key, value]) => (
                          <span key={key} className="font-mono text-xs px-2 py-1 rounded bg-secondary border border-border">
                            <span className="text-muted-foreground">{key}:</span>{" "}
                            <span className="text-amber">{value}</span>
                          </span>
                        ))}
                      </div>

                      {/* Tasks */}
                      <div className="space-y-2">
                        {exp.tasks.map((task, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="text-terminal flex-shrink-0 mt-0.5" size={14} />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
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
              to="/projects"
              className="inline-flex items-center gap-2 text-terminal font-mono text-sm hover:gap-4 transition-all duration-300"
            >
              <span>View Deployments</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Experience;
