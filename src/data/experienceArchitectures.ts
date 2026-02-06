import { ProjectArchitecture } from "@/components/ProjectDetailDialog";

export const experienceArchitectures: ProjectArchitecture[] = [
  {
    id: "syracuse",
    title: "Research Platform — Syracuse University",
    subtitle: "Multi-Tenant GPU Training Infrastructure & ML Pipeline Orchestration",
    description:
      "Designed multi-tenant GPU training platform (SLURM) supporting 50+ researchers with LLM inference, pipeline orchestration, and GitOps-driven observability.",
    period: "Jun 2025 – Present",
    github: "#",
    tags: ["SLURM", "vLLM", "QLoRA", "AWS EKS", "OpenTelemetry", "GitOps"],
    architectureOverview:
      "The Research Platform is a multi-tenant GPU cluster serving 50+ ML researchers. At its core is a SLURM-managed compute layer that handles distributed training jobs with automatic checkpointing and preemption. The inference layer runs vLLM with QLoRA adapters for high-throughput LLM experimentation. AWS EKS orchestrates 500+ ML pipelines daily with namespace-level isolation, while a GitOps controller (ArgoCD) ensures infrastructure state is always reconciled with version-controlled configuration. OpenTelemetry provides end-to-end observability across the entire stack.",
    systemDiagram: `graph TD
      A["👥 Researchers<br/><i>50+ concurrent users</i>"] --> B["🔐 Auth & Namespace<br/><i>RBAC + Tenant Isolation</i>"]
      B --> C["📋 Job Scheduler<br/><i>SLURM — GPU Allocation</i>"]
      C --> D["⚡ GPU Cluster<br/><i>Distributed Training<br/>Checkpointing & Preemption</i>"]
      C --> E["🧠 vLLM Inference<br/><i>QLoRA Adapters<br/>High-Throughput Serving</i>"]
      D --> F["💾 Shared Storage<br/><i>Model Artifacts & Datasets</i>"]
      E --> F
      B --> G["☸️ AWS EKS<br/><i>500+ Pipelines/Day<br/>Sandbox Isolation</i>"]
      G --> H["📊 OpenTelemetry<br/><i>Traces, Metrics, Logs</i>"]
      H --> I["📈 Grafana<br/><i>Dashboards & Alerting</i>"]
      J["🔄 ArgoCD<br/><i>GitOps IaC Controller</i>"] --> C
      J --> G`,
    deepDiveTitle: "Job Scheduling & Failure Recovery Flow",
    deepDiveDescription:
      "When a researcher submits a training job, the scheduler evaluates GPU availability, tenant quotas, and job priority. Jobs are assigned to isolated namespaces with resource limits. The checkpoint manager periodically saves model state, enabling seamless preemption recovery. If a job fails, OpenTelemetry traces pinpoint the failure stage, and the GitOps controller can auto-remediate infrastructure drift — reducing job failures by 60%.",
    deepDiveDiagram: `sequenceDiagram
      participant R as Researcher
      participant S as SLURM Scheduler
      participant G as GPU Node
      participant C as Checkpoint Manager
      participant O as OpenTelemetry
      participant A as ArgoCD

      R->>S: Submit training job
      S->>S: Check quota & GPU availability
      S->>G: Allocate GPUs + namespace
      G->>G: Start distributed training
      loop Every N steps
          G->>C: Save checkpoint
          C->>C: Write to shared storage
      end
      G->>O: Stream metrics & traces
      alt Job Succeeds
          G->>S: Report completion
          S->>R: Deliver model artifacts
      else Job Fails
          G->>O: Report failure trace
          O->>A: Trigger drift check
          A->>A: Reconcile infra state
          A->>S: Reschedule from checkpoint
          S->>G: Resume training
      end`,
    keyDecisions: [
      {
        label: "SLURM over K8s-native Scheduling",
        detail:
          "SLURM's GPU-aware scheduling with gang scheduling support outperforms generic Kubernetes schedulers for multi-node distributed training workloads with complex affinity requirements.",
      },
      {
        label: "vLLM + QLoRA for Inference",
        detail:
          "Continuous batching via vLLM maximizes GPU utilization for inference. QLoRA adapters allow per-researcher model customization without full fine-tuning overhead.",
      },
      {
        label: "Namespace-Level Tenant Isolation",
        detail:
          "Each research group gets an EKS namespace with dedicated resource quotas, network policies, and RBAC roles — preventing noisy-neighbor issues across 50+ concurrent users.",
      },
      {
        label: "OpenTelemetry + GitOps Feedback",
        detail:
          "Correlating OTel traces with ArgoCD sync status enables automated failure diagnosis. If infra drift caused a job failure, ArgoCD self-heals before rescheduling.",
      },
    ],
  },
  {
    id: "isro",
    title: "AI/ML Platform — ISRO",
    subtitle: "Satellite Telemetry Processing & Real-Time Anomaly Detection at Scale",
    description:
      "Owned end-to-end ML infrastructure across SLURM, Kubernetes, SAN/Infiniband, processing 1M+ events/day with real-time anomaly detection for satellite systems.",
    period: "Jan 2022 – Jun 2023",
    github: "#",
    tags: ["Kafka", "Flink", "Spark", "Kubernetes", "SLURM", "Infiniband"],
    architectureOverview:
      "The ISRO ML Platform handles the full lifecycle of satellite telemetry — from raw data ingestion through anomaly detection to operator alerting. A Kafka backbone ingests 1M+ events/day from satellite ground stations. Flink processes streams in real-time for anomaly detection (0.95 F1), while Spark handles batch feature engineering. The ML training cluster runs on SLURM with SAN/Infiniband for high-bandwidth model training. A custom CI/CD platform reduced model deployment time from days to under 30 minutes.",
    systemDiagram: `graph TD
      A["🛰️ Satellite Ground Stations<br/><i>Telemetry Feeds</i>"] --> B["📡 Data Ingestion<br/><i>Kafka — 1M+ events/day</i>"]
      B --> C["⚡ Flink Streaming<br/><i>Real-Time Processing<br/>sub-200ms latency</i>"]
      B --> D["🔥 Spark Batch<br/><i>Feature Engineering</i>"]
      C --> E["🚨 Anomaly Detector<br/><i>0.95 F1 Score</i>"]
      E --> F["📟 Alert System<br/><i>Operator Dashboards</i>"]
      D --> G["💾 Feature Store<br/><i>SAN Storage</i>"]
      G --> H["⚙️ Training Cluster<br/><i>SLURM + Infiniband</i>"]
      H --> I["📦 Model Registry<br/><i>Versioning & Staging</i>"]
      I --> J["🚀 CI/CD Platform<br/><i>< 30min Deploy</i>"]
      J --> C
      J --> K["☸️ K8s Serving<br/><i>Model Endpoints</i>"]`,
    deepDiveTitle: "Real-Time Anomaly Detection Pipeline",
    deepDiveDescription:
      "Satellite telemetry streams through Kafka topics partitioned by satellite ID. Flink operators apply sliding-window feature extraction and feed pre-trained anomaly models in real-time. When an anomaly score exceeds the threshold, the alert system triggers within 200ms of the raw event. The batch pipeline continuously retrains models on accumulated data, and the CI/CD platform hot-swaps model versions in the serving layer without downtime.",
    deepDiveDiagram: `sequenceDiagram
      participant S as Satellite
      participant K as Kafka
      participant F as Flink
      participant M as Anomaly Model
      participant A as Alert System
      participant SP as Spark Batch
      participant T as Training Cluster
      participant CD as CI/CD

      S->>K: Telemetry stream (partitioned by sat_id)
      K->>F: Consume real-time events
      F->>F: Sliding window features
      F->>M: Score anomaly probability
      alt Score > Threshold
          M->>A: Trigger alert (< 200ms)
          A->>A: Notify operators
      else Normal
          M->>M: Log & continue
      end
      K->>SP: Batch consume (hourly)
      SP->>SP: Feature engineering
      SP->>T: Trigger retraining
      T->>T: Train on accumulated data
      T->>CD: Register new model version
      CD->>M: Hot-swap model (zero-downtime)`,
    keyDecisions: [
      {
        label: "Kafka Partitioning Strategy",
        detail:
          "Partitioning by satellite ID ensures ordered processing per satellite while allowing horizontal scaling across the fleet. Critical for maintaining temporal consistency in anomaly detection.",
      },
      {
        label: "Flink over Spark Streaming",
        detail:
          "Flink's true event-time processing with sub-200ms latency was essential for real-time satellite alerting. Spark Streaming's micro-batch model couldn't meet the latency SLA.",
      },
      {
        label: "Infiniband for Training",
        detail:
          "SAN/Infiniband interconnect provides the bandwidth needed for distributed gradient synchronization across GPU nodes, critical for training on satellite imagery datasets.",
      },
      {
        label: "Hot-Swap Model Deployment",
        detail:
          "Blue-green model serving in Kubernetes allows zero-downtime model updates. The CI/CD pipeline validates model performance on shadow traffic before cutting over.",
      },
    ],
  },
  {
    id: "nuviso",
    title: "Observability Platform — Nuviso",
    subtitle: "Distributed Telemetry Ingestion & Real-Time Incident Response",
    description:
      "Architected a streaming platform ingesting telemetry from 500+ devices, with Go + OpenSearch dashboards for incident response and standardized GitOps CI/CD workflows.",
    period: "Jun 2020 – Dec 2021",
    github: "#",
    tags: ["Go", "Kafka", "OpenSearch", "React", "GitOps", "Docker"],
    architectureOverview:
      "The Nuviso Observability Platform is a distributed telemetry system that collects, processes, and visualizes metrics, logs, and traces from 500+ network devices. Go-based collectors handle high-throughput ingestion into Kafka, which feeds an OpenSearch cluster for search and analytics. React dashboards provide real-time incident response views with drill-down capabilities. The entire infrastructure runs on containerized microservices with GitOps-managed deployments.",
    systemDiagram: `graph TD
      A["📱 Network Devices<br/><i>500+ Sources</i>"] --> B["🔧 Go Collectors<br/><i>High-Throughput Agents</i>"]
      B --> C["📡 Kafka<br/><i>Event Backbone</i>"]
      C --> D["🔄 Stream Processor<br/><i>Enrichment & Routing</i>"]
      D --> E["🔍 OpenSearch<br/><i>Search & Analytics</i>"]
      D --> F["📊 Metrics Store<br/><i>Time-Series Data</i>"]
      E --> G["⚛️ React Dashboards<br/><i>Incident Response UI</i>"]
      F --> G
      G --> H["🚨 Alert Engine<br/><i>Rule-Based Triggers</i>"]
      I["🔄 GitOps / ArgoCD<br/><i>Deployment Controller</i>"] --> B
      I --> D
      I --> G`,
    deepDiveTitle: "Telemetry Ingestion & Incident Flow",
    deepDiveDescription:
      "Device agents push telemetry to Go collectors via gRPC. The collectors batch, compress, and forward events to Kafka. Stream processors enrich events with device metadata and route them to OpenSearch (logs/traces) or the metrics store (time-series). When an alert rule triggers, the React dashboard highlights the affected device hierarchy, providing operators with correlated logs, metrics, and topology views for rapid root-cause analysis.",
    deepDiveDiagram: `sequenceDiagram
      participant D as Device Agent
      participant C as Go Collector
      participant K as Kafka
      participant P as Stream Processor
      participant OS as OpenSearch
      participant UI as React Dashboard
      participant O as On-Call Engineer

      D->>C: gRPC telemetry push
      C->>C: Batch & compress
      C->>K: Produce events
      K->>P: Consume & enrich
      P->>OS: Index logs & traces
      P->>P: Evaluate alert rules
      alt Alert Triggered
          P->>UI: Push alert notification
          UI->>O: Display incident view
          O->>UI: Drill into device
          UI->>OS: Query correlated logs
          OS-->>UI: Return context
      else Normal Operations
          UI->>OS: Periodic dashboard refresh
          OS-->>UI: Updated metrics
      end`,
    keyDecisions: [
      {
        label: "Go for Collectors",
        detail:
          "Go's low memory footprint and goroutine concurrency model handles 500+ device connections efficiently. A single collector instance manages hundreds of concurrent gRPC streams.",
      },
      {
        label: "OpenSearch over Elasticsearch",
        detail:
          "Chose OpenSearch for its open-source licensing model and full compatibility with existing Elasticsearch queries. Avoided vendor lock-in while maintaining feature parity.",
      },
      {
        label: "Containerized GitOps",
        detail:
          "Every microservice runs in Docker with ArgoCD managing rollouts. Standardized CI/CD across all services reduced deployment friction and eliminated snowflake configurations.",
      },
      {
        label: "React + WebSocket Dashboards",
        detail:
          "Real-time incident views via WebSocket connections to the backend. Operators see live device status without polling, critical for sub-minute incident response times.",
      },
    ],
  },
];
