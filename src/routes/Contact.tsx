import React from "react";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">

        <h1 className="h1">Contact</h1>

        <div className="card frame" style={{ padding: 20 }}>

          <p className="p highlightLine">
            If something here resonated, feel free to reach out.
          </p>

          <p className="p">
            I’m always open to interesting ideas, collaborations, and building things that actually matter.
          </p>

          <p className="p subtle">
            You’ll find everything you need below.
          </p>

        </div>

      </div>

      <style>{`
        .highlightLine{
          font-size: 16px;
          font-weight: 500;
          color: #d6b3ff;
        }

        .subtle{
          opacity: 0.7;
          font-size: 13px;
        }
      `}</style>
    </section>
  );
}