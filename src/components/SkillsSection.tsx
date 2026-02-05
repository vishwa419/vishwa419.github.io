import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Go", "Python", "JavaScript"],
  },
  {
    title: "ML/AI Infrastructure",
    skills: ["SLURM", "vLLM", "Kubeflow", "PyTorch", "TensorFlow"],
  },
  {
    title: "Cloud & Orchestration",
    skills: ["Kubernetes (EKS)", "Terraform", "ArgoCD", "Docker"],
  },
  {
    title: "Data & Streaming",
    skills: ["Kafka", "Flink", "Spark", "OpenSearch", "Redis"],
  },
  {
    title: "Observability",
    skills: ["OpenTelemetry", "Prometheus", "Grafana", "CloudWatch"],
  },
  {
    title: "Networking & Protocols",
    skills: ["gRPC", "REST", "WebSocket", "InfiniBand"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & <span className="text-gradient">Tools</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gradient-card p-6 rounded-xl border border-border"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
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
