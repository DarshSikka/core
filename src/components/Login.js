import React from "react";
export default function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const login = () => {};
  return (
    <div class="loginModal">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        id="username"
      />
      <input
        type={showPass ? "text" : "password"}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPass(!showPass)}>:eye:</button>
      <button onClick={login}>Log me in</button>
    </div>
  );
}
