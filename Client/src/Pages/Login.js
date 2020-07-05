import React from "react";
import "./style.css";
import foodLogo from "./Assets/foodLogo.png";

export default function Login() {
  const logo = {
    width: "25%",
    marginTop: "8%"
  };
  const l1 = {
    marginTop: "10%",
    marginBottom: "10%",
    fontSize: "1.5em",
    width: "85%",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginLeft: "-8%"
  };
  const heading = {
    color: "grey"
  };
  const inputVal = {
    borderStyle: "none none solid none",
    borderColor: "grey",
    fontSize: "1.3em",
    width: "85%"
  };
  const loginButton = {
    marginTop: "10%",
    paddingTop: "3.5%",
    paddingBottom: "3.5%",
    width: "85%",
    fontSize: "0.9em",
    background: "#33C7FF",
    color: "white",
    fontWeight: "bold"
  };
  const googleLogin = {
    marginTop: "5%",
    paddingTop: "3.5%",
    paddingBottom: "3.5%",
    width: "85%",
    fontSize: "0.9em",
    background: "#3339FF",
    color: "white",
    fontWeight: "bold"
  };
  return (
    <div id="login">
      <img style={logo} src={foodLogo} alt="food" />
      <label style={l1}>Log in to your account</label>
      <label style={heading}>Email Address</label>
      <input style={inputVal} type="text" />
      <br />
      <label style={heading}>Password</label>
      <input style={inputVal} type="text" />
      <button type="submit" style={loginButton}>
        Log In
      </button>
      <button type="submit" style={googleLogin}>
        Log In with Google
      </button>
    </div>
  );
}
