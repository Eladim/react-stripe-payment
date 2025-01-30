import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessPage.css"; // Import external CSS

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <h1 className="success-title">Payment Successful! 🎉</h1>
        <p className="success-description">Thank you for your purchase. Your transaction was successful.</p>
        <button className="success-button" onClick={() => navigate("/")}>Return Home</button>
      </div>
    </div>
  );
};

export default SuccessPage;
