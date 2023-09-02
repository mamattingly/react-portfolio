import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import "./ContactStyles.css";

export const Contact = () => {
  // useRef is a React hook that allows us to access DOM elements.
  const form = useRef();

  // State declarations
  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [isFormValid, setFormValid] = useState(false);
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // useEffect checks if the form is valid.
  useEffect(() => {
    if (
      formState.user_name === "" ||
      formState.user_email === "" ||
      formState.message === ""
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formState.user_name, formState.user_email, formState.message]);

  // handleNameBlur, handleEmailBlur, and handleMessageBlur are event handlers that check if the form is valid.
  const handleNameBlur = () => {
    if (formState.user_name === "") {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(formState.user_email);
    setEmailValid(isValid);
  };

  const handleMessageBlur = () => {
    if (formState.message === "") {
      setMessageValid(false);
    } else {
      setMessageValid(true);
    }
  };

  // handleChange is an event handler that updates the formState.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === "user_name") {
      setNameValid(true);
    } else if (name === "user_email") {
      setEmailValid(true);
    } else if (name === "message") {
      setMessageValid(true);
    }
  };

  // sendEmail is an event handler that sends the email to the emailjs server.
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9v3d86w",
        "template_d90459p",
        form.current,
        "7Fjxh4cd-qP264EKp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormState({
            user_name: "",
            user_email: "",
            message: "",
          });
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
      {isNameValid ? null : <p className="error-message" style={{ color: 'red' }}>Name is required.</p>}
      <input
        type="text"
        name="user_name"
        value={formState.user_name}
        onChange={handleChange}
        onBlur={handleNameBlur}
        autoComplete="off"
      />
      <label>Email</label>
      {isEmailValid ? null : (
        <p className="error-message" style={{ color: 'red' }}>Email is Invalid or Blank.</p>
      )}
      <input
        type="email"
        name="user_email"
        value={formState.user_email}
        onChange={handleChange}
        onBlur={handleEmailBlur}
        autoComplete="off"
      />
      <label>Message</label>
      {isMessageValid ? null : (
        <p className="error-message" style={{ color: 'red' }}>Message is required.</p>
      )}
      <textarea
        name="message"
        value={formState.message}
        onChange={handleChange}
        onBlur={handleMessageBlur}
        autoComplete="off"
      />
      <input
        type="submit"
        value="Send"
        className="submit-btn"
        disabled={!isFormValid}
      />
    </form>
  );
};

export default Contact;
