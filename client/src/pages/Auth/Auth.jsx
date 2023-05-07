import { useState, React } from "react";

import "../Auth/auth.css";
import icon from "../../assets/login_icon.png";
import Aboutauth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const signup = props.signup;
  // setIsSignup(signup);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter a email and password");
    }

    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      } else {
        if (!email) {
          alert("Enter a email ");
        } else if (!password) {
          alert("Enter a  password");
        }
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
    console.log({ name, email, password });
  };
  return (
    <section className="auth-section">
      {isSignup && <Aboutauth />}
      <div className="auth-container-1">
        {!isSignup && (
          <img
            src={icon}
            alt="stack overflow"
            className="login-logo"
            width="45"
          />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display name</h4>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>password</h4>

              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  fogot password
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                password must contain atleast eight characters including atleast
                1 number and 1 letter{" "}
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional <br />
                product updates, user research invitations,
                <br />
                company announcements, and digests.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "sign up" : "login"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our <br />
              <span style={{ color: "#007ac6" }}> terms of service</span>,
              <span style={{ color: "#007ac6" }}> privacy policy</span> and
              <span style={{ color: "#007ac6" }}> cookie policy</span>{" "}
            </p>
          )}
        </form>
        <p className="switch">
          {" "}
          {isSignup ? "Already have an account" : "Dont have an account"}{" "}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
