import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Link } from "@mui/material";
import Wrapper from "./Wrapper";
import axios from "axios";
import authService from "services/AuthService";

export default function AppLogin({
  isLoginMode,
  setIsLoginMode,
  setStatusType,
  setStatusMessage,
}) {
  const initUser ={ username: "", password: "" }
  const [credentials, setCredentials] = useState(initUser);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLoginMode) {
       const res =  await authService.login(credentials);
        localStorage.setItem("token", res.data.token);
        setStatusType("success");
        setStatusMessage("Login successful!");
        navigate("/");
      } else {
        await authService.register(credentials);
        setCredentials(initUser)
        setStatusType("success");
        setStatusMessage("Registration successful! You can now log in.");
        setIsLoginMode(true);
        navigate("/login");
      }
    } catch (err) {
      const errorMsg =
        err?.response?.data || "Something went wrong.";
      setStatusType("error");
      setStatusMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  }

  return (
     <Wrapper>
      <Typography variant="h5" gutterBottom>
        {isLoginMode ? "Login" : "Register"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <TextField
            label="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>
        <div className="form-field">
          <TextField
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          className="submit-btn"
          disabled={loading}
        >
          {isLoginMode ? "Login" : "Register"}
        </Button>
      </form>

    <Typography variant="body2" style={{ marginTop: "1rem" }}>
        {isLoginMode ? "First time here?" : "Already have an account?"}{" "}
        <Link
          component="button"
          variant="body2"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? "Register" : "Login"}
        </Link>
      </Typography>
    </Wrapper>
  );
}
