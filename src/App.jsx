import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Leverage</h1>
        <p>AI-Powered Productivity Systems for People & Small Businesses</p>
      </header>

      <main className="features">
        <section>
          <h2>Automated Workflows</h2>
          <p>Integrate ChatGPT, Evernote, OneNote, Zapier, and Google Workspace to streamline your operations.</p>
        </section>
        <section>
          <h2>Smart Workspaces</h2>
          <p>Get pre-built and personalized digital notebooks, dashboards, and portals tailored to your workflow.</p>
        </section>
        <section>
          <h2>Done-For-You Setup</h2>
          <p>From client intake to automation and documentation—we do it all so you can focus on what matters.</p>
        </section>
      </main>

      <section className="contact-form">
        <h3>Contact Us</h3>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="How can we help?" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Leverage Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
