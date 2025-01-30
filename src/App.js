import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentPage from "./PaymentPage";
import SuccessPage from "./SuccessPage";
import CancelPage from "./CancelPage";
import "./PaymentPage.css"; // Import external CSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} /> {/* Add cancel route */}
      </Routes>
    </Router>
  );
};

export default App;
