import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    subtitle: "Research Platform",
    company: "Syracuse University",
    location: "Remote, California",
    period: "Jun 2025 – Present",
    highlights: [
      "Designed multi-tenant GPU training platform (SLURM) supporting 50+ researchers",
      "Built LLM inference stack (vLLM + QLoRA) for high-throughput experimentation",
      "Orchestrated 500+ ML pipelines/day on AWS EKS with sandbox isolation",
      "Deployed GitOps IaC and OpenTelemetry, reducing job failures by 60%",
    ],
  },
  {
    title: "Software Engineer",
    subtitle: "AI/ML Platform",
    company: "ISRO",
    location: "Bangalore, India",
    period: "Jan 2022 – Jun 2023",
    highlights: [
      "Owned end-to-end ML infrastructure across SLURM, Kubernetes, SAN/Infiniband",
      "Built Kafka + Flink/Spark pipelines processing 1M+ events/day",
      "Created Kubernetes-based CI/CD reducing model releases from days to <30 min",
      "Deployed real-time anomaly detection with 0.95 F1 for satellite alerts",
    ],
  },
  {
    title: "Software Engineer",
    subtitle: "Observability",
    company: "Nuviso",
    location: "Bangalore, India",
    period: "Jun 2020 – Dec 2021",
    highlights: [
      "Architected streaming platform ingesting telemetry from 500+ devices",
      "Built Go + OpenSearch + React dashboards for incident response",
      "Standardized containerized CI/CD + GitOps workflows across services",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[19px] top-16 bottom-0 w-px bg-border hidden md:block" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {exp.title}
                      </h3>
                      <p className="text-primary text-sm">{exp.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Building2 size={16} />
                    <span>
                      {exp.company} • {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
