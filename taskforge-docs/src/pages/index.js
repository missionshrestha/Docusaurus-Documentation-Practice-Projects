import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="TaskForge – Developer-first project management"
      description="TaskForge is a lightweight project management platform with a CLI and API built for developers."
    >
      <main style={{ padding: "4rem 1.5rem" }}>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1080px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Ship projects faster with TaskForge
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              TaskForge is a developer-first project management platform with a
              clean dashboard, powerful CLI, and simple API. Automate project
              setup, manage tasks from your terminal, and keep your team in
              sync.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Get started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/pricing"
              >
                View pricing
              </Link>
            </div>

            <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.85 }}>
              Beta release • Built for teams that live in Git, terminals, and
              CI/CD.
            </p>
          </div>

          <div style={{ flex: "1 1 320px", textAlign: "center" }}>
            <img
              src="/img/screenshot-dashboard.png"
              alt="TaskForge dashboard screenshot"
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
