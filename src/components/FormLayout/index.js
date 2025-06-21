import React from "react";

export default function FormLayout({ sectionName, TimelineItems, children }) {
  return (
    <div>
      <h2>{sectionName}</h2>
      <div className="timeline">
        {TimelineItems.map((item) => (
          <div key={item.id} className={item.selected ? "selected" : ""}>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="form-container">{children}</div>
    </div>
  );
}
