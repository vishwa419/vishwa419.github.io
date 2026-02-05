import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:viswanathkothe@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail size={20} />
              <span>viswanathkothe@gmail.com</span>
            </a>

            <a
              href="tel:+1-680-356-8964"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span>+1-680-356-8964</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/vishwa419"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/kothe-viswanath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
