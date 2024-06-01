import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { login } from "./authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="form-login">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        {error && <p className="error">{error}</p>}

        <div className="signup-link">
          <p>Don't have an account?</p>
          <NavLink to="/signup" className="signup-btn">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
