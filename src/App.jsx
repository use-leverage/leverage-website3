import React from 'react';

export default function App() {
  return (
    <>
      <header className="header">
        <div className="logo">Leverage</div>
        <nav>
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>AI Productivity Systems for People & Small Businesses</h1>
        <p>Automate, centralize, and scale smarter with ChatGPT, Evernote, OneNote, Zapier, and Google Workspace.</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </section>

      <section className="features" id="features">
        <h2>What We Offer</h2>
        <div className="feature-grid">
          <div className="card">
            <h3>Automated Workflows</h3>
            <p>Integrate and automate using your favorite tools — without the chaos.</p>
          </div>
          <div className="card">
            <h3>Smart Workspaces</h3>
            <p>Custom Evernote and OneNote dashboards built for your team’s flow.</p>
          </div>
          <div className="card">
            <h3>Done-For-You Setup</h3>
            <p>We handle everything: client intake, automation, and documentation.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how">
        <h2>Designed for Solopreneurs & Small Teams</h2>
        <p>We simplify your workday by eliminating clutter, confusion, and wasted time. No learning curve. Just clarity, automation, and results.</p>
      </section>

      <section className="cta">
        <h2>Book a Free Demo & See It In Action</h2>
        <a href="https://calendly.com/your-link" className="cta-button">Schedule Now</a>
      </section>

      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="How can we help?" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <nav>
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>© 2025 Leverage. All rights reserved.</p>
      </footer>
    </>
  );
}
