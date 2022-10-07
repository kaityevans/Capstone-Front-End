import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  // e.preventDefault();
  // document.cookie = "loggedIn=true;MaxAge=60000";
  // navigate("/");

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true;MaxAge=60000";
    navigate("/Favorites");
  };

  return (
    <div className="loginApp">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <h1 className="LoginH1">Login</h1>
          <TextField
            style={{ backgroundColor: "white", border: "50px green", padding: "1%", marginBottom: "10%" }}
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            placeholder="Username"
            type="text"
          />
          <TextField
            style={{ backgroundColor: "white", border: "50px green", padding: "1%", marginBottom: "10%" }}
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            placeholder="Password"
            type="password"
          />
          <Button
            style={{ margin: "1%", width: "101%" }}
            type="submit"
            className="login-button"
            variant="contained"
            color="inherit"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
