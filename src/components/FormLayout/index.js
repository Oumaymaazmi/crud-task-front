import React from "react";
import Wrapper from './Wrapper';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormLayout({ sectionName, timelineItems, children, statusMessage, statusType }) {
    const navigate = useNavigate();

    function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
  <Wrapper>
        <div className="header">
          <h2>{sectionName}</h2>
          <Button variant="outlined" className="logout-btn" onClick={handleLogout}>
            Logout
          </Button>
        </div>

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

