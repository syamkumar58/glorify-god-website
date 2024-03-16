import React from "react";

const requestToDeleteAccount = () => {
  return (
    <div style={styles.mainBody}>
      <h1 style={styles.mainHeading}>Please provide a valid E-mail/Gmail</h1>
      <div style={styles.body}>
        <h4 style={styles.heading}>Enter your email</h4>
        <input type="text" style={styles.inputDecoration} />
      </div>
      <button style={styles.submitButton}>Submit</button>
    </div>
  );
};

export default requestToDeleteAccount;

const styles = {
  mainBody: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeading: {
    justifyContent: "top",
    display: "flex",
    backgroundColor: "black",
  },
  body: {
    display: "flex",
    flexDirection: "column" as const,
    margin: "80px 0px 20px 0px" as const, // top right bottom left
  },
  heading: {
    width: "300px",
    justifyContent: "left",
    padding: "0px 0px 15px 0px" as const, // top right bottom left
  },
  inputDecoration: {
    outline: "",
    transition: "ease-in-out 0.3s",
    width: "300px",
    height: "40px",
    borderRadius: "8px",
    focus: "red",
  },
  submitButton: {
    width: "100px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#AD1457 #FF80AB",
    color: "white",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
  },
};
