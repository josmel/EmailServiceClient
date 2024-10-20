import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
