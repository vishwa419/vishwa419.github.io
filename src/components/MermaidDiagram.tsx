import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#0d9488",
    primaryTextColor: "#e2e8f0",
    primaryBorderColor: "#14b8a6",
    lineColor: "#14b8a6",
    secondaryColor: "#1e293b",
    tertiaryColor: "#0f172a",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "12px",
    nodeBorder: "#14b8a6",
    mainBkg: "#0f172a",
    clusterBkg: "#1e293b",
    clusterBorder: "#14b8a6",
    edgeLabelBackground: "#0f172a",
    nodeTextColor: "#e2e8f0",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 15,
  },
});

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export const MermaidDiagram = ({ chart, className = "" }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    const renderChart = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(idRef.current, chart);
        setSvg(renderedSvg);
      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    };
    renderChart();
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
