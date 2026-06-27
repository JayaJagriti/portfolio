import React from "react";

const projects = [
  {
    title: "Decentralized LLM Multi-Agent System",
    desc: "Blockchain-driven framework for autonomous, self-improving LLM agents featuring decentralized collaboration, adaptive learning, and verifiable execution.",
    tech: "Python • Solidity • Blockchain • Hardhat • Ganache • Ollama • LLMs",
    live: "coming",
    github: "",
    glow: "#38BDF8" // Cyan
  },

  {
    title: "PixelNerve AI Agent",
    desc: "Enterprise AI assistant for knowledge retrieval, multi-step reasoning, PDF Q&A, and context-aware workflows using RAG and autonomous tool execution.",
    live: "https://huggingface.co/spaces/Kuki10/ai-agent",
    github: "https://github.com/JayaJagriti/ai-agent-langgraph",
    glow: "#8B5CF6" // Purple
  },

  {
    title: "MedGenie 3.0",
    desc: "Full-stack healthcare platform with telemedicine, climate-aware outbreak prediction, and real-time medical workflows.",
    tech: "React • Django/DRF • WebRTC • WebSockets • Groq",
    live: "https://medico-cyborg-db.vercel.app",
    github: "",
    glow: "#10B981" // Emerald
  },

  {
    title: "Employee Productivity Monitoring System",
    desc: "Real-time productivity monitoring system with event-driven backend, analytics dashboards, and automated alerts.",
    tech: "Analytics • Dashboards • Backend Systems",
    live: "coming",
    github: "",
    glow: "#F59E0B" // Amber
  },

  {
    title: "MIA Library System",
    desc: "Frontend-based library management system using browser local storage for persistent book tracking and issuing workflows.",
    tech: "React • Django • Tailwind",
    live: "https://jayajagriti.github.io/mia-library/",
    github: "https://github.com/JayaJagriti/mia-library",
    glow: "#EC4899" // Pink
  }
];

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Projects</h1>

        <div className="projectsGrid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="card frame projectCard"
              style={{
                border: `1px solid ${p.glow}70`,
                boxShadow: `0 0 28px ${p.glow}30`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 55px ${p.glow}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 28px ${p.glow}30`;
              }}
            >
              <h2>{p.title}</h2>

              <p className="p">{p.desc}</p>

              <div className="tech">{p.tech}</div>

              <div className="projectLinks">
                {p.live === "coming" ? (
                  <span className="comingTag">✨ Coming Soon</span>
                ) : (
                  p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      🔗 Live
                    </a>
                  )
                )}

                {p.github &&
                  p.github !== "soon" && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      💻 GitHub
                    </a>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projectsGrid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:20px;
          margin-top:24px;
        }

        .projectCard{
          padding:18px;
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .projectCard:hover{
          transform: translateY(-6px) scale(1.02);
        }

        .projectCard h2{
          margin:0 0 8px;
          font-size:18px;
        }

        .tech{
          margin-top:10px;
          font-size:12px;
          opacity:.72;
        }

        .projectLinks{
          margin-top:14px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .projectLinks a{
          padding:6px 12px;
          border-radius:999px;
          font-size:12px;
          text-decoration:none;
          border:1px solid rgba(255,255,255,.2);
          color:white;
          transition:all .25s ease;
        }

        .projectLinks a:hover{
          background:rgba(255,255,255,.1);
          transform:translateY(-2px);
        }

        .comingTag{
          padding:6px 12px;
          border-radius:999px;
          font-size:12px;
          border:1px dashed rgba(255,255,255,.3);
          opacity:.85;
        }

        @media (max-width:600px){
          .projectsGrid{
            grid-template-columns:1fr;
          }

          .projectCard{
            padding:16px;
          }
        }
      `}</style>
    </section>
  );
}