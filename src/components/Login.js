import React from "react";
export default function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [msg, setMsg] = React.useState({});
  const login = () => {
    console.log(process.env.REACT_APP_API_KEY);
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
        console.log(result.auth);
        if (result.auth) {
          setMsg({ error: false, message: "Logged in successfully" });
          localStorage.setItem("usrtok", result.token);
        } else {
          setMsg({ error: true, message: "Invalid credentials" });
        }
      });
  };
  return (
    <div class="loginModal">
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        id="username"
      />
      <input
        placeholder="password"
        type={showPass ? "text" : "password"}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPass(!showPass)}>:eye:</button>
      <button onClick={login}>Log me in</button>
      <h4 style={{ color: msg?.error ? "blue" : "yellow" }}>{msg?.message}</h4>
    </div>
  );
}
