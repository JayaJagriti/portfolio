import React from "react";

const projects = [
  {
    title: "PixelNerve AI Agent",
    desc: "Company-focused AI assistant for knowledge retrieval & intelligent workflows with multi-step reasoning.",
    tech: "LangGraph • Groq • RAG • AWS • HuggingFace",
    live: "https://huggingface.co/spaces/Kuki10/ai-agent",
    github: "https://github.com/JayaJagriti/ai-agent-langgraph"
  },
  {
    title: "MedGenie 3.0",
    desc: "Full-stack healthcare platform with telemedicine, climate-aware outbreak prediction, and real-time medical workflows.",
    tech: "React • Django/DRF • WebRTC • WebSockets • Groq",
    live: "https://medico-cyborg-db.vercel.app",
    github: ""
  },
  {
    title: "Employee Productivity Monitoring System",
    desc: "Real-time productivity monitoring system with event-driven backend, analytics dashboards, and automated alerts.",
    //tech: "REST APIs • Analytics • Backend Systems",
    live: "coming",
    github: ""
  },
  {
    title: "MIA Library System",
    desc: "Frontend-based library management system using browser local storage for persistent book tracking and issuing workflows.",
    tech: "React • Django • Tailwind",
    live: "https://jayajagriti.github.io/mia-library/",
    github: "https://github.com/JayaJagriti/mia-library"
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
              className={`card frame projectCard ${
                p.title.includes("AI Agent") ? "highlight" : ""
              }`}
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

                {p.github && (
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .projectCard{
          padding: 18px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .projectCard:hover{
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .projectCard h2{
          margin: 0 0 8px;
          font-size: 18px;
        }

        .tech{
          margin-top: 10px;
          font-size: 12px;
          opacity: 0.7;
        }

        .projectLinks{
          margin-top: 14px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .projectLinks a{
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          transition: all 0.25s ease;
        }

        .projectLinks a:hover{
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .comingTag{
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          border: 1px dashed rgba(255,255,255,0.3);
          opacity: 0.8;
          box-shadow: 0 0 10px rgba(255,255,255,0.1);
        }

        /* 🔥 Highlight AI Agent */
        .highlight{
          border: 1px solid rgba(120, 100, 255, 0.6);
          box-shadow: 0 0 40px rgba(120, 100, 255, 0.25);
        }
      `}</style>
    </section>
  );
}