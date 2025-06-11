import React, { useState } from 'react';
import ContactForm from './ContactForm';
import logo from '../assets/leverage_ai_logo.png'; // Import the logo image

function LandingPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactFormOpen(true);
  };

  const handleScheduleConsultation = () => {
    // Opens Calendly scheduling page in a new tab
    window.open('https://calendly.com/use-leverage-ai/30min', '_blank');
  };

  return (
    <div>
      <header>
       <div className="header-content">
  <img src="/leverage_ai_logo.png" alt="Leverage AI Logo" className="logo" />

          <span>LEVERAGE AI</span>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact" onClick={handleContactClick}>Contact</a>
          <a href="/demo">Demo</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Revolutionize Your Enterprise with AI Agents</h1>
        <p>Replace outdated systems, unlock efficiency, and drive unprecedented growth.</p>
        <a href="/demo" className="cta-button">Try Our Interactive Demo</a>
      </section>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="card">
            <h3>Intelligent Automation</h3>
            <p>Automate complex workflows and mundane tasks with smart AI agents.</p>
          </div>
          <div className="card">
            <h3>Predictive Analytics</h3>
            <p>Gain deep insights and anticipate future trends for proactive decision-making.</p>
          </div>
          <div className="card">
            <h3>Hyper-Personalization</h3>
            <p>Deliver tailored experiences to your customers and clients at scale.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <p>Leverage AI integrates seamlessly with your existing infrastructure, deploying intelligent agents that learn and adapt to your unique business needs. We identify bottlenecks, design AI-powered solutions, and implement them to deliver measurable results.</p>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Business?</h2>
        <p>Say goodbye to outdated systems and hello to the future of enterprise efficiency.</p>
        <button onClick={handleScheduleConsultation} className="cta-button">Get a Free Consultation</button>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Reach out to us to discuss your specific business needs and how Leverage AI can help.</p>
        <p>Email: info@use-leverage.com</p>
      </section>

      <footer>
        <p>&copy; 2025 Leverage AI. All rights reserved.</p>
      </footer>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
}

export default LandingPage;


