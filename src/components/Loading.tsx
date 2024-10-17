import React from "react";
import "./../App.css";
const Loading: React.FC = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Sending email...</p>
    </div>
  );
};

export default Loading;
