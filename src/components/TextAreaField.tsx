import React from "react";

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
