// PrivacyPolicy.tsx

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy for Glorify God App</h1>
      <p style={styles.date}>Effective Date: [December 23, 2023]</p>

      {/* Information We Collect */}
      <section style={styles.section}>
        <h2 style={styles.subheader}>Information We Collect</h2>
        <ol>
          <li>
            <strong>Account Information:</strong> When you create an account on
            the Glorify God App, we may collect personal information such as
            your name, email address, and a password. This information is used
            to identify you and facilitate a personalized experience on the App.
          </li>
          <li>
            <strong>Devotional Christian Songs:</strong> The core functionality
            of the Glorify God App involves listening to and uploading
            devotional Christian songs. We may collect information related to
            the songs you listen to and the songs you upload to provide you with
            an enhanced user experience.
          </li>
        </ol>
      </section>

      {/* How We Use Your Information */}
      <section style={styles.section}>
        <h2 style={styles.subheader}>How We Use Your Information</h2>
        <ol>
          <li>
            <strong>Personalization:</strong> We use the information collected
            to personalize your experience on the Glorify God App, suggesting
            devotional Christian songs based on your preferences and usage
            patterns.
          </li>
          <li>
            <strong>Account Management:</strong> Your account information is
            used for account management purposes, including authentication,
            security, and communication related to your account.
          </li>
          <li>
            <strong>Song Recommendations:</strong> We use data about the
            devotional Christian songs you listen to and upload to provide
            tailored song recommendations and improve the overall App
            experience.
          </li>
        </ol>
      </section>

      {/* Information Sharing */}
      <section style={styles.section}>
        <h2 style={styles.subheader}>Information Sharing</h2>
        <ol>
          <li>
            <strong>User-Generated Content:</strong> Devotional Christian songs
            uploaded by users are considered user-generated content. By using
            the Glorify God App, you understand and agree that this content will
            be shared with other users in accordance with the App&apos;s purpose.
          </li>
          <li>
            <strong>Service Providers:</strong> We may engage third-party
            service providers to assist with app functionality, analytics, and
            other services. These providers are obligated to maintain the
            confidentiality of your information and comply with applicable data
            protection laws.
          </li>
        </ol>
      </section>

      {/* Security */}
      <section style={styles.section}>
        <h2 style={styles.subheader}>Security</h2>
        <p>
          We prioritize the security of your information and employ reasonable
          measures to protect against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over
          the internet or electronic storage is entirely secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      {/* Changes to this Privacy Policy */}
      <section style={styles.section}>
        <h2 style={styles.subheader}>Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time, and such changes will be effective immediately upon posting. We
          encourage you to review this Privacy Policy periodically for any
          updates.
        </p>
      </section>

      {/* Contact Us */}
      <section style={styles.section}>
        <h2 style={styles.subheader}>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or the
          Glorify God App, please contact us at [E-main: k.syam7908@gmail.com, P.No: 9704263451].
        </p>
      </section>

      <p style={styles.consent}>
        By using the Glorify God App, you consent to the terms outlined in this
        Privacy Policy.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  } as React.CSSProperties,
  header: {
    color: "#ffffff",
    textAlign: "center",
  } as React.CSSProperties,
  date: {
    color: "#666",
    textAlign: "center",
    marginBottom: "20px",
  } as React.CSSProperties,
  section: {
    marginBottom: "30px",
  } as React.CSSProperties,
  subheader: {
    color: "#ffffff",
  } as React.CSSProperties,
  consent: {
    textAlign: "center",
    marginTop: "20px",
    fontStyle: "italic",
  } as React.CSSProperties,
};

export default PrivacyPolicy;
