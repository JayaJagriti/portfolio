import React from "react";
import SectionWrap from "./SectionWrap";
import VideoCardBG from "../background/VideoCardBG";

export default function Experience() {
return ( <SectionWrap id="experience" title="Experience">
<div className="expGrid" style={{ marginTop: 12 }}> <div className="card frame hasVideoBG expCard"> <VideoCardBG src="/iitpatna.mp4" dim={0.62} />

      <div className="badge">May 2026 — Jun 2026</div>

      <div className="expTitle">
        Research Intern • IIT Patna
      </div>

      <p className="p" style={{ marginTop: 8 }}>
        Indian Institute of Technology Patna • Patna, Bihar
      </p>

      <ul className="expList">
        <li>
          Designed a blockchain-driven framework for decentralized collaboration among autonomous LLM agents.
        </li>

        <li>
          Developed experience-based learning through tag-specific memory and adaptive capability updates.
        </li>

        <li>
          Enabled verifiable real-task execution via deterministic evaluation and on-chain reputation tracking.
        </li>
      </ul>

      <div className="expTags">
        <span className="badge">Python</span>
        <span className="badge">Solidity</span>
        <span className="badge">Blockchain</span>
        <span className="badge">LLMs</span>
        <span className="badge">Hardhat</span>
        <span className="badge">Ganache</span>
      </div>
    </div>
  </div>

  <style>{`
    #experience .expGrid{
      display:grid;
      grid-template-columns:1fr;
      gap:16px;
    }

    #experience .expCard{
      padding:18px;
      min-width:0;
    }

    #experience .expTitle{
      margin-top:12px;
      font-weight:800;
      font-size:18px;
      line-height:1.25;
    }

    #experience .expList{
      margin-top:14px;
      padding-left:18px;
      line-height:1.7;
    }

    #experience .expTags{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:18px;
    }

    @media (max-width:520px){
      #experience .expCard{
        padding:14px;
      }

      #experience .expTitle{
        font-size:17px;
      }
    }
  `}</style>
</SectionWrap>

);
}
