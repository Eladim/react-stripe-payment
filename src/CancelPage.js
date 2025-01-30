import React from "react";
import { useNavigate } from "react-router-dom";
import "./CancelPage.css"; // Import external CSS

const CancelPage = () => {
  const navigate = useNavigate();

  return (
    <div className="cancel-container">
      <div className="cancel-card">
        <h1 className="cancel-title">Payment Canceled ❌</h1>
        <p className="cancel-description">Your payment was not completed. If this was a mistake, you can try again.</p>
        <button className="cancel-button" onClick={() => navigate("/")}>Try Again</button>
      </div>
    </div>
  );
};

export default CancelPage;