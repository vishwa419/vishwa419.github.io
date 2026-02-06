import { motion } from "framer-motion";

export const SystemStatus = () => {
  const statusItems = [
    { label: "Systems Online", status: "operational" },
    { label: "Pipelines Active", status: "operational" },
    { label: "Deployments Ready", status: "operational" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-card border border-terminal/30 rounded-xl p-6 backdrop-blur-sm"
    >
      <div className="font-mono text-xs text-muted-foreground mb-4">
        // system_status
      </div>
      
      <div className="space-y-3">
        {statusItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-terminal pulse-node" />
            <span className="text-sm text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="font-mono text-xs text-muted-foreground">
          Last Deploy: <span className="text-terminal">3m ago</span>
        </div>
        <div className="font-mono text-xs text-muted-foreground mt-1">
          Uptime: <span className="text-terminal">99.9%</span>
        </div>
      </div>
    </motion.div>
  );
};
