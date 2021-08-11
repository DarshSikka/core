import React, { useState } from "react";
const Signup = (props) => {
  const [msg, setMsg] = useState({});
  const signup = (e) => {
    e.preventDefault();
    const [username, email, name, password, confirm] = e.target;
    if (password.value == confirm.value && password.value.length > 8) {
      fetch(`${process.env.REACT_APP_API_KEY}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
          name: name.value,
        }),
      })
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res);
          alert("Posted :)");
        })
        .then((resp) => resp.json())
        .then((result) => {
          console.log(result);
          if (result._id) {
            localStorage.setItem("usrtok", result._id);
            setMsg({
              messages: ["User created & Logged in"],
              error: false,
            });
          } else {
            setMsg({
              error: true,
              messages: ["Drat, username/email is taken :("],
            });
          }
        });
    } else {
      if (password.value.length <= 8) {
        setMsg({
          messages: [
            ...(msg.messages || []),
            "At least 8 characters needed for password",
          ],
          error: true,
        });
      }
      if (password.value != confirm.value) {
        setMsg({
          messages: [...(msg.messages || []), "Passwords don't match"],
          error: true,
        });
      }
    }
  };
  return (
    <div class="luredown">
      <form onSubmit={signup} className="signup">
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
        <label htmlFor="confirm">Confirm password:</label>
        <input type="password" id="confirm" />
        <button type="submit">Submit</button>
      </form>
      {msg?.messages?.map((ele) => {
        return <h4 style={{ color: msg.error ? "red" : "green" }}>{ele}</h4>;
      })}
    </div>
  );
};
export default Signup;
