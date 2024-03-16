// Import React and any other necessary modules
import React from "react";
import Link from "next/link";

interface Styles {
  [key: string]: React.CSSProperties;
}

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.topRight}>
        <Link href="/privacyPolicy">Privacy Policy</Link>
        {/* <Link href="/requestToDeleteAccount" >Request to delete your account</Link> */}
      </div>
      <div style={styles.appHeadingContainer}>
        <h1 style={styles.centeredText}>Glorify God</h1>
      </div>
    </main>
  );
}

const styles: Styles = {
  container: {
    width: "100vw",
    backgroundColor: "red",
    height: "100vh",
  },
  topRight: {
    justifyContent: "flex-end",
    display: "flex",
    width:"100%",
    backgroundColor: "black",
    padding: "20px 80px",
    gap: "20px",
    alignItems: "center",
  },
  appHeadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100vw",
    backgroundColor: "black",
  
  },
  centeredText: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white", // Set the text color to white
  }, // Explicitly cast the style object
};
