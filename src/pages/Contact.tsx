import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Mail, Phone, Github, Linkedin, ExternalLink, CheckCircle2 } from "lucide-react";

const endpoints = [
  {
    method: "POST",
    path: "/contact/email",
    label: "Email",
    value: "viswanathkothe@gmail.com",
    href: "mailto:viswanathkothe@gmail.com",
    icon: Mail,
    status: 200,
  },
  {
    method: "GET",
    path: "/contact/phone",
    label: "Phone",
    value: "+1-680-356-8964",
    href: "tel:+1-680-356-8964",
    icon: Phone,
    status: 200,
  },
  {
    method: "GET",
    path: "/social/github",
    label: "GitHub",
    value: "github.com/vishwa419",
    href: "https://github.com/vishwa419",
    icon: Github,
    status: 200,
  },
  {
    method: "GET",
    path: "/social/linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/kothe-viswanath",
    href: "https://linkedin.com/in/kothe-viswanath",
    icon: Linkedin,
    status: 200,
  },
];

const Contact = () => {
  return (
    <PageLayout section="Establish Connection" sectionNumber="05">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="font-mono text-terminal text-sm mb-4">
              $ curl -X POST /api/v1/connect
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Establish <span className="text-terminal">Connection</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss infrastructure, ML systems, or new opportunities?
              All endpoints are live and accepting requests.
            </p>
          </div>

          {/* API-style contact endpoints */}
          <div className="bg-card border border-terminal/30 rounded-xl overflow-hidden mb-12">
            <div className="px-6 py-4 bg-secondary/50 border-b border-terminal/20 flex items-center justify-between">
              <span className="font-mono text-sm text-terminal">API Endpoints</span>
              <span className="font-mono text-xs text-muted-foreground">v1.0.0</span>
            </div>

            <div className="divide-y divide-terminal/10">
              {endpoints.map((endpoint, index) => (
                <motion.a
                  key={endpoint.path}
                  href={endpoint.href}
                  target={endpoint.href.startsWith("http") ? "_blank" : undefined}
                  rel={endpoint.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 px-6 py-5 hover:bg-secondary/30 transition-all group"
                >
                  <span className={`font-mono text-xs px-2 py-1 rounded ${
                    endpoint.method === "POST" 
                      ? "bg-terminal/20 text-terminal" 
                      : "bg-cyan/20 text-cyan"
                  }`}>
                    {endpoint.method}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm text-foreground group-hover:text-terminal transition-colors">
                      {endpoint.path}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground truncate">
                      {endpoint.value}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-terminal">{endpoint.status}</span>
                    <CheckCircle2 className="text-terminal" size={16} />
                    <ExternalLink className="text-muted-foreground group-hover:text-terminal transition-colors" size={14} />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="px-6 py-4 bg-secondary/30 border-t border-terminal/20">
              <div className="font-mono text-xs text-muted-foreground">
                <span className="text-terminal">✓</span> All endpoints healthy • Response time: &lt;50ms
              </div>
            </div>
          </div>

          {/* Terminal response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-terminal/30 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4 text-muted-foreground font-mono text-xs">
              <span className="text-terminal">→</span> Response
            </div>
            <pre className="font-mono text-sm text-foreground overflow-x-auto">
{`{
  "status": "available",
  "message": "Looking forward to connecting!",
  "interests": [
    "ML Infrastructure",
    "Platform Engineering", 
    "Distributed Systems",
    "Open Source"
  ],
  "response_time": "< 24 hours"
}`}
            </pre>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="font-mono text-xs text-muted-foreground mb-4">
              // EOF - Thank you for exploring the platform
            </div>
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Kothe Viswanath. Built with{" "}
              <span className="text-terminal">passion</span> and{" "}
              <span className="text-amber">coffee</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
