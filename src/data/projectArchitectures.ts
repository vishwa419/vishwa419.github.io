import { ProjectArchitecture } from "@/components/ProjectDetailDialog";

export const projectArchitectures: ProjectArchitecture[] = [
  {
    id: "personal-agent",
    title: "Personal Agent",
    subtitle: "AI-Native Browser Assistant — GPT × MCP Agent Architecture",
    description:
      "AI-native browser assistant using GPT and MCP agent architecture for automated task tracking, deadline management, email workflows, and content summarization.",
    period: "Oct 2025 – Present",
    github: "https://github.com/vishwa419/PersonalAgent",
    tags: ["GPT", "MCP", "AI Agents", "Browser Extension"],
    architectureOverview:
      "The Personal Agent is a browser-native AI system that operates as a persistent background service. It intercepts user context from tabs, emails, and calendars, then routes tasks through an MCP (Model Context Protocol) orchestrator that coordinates multiple specialized GPT sub-agents. Each sub-agent owns a specific domain — task management, email drafting, content summarization — and communicates via structured tool-call interfaces. The architecture prioritizes local-first operation with selective cloud offloading for inference.",
    systemDiagram: `graph TD
      A["🌐 Browser Extension<br/><i>Content Script + Service Worker</i>"] --> B["🧠 MCP Orchestrator<br/><i>Task Router & Context Manager</i>"]
      B --> C["📋 Task Agent<br/><i>Deadline Tracking & Reminders</i>"]
      B --> D["✉️ Email Agent<br/><i>Draft Generation & Replies</i>"]
      B --> E["📄 Summarizer Agent<br/><i>Page & Document Digests</i>"]
      C --> F["💾 Local Store<br/><i>IndexedDB + Chrome Storage</i>"]
      D --> G["📡 Gmail API<br/><i>OAuth2 Integration</i>"]
      E --> H["🤖 GPT-4 API<br/><i>Inference Endpoint</i>"]
      B --> H
      F --> I["🔄 Sync Service<br/><i>Cloud Backup & Cross-Device</i>"]`,
    deepDiveTitle: "Agent Orchestration Flow",
    deepDiveDescription:
      "When a user triggers an action (or the system detects relevant context), the MCP orchestrator classifies the intent and dispatches to the appropriate sub-agent. Each agent follows a Plan → Execute → Verify loop using structured tool calls, ensuring deterministic outputs. The orchestrator maintains a shared context window, allowing agents to reference prior interactions without redundant API calls.",
    deepDiveDiagram: `sequenceDiagram
      participant U as User/Browser
      participant O as MCP Orchestrator
      participant T as Task Agent
      participant E as Email Agent
      participant S as Summarizer
      participant G as GPT-4 API

      U->>O: Context Event (tab change, email, calendar)
      O->>O: Intent Classification
      alt Task Management
          O->>T: Dispatch task context
          T->>G: Generate plan + tool calls
          G-->>T: Structured response
          T->>T: Execute & store locally
          T-->>O: Task result
      else Email Workflow
          O->>E: Dispatch email context
          E->>G: Draft generation
          G-->>E: Email draft
          E-->>O: Draft for review
      else Summarization
          O->>S: Dispatch page content
          S->>G: Summarize with constraints
          G-->>S: Condensed summary
          S-->>O: Summary result
      end
      O-->>U: Surface result in sidebar`,
    keyDecisions: [
      {
        label: "MCP over LangChain",
        detail:
          "Chose Model Context Protocol for its lightweight, tool-call-native interface. Avoids LangChain's abstraction overhead while maintaining structured agent communication.",
      },
      {
        label: "Local-First Architecture",
        detail:
          "IndexedDB as primary store with optional cloud sync. Ensures the agent works offline and minimizes latency for task operations.",
      },
      {
        label: "Sub-Agent Isolation",
        detail:
          "Each agent runs in its own execution context with a dedicated system prompt. Prevents prompt contamination and allows independent iteration.",
      },
      {
        label: "Structured Tool Calls",
        detail:
          "All agent outputs use JSON-schema-validated tool calls rather than free-text. Enables deterministic downstream processing and error recovery.",
      },
    ],
  },
  {
    id: "agentic-docker",
    title: "Agentic Docker",
    subtitle: "Modular AI Orchestration — LangGraph × RAG × Container Automation",
    description:
      "Modular agentic-AI system for task orchestration integrating GPT, MCP, and RAG to automate container deployments with LangGraph, LangChain, and Qdrant.",
    period: "Aug 2025 – Sep 2025",
    github: "https://github.com/vishwa419/Kitty_containers",
    tags: ["LangGraph", "LangChain", "RAG", "Docker", "Qdrant"],
    architectureOverview:
      "Agentic Docker reimagines container orchestration through an AI-first lens. Users describe infrastructure intent in natural language, which is parsed by a LangGraph state machine into a directed acyclic graph of container operations. A RAG pipeline backed by Qdrant retrieves relevant Dockerfiles, compose templates, and deployment patterns from a curated knowledge base, enabling the system to generate context-aware container configurations without hallucination.",
    systemDiagram: `graph TD
      A["👤 User Intent<br/><i>Natural Language Input</i>"] --> B["🔀 LangGraph<br/><i>State Machine & DAG Builder</i>"]
      B --> C["🔍 RAG Engine<br/><i>Context Retrieval</i>"]
      C --> D["🗄️ Qdrant<br/><i>Vector Store — Dockerfiles,<br/>Compose Templates</i>"]
      B --> E["🤖 GPT Planner<br/><i>Config Generation</i>"]
      C --> E
      E --> F["📝 Template Engine<br/><i>Dockerfile & Compose Gen</i>"]
      F --> G["🐳 Docker Engine<br/><i>Build & Deploy</i>"]
      G --> H["📊 Health Monitor<br/><i>Container Status & Logs</i>"]
      H --> B
      B --> I["🧠 MCP Controller<br/><i>Multi-Agent Coordination</i>"]`,
    deepDiveTitle: "LangGraph Orchestration Pipeline",
    deepDiveDescription:
      "The core innovation is the LangGraph state machine that models container deployment as a series of conditional nodes. Each node represents a deployment phase (validate → plan → generate → build → deploy → verify), with edges determined by runtime conditions. The RAG retrieval step enriches each phase with real-world patterns, reducing configuration errors by grounding generation in proven templates.",
    deepDiveDiagram: `graph LR
      subgraph "LangGraph State Machine"
        A["START"] --> B["🔍 Parse Intent"]
        B --> C{"Need<br/>Context?"}
        C -->|Yes| D["📚 RAG Retrieval<br/><i>Qdrant lookup</i>"]
        C -->|No| E["📋 Plan Generation"]
        D --> E
        E --> F{"Multi-<br/>Service?"}
        F -->|Yes| G["🔧 Compose Gen<br/><i>docker-compose.yml</i>"]
        F -->|No| H["🐳 Dockerfile Gen"]
        G --> I["✅ Validate Config"]
        H --> I
        I --> J{"Valid?"}
        J -->|No| E
        J -->|Yes| K["🚀 Deploy"]
        K --> L["🔄 Health Check"]
        L --> M{"Healthy?"}
        M -->|No| N["🔧 Auto-Remediate"]
        N --> E
        M -->|Yes| O["✅ DONE"]
      end`,
    keyDecisions: [
      {
        label: "LangGraph over Vanilla Chains",
        detail:
          "LangGraph's stateful DAG model maps naturally to deployment pipelines. Enables conditional branching, retry loops, and checkpoint recovery — impossible with linear chains.",
      },
      {
        label: "Qdrant for Template RAG",
        detail:
          "Vector similarity search over curated Dockerfiles and compose patterns. Eliminates hallucinated configurations by grounding generation in battle-tested templates.",
      },
      {
        label: "Self-Healing Feedback Loop",
        detail:
          "Health check failures feed back into the LangGraph state machine, triggering automated remediation nodes before surfacing errors to the user.",
      },
      {
        label: "MCP for Agent Coordination",
        detail:
          "Multi-agent coordination via MCP ensures each sub-task (networking, volumes, secrets) is handled by a specialized agent with its own tool set.",
      },
    ],
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Pipeline",
    subtitle: "GitOps-Driven ML Infrastructure — End-to-End Model Lifecycle",
    description:
      "GitOps-driven ML pipeline with automated data validation, feature store, model training, deployment, and monitoring using BentoML, MLFlow, Feast, and Grafana.",
    period: "Jun 2025 – Aug 2025",
    github: "https://github.com/vishwa419/MLOps_Inference",
    tags: ["MLOps", "BentoML", "MLFlow", "Feast", "Grafana"],
    architectureOverview:
      "This MLOps pipeline implements the full model lifecycle as a GitOps-controlled workflow. Every change — from data schema updates to model hyperparameters — flows through version-controlled configuration. The system integrates Feast for feature management, MLFlow for experiment tracking, BentoML for model serving, and Grafana for production monitoring, creating a reproducible and auditable ML infrastructure.",
    systemDiagram: `graph TD
      A["📦 Data Sources<br/><i>S3, Postgres, APIs</i>"] --> B["✅ Great Expectations<br/><i>Data Validation</i>"]
      B --> C["🍽️ Feast<br/><i>Feature Store</i>"]
      C --> D["🧪 MLFlow<br/><i>Experiment Tracking</i>"]
      D --> E["⚙️ Training Pipeline<br/><i>GPU Cluster — SLURM</i>"]
      E --> D
      D --> F["📊 Model Registry<br/><i>Versioning & Staging</i>"]
      F --> G["🚀 BentoML<br/><i>Model Packaging & Serving</i>"]
      G --> H["☸️ Kubernetes<br/><i>Deployment & Scaling</i>"]
      H --> I["📈 Grafana<br/><i>Monitoring & Alerting</i>"]
      I --> J["🔄 GitOps Controller<br/><i>ArgoCD — Config Sync</i>"]
      J --> E
      J --> H`,
    deepDiveTitle: "Model Lifecycle & GitOps Flow",
    deepDiveDescription:
      "The pipeline enforces a strict promotion path: models move from experimentation → staging → production through automated gates. Each transition requires passing data validation checks, performance benchmarks, and drift detection thresholds. ArgoCD watches the Git repository for configuration changes and reconciles the desired state with the running infrastructure, ensuring every deployment is traceable to a specific commit.",
    deepDiveDiagram: `sequenceDiagram
      participant D as Data Engineer
      participant G as Git Repository
      participant A as ArgoCD
      participant F as Feast
      participant M as MLFlow
      participant B as BentoML
      participant K as Kubernetes
      participant GR as Grafana

      D->>G: Push feature/model config
      G->>A: Webhook — config changed
      A->>F: Sync feature definitions
      A->>M: Trigger training pipeline
      M->>M: Run experiments, log metrics
      M->>M: Register best model → Staging
      M->>B: Package model as BentoService
      B->>K: Deploy canary (10% traffic)
      K->>GR: Stream metrics & latency
      GR->>GR: Evaluate drift & SLOs
      alt Metrics Pass
          GR->>K: Promote to 100% traffic
          K->>G: Update deployment status
      else Drift Detected
          GR->>A: Trigger rollback
          A->>K: Restore previous version
          A->>D: Alert — retraining needed
      end`,
    keyDecisions: [
      {
        label: "Feast for Feature Management",
        detail:
          "Centralized feature store ensures training/serving parity. Eliminates training-serving skew by serving the exact same feature transformations in both environments.",
      },
      {
        label: "BentoML over TorchServe",
        detail:
          "BentoML's framework-agnostic packaging supports multi-framework models (PyTorch, XGBoost, sklearn) in a single deployment unit with built-in API scaffolding.",
      },
      {
        label: "GitOps with ArgoCD",
        detail:
          "Every infrastructure and model config is version-controlled. ArgoCD reconciliation loops ensure the cluster state always matches the Git source of truth.",
      },
      {
        label: "Canary Deployments",
        detail:
          "New model versions receive 10% traffic initially. Grafana monitors latency, accuracy, and drift metrics before automated promotion to full traffic.",
      },
    ],
  },
];
