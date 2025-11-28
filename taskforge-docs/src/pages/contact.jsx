import React from 'react';
import Layout from '@theme/Layout';

export default function ContactPage() {
  return (
    <Layout
      title="Contact"
      description="Get in touch with the TaskForge team."
    >
      <main style={{ padding: '4rem 1.5rem' }}>
        <section
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 260px', minWidth: '260px' }}>
            <h1>Contact us</h1>
            <p>
              Have questions about TaskForge, need help getting set up, or want
              to talk about a larger rollout? We'd love to hear from you.
            </p>

            <h2>Support</h2>
            <p>
              Email us at{' '}
              <a href="mailto:support@taskforge.dev">
                support@taskforge.dev
              </a>
              .
            </p>

            <h2>Other channels</h2>
            <ul>
              <li>Product feedback: feedback@taskforge.dev</li>
              <li>Sales inquiries: sales@taskforge.dev</li>
            </ul>
          </div>

          <div
            style={{
              flex: '1 1 260px',
              minWidth: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'var(--ifm-background-surface-color)',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            }}
          >
            <h2>How can we help?</h2>
            <p>
              When you reach out, it helps to include:
            </p>
            <ul>
              <li>Your TaskForge plan (Free, Pro, or Enterprise)</li>
              <li>A short description of what you're trying to do</li>
              <li>Any relevant project IDs or error messages</li>
            </ul>
            <p>
              We'll get back to you as soon as we can—typically within one business
              day for Pro and Enterprise customers.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}