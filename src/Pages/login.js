import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import LoginButton from "../Components/loginButton";

const Login = () => {
  const staticCredentials = { userName: "admin", password: "admin" };
  const clientID =
    "1079278707521-b1c7oh9isnopva3eknej65nh74ml50k7.apps.googleusercontent.com"; // add your ownclient id
  const [user, setUser] = useState({ userName: "admin", password: "admin" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setUser({ ...user, [name]: value });
  // };
  const onLoginFailure = (error) => {
    setError("please Enter Valid Credentials");
  };

  const onLoginSucess = (value) => {
    localStorage.setItem("auth", JSON.stringify(value?.tokenObj));
    navigate("/dashboard");
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (
  //     staticCredentials.userName === user.userName &&
  //     staticCredentials.password === user.password
  //   ) {
  //     onLoginSucess();
  //   } else {
  //     onLoginFailure();
  //   }
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          onChange={handleChange}
          name="userName"
          type="text"
          value={user.userName}
        />
        <TextField
          required
          id="outlined-required"
          label="password"
          onChange={handleChange}
          name="password"
          type="password"
          value={user.password}
        />
        <Typography style={{ color: "red" }}>{error}</Typography>
        <Button type="submit">Submit</Button>
      </form> */}

      <LoginButton
        onLoginFailure={onLoginFailure}
        onLoginSucess={onLoginSucess}
      />
    </div>
  );
};
export default Login;
