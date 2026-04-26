import React from "react";

export default function About() {
  return (
    <section className="section">
      <div className="container">

        <h1 className="h1">About Me</h1>

        <div className="card frame aboutCard">

          <p className="p highlightLine">
            I like building systems that feel a little more alive than they should.
          </p>

          <p className="p">
            Somewhere between logic and intuition, I work on AI systems, backend architecture, and full-stack applications.
          </p>

          <p className="p">
            Lately, I’ve been exploring AI agents with LangGraph and RAG — systems that don’t just return answers, but move through problems step by step.
          </p>


          <p className="p">
            Most of what I build starts messy, becomes structured, and ends up doing something quietly useful.
          </p>

          <div className="aboutFun">
            <span>systems over features</span>
            <span>structure from chaos</span>
            <span>logic × intuition</span>
          </div>

        </div>

      </div>

      <style>{`
        .aboutCard{
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .highlightLine{
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.2px;
          color: #d6b3ff;
        }

        .aboutCard .p{
          line-height: 1.8;
          opacity: 0.92;
        }

        .aboutFun{
          margin-top: 12px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .aboutFun span{
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          opacity: 0.8;
          font-style: italic;
        }
      `}</style>
    </section>
  );
}