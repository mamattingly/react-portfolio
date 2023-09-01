import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactStyles.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NL_SERVICE,
        process.env.NL_TEMPLATE,
        form.current,
        process.env.NL_PK
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2>Contact Me</h2>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" className="submit-btn" /> 
    </form>
  );
};

export default Contact;
