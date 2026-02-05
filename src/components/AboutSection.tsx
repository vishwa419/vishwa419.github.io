import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a Software Engineer passionate about building robust AI/ML infrastructure 
                and cloud-native platforms. With experience at organizations like{" "}
                <span className="text-primary font-medium">ISRO</span> and{" "}
                <span className="text-primary font-medium">Syracuse University</span>, 
                I specialize in designing systems that scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work spans distributed training platforms, real-time data pipelines, 
                and MLOps infrastructure—always with a focus on reliability, observability, 
                and developer experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">MS Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">Syracuse University</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Focus</p>
                    <p className="font-medium">AI/ML Infrastructure & Platform Engineering</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
