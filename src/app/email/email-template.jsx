import React from "react";

 const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  country,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
    }}
  >
    <h2>Notification of New Message from www.antwi-boasiako.com</h2>
    <p>Dear Dr. Antwi-Boasiako,</p>
    <p>
      You have received a new message through your website,{" "}
      <a
        href="http://www.antwi-boasiako.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.antwi-boasiako.com
      </a>
      . Below are the details of the sender:
    </p>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li>
        <strong>Name:</strong> {firstName} {lastName}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Phone Number:</strong> {phoneNumber}
      </li>
      <li>
        <strong>Country:</strong> {country}
      </li>
    </ul>
    <p>
      <strong>Message:</strong>
    </p>
    <blockquote
      style={{
        borderLeft: "4px solid #ccc",
        paddingLeft: "10px",
        margin: "10px 0",
      }}
    >
      {message}
    </blockquote>
    <p>
      We recommend reviewing this message and responding at your earliest
      convenience.
    </p>
    <p>Best regards,</p>
    <p>
      <strong>Website team</strong>
    </p>
  </div>
);

export default EmailTemplate;
