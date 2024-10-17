/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import Loading from "./Loading";
import "./../App.css";

interface EmailDetails {
  to: string;
  subject: string;
  body: string;
}

const EmailForm: React.FC = () => {
  const [emailDetails, setEmailDetails] = useState<EmailDetails>({
    to: "",
    subject: "",
    body: "",
  });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailDetails({ ...emailDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL_SEND_MESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailDetails),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Email sent successfully!");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="To:"
          type="email"
          name="to"
          value={emailDetails.to}
          onChange={handleChange}
          required
        />
        <InputField
          label="Subject:"
          type="text"
          name="subject"
          value={emailDetails.subject}
          onChange={handleChange}
          required
        />
        <TextAreaField
          label="Message:"
          name="body"
          value={emailDetails.body}
          onChange={handleChange}
          required
        />
        <Button label="Send Email" onClick={() => {}} />
        {isLoading && <Loading />} {}
        {message && <div className="message">{message}</div>}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default EmailForm;
