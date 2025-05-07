import React from "react";

export default function LeverageHome() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "3rem", color: "#1E3A8A" }}>Leverage</h1>
      <p style={{ color: "#4B5563" }}>
        AI-Powered Productivity Systems for People & Small Businesses
      </p>

      <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
        <div style={{ border: "1px solid #E5E7EB", borderRadius: "1rem", padding: "1rem", background: "#fff" }}>
          <h2>Automated Workflows</h2>
          <p>Integrate ChatGPT, Evernote, OneNote, Zapier, and Google Workspace for seamless daily operations.</p>
        </div>

        <div style={{ border: "1px solid #E5E7EB", borderRadius: "1rem", padding: "1rem", background: "#fff" }}>
          <h2>Smart Workspaces</h2>
          <p>Receive pre-built and personalized digital notebooks, dashboards, and client portals.</p>
        </div>

        <div style={{ border: "1px solid #E5E7EB", borderRadius: "1rem", padding: "1rem", background: "#fff" }}>
          <h2>Done-For-You Setup</h2>
          <p>We do it all—client intake, automation, templates, and documentation delivered in a ready-to-use system.</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button style={{ background: "#2563EB", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontSize: "1rem" }}>
          Get Started Today
        </button>
      </div>
    </div>
  );
}
