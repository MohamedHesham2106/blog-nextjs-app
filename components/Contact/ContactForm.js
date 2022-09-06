import styles from "./ContactForm.module.css";
import { useEffect, useState } from "react";

import Notification from "../ui/Notification";

async function sendData(details) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(details),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); //=>pending , success , error
  const [error, setError] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
        setError(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  const submitMessageHandler = async (event) => {
    event.preventDefault();
    setStatus("pending");
    try {
      await sendData({
        email,
        name,
        message,
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setError(error.message);
    }
  };
  let notificationStatus;
  if (status === "pending") {
    notificationStatus = {
      status,
      title: "Sending Message!",
      message: "Your message is on its way!",
    };
  }
  if (status === "success") {
    notificationStatus = {
      status,
      title: "Message Received",
      message: "Your message has been sent!",
    };
  }
  if (status === "error") {
    notificationStatus = {
      status,
      title: "Error",
      message: error,
    };
  }
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={submitMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          message={notificationStatus.message}
          title={notificationStatus.title}
        />
      )}
    </section>
  );
};

export default ContactForm;
