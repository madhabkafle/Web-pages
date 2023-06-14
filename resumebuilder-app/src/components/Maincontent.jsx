import React from "react";

const Maincontent = ({ title }) =>{
    return(
        <Maincontent>
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

        </Maincontent>
    );
};