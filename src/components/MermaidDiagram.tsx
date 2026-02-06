import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

let mermaidInitialized = false;

export const MermaidDiagram = ({ chart, className = "" }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const renderDiagram = async () => {
      if (!mermaidInitialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "#10b981",
            primaryTextColor: "#e5e5e5",
            primaryBorderColor: "#10b981",
            lineColor: "#10b981",
            secondaryColor: "#1a1a1a",
            tertiaryColor: "#262626",
            background: "#0a0a0a",
            mainBkg: "#1a1a1a",
            secondBkg: "#262626",
            textColor: "#e5e5e5",
            fontSize: "16px",
            fontFamily: "ui-monospace, monospace",
          },
        });
        mermaidInitialized = true;
      }

      try {
        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    };

    renderDiagram();
  }, [chart]);

  useEffect(() => {
    if (!containerRef.current || !svg) return;

    // Add click handlers to nodes
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const node = target.closest('.node');
      
      if (node) {
        const nodeId = node.id;
        
        // Map node IDs to routes or actions
        const routeMap: Record<string, string> = {
          'Experience': '/experience',
          'Projects': '/projects',
          'Skills': '/skills',
          'DB': '/resume.pdf', // Knowledge Base opens resume PDF
        };

        // Extract the node name from the ID (format: flowchart-NodeName-...)
        const nodeName = Object.keys(routeMap).find(name => 
          nodeId.includes(name)
        );

        if (nodeName && routeMap[nodeName]) {
          const route = routeMap[nodeName];
          
          // If it's a PDF, open in new tab
          if (route.endsWith('.pdf')) {
            window.open(route, '_blank');
          } else {
            navigate(route);
          }
        }
      }
    };

    containerRef.current.addEventListener('click', handleClick);

    return () => {
      containerRef.current?.removeEventListener('click', handleClick);
    };
  }, [svg, navigate]);

  return (
    <div 
      ref={containerRef} 
      className={`${className} [&_.node]:cursor-pointer [&_.node]:transition-all [&_.node:hover]:opacity-80`}
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};
