import React from "react";
import "./Header.css";

const ResumeSection = ({ title }) => {
  return (
    <div className="resume-section">
      <button className="drag-button">&#x2195;</button>
      <button className="description-button">&#9432;</button>
      <div className="section-info">
        <h3 className="section-title">{title}</h3>
        <button className="edit-button">&#9998;</button>
        <label className="toggle-label">
          <input type="checkbox" className="toggle-checkbox" />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="resume-sections">
      <div className="resume">
        <ResumeSection title="Profile Summary" />
        <ResumeSection title="Academic and Circular Achievement" />
        <ResumeSection title="Summer Internship Experience" />
        <ResumeSection title="Work Experiences" />
        <ResumeSection title="Projects" />
        <ResumeSection title="Certificates" />
        <ResumeSection title="Leadership Position" />
        <ResumeSection title="Extracurricular" />
        <ResumeSection title="Education" />
        </div>
      </div>
      <div className="heading">
          Select your sections
      </div>
    </div>
  );
};

export default App;