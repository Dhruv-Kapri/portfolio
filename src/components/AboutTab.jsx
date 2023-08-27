import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function AboutTab() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div>
      <div className="tab-titles">
        <p
          className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </p>
        <p
          className={`tab-links ${
            activeTab === "experience" ? "active-link" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </p>
        <p
          className={`tab-links ${
            activeTab === "education" ? "active-link" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </p>
      </div>
      <Skills tab={activeTab} />
      <Experience tab={activeTab} />
      <Education tab={activeTab} />
    </div>
  );
}
