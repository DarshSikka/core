import React from "react";
import Eye from "./Eye.svg";
export default function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [msg, setMsg] = React.useState({});
  const login = () => {
    console.log("logging in");
    fetch(`${process.env.REACT_APP_API_KEY}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.log("logged in");
        if (result.auth) {
          setMsg({ error: false, message: "Logged in successfully" });
          localStorage.setItem("usrtok", result.token);
        } else {
          setMsg({ error: true, message: "Wrong username/password" });
        }
      });
  };
  return (
    <div className="Main">
      <div class="loginModal">
        <label className="loginLabel" htmlFor="username">
          Username
        </label>
        <br></br>
        <input
          className="input-fill1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
        />{" "}
        <br></br>
        <label className="loginLabel" htmlFor="password">
          Password
        </label>{" "}
        <br></br>
        <input
          type={showPass ? "text" : "password"}
          id="password"
          className="input-fill2"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br></br>
        <button className="eye" onClick={() => setShowPass(!showPass)}>
          <img src={Eye} className="eye" />
        </button>
        <br></br>
        <button className="login-btn" onClick={login}>
          Login
        </button>
        <br />
        <div className="loginMsgs">
          <>
            <p style={{ color: msg.error ? "red" : "green" }}>{msg.message}</p>
          </>
        </div>
      </div>
    </div>
  );
}
