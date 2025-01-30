import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./PaymentPage.css"; // Import external CSS

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const PaymentPage = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 2000 }) // Example: $20.00
    });
    
    const session = await response.json();
    
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">Buy Product</h1>
        <p className="payment-description">Get instant access to our exclusive product with a one-time payment.</p>
        <button className="payment-button" onClick={handleCheckout}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;