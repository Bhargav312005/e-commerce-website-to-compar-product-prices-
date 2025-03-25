import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted! Thank you.");
  };

  return (
    <div className="page-container">
      <h2>We value your feedback!</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          className="feedback-input"
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
