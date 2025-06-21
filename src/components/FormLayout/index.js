import React from "react";
import { styled } from "@mui/system";
import Wrapper from './Wrapper';

export default function FormLayout({ sectionName, timelineItems, children, statusMessage, statusType }) {
  return (
    <Wrapper>
      <h2>{sectionName}</h2>
      <div className="timeline">
        {timelineItems.map((item) => (
          <div key={item.id} className={item.selected ? "selected" : ""}>
            <h4>{item.title}</h4>
            <p className={statusType}>{statusMessage || item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="form-container">{children}</div>
    </Wrapper>
  );
}

