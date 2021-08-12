import React, { useState } from "react";
import "./signup.css"
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
      <div className="container-sign">
      <h1 className="sign-up">Sign Up</h1>
      <br></br>
        <form onSubmit={signup} className="signup">
        
          <label className="label-sign" htmlFor="username">Username </label>
          <input className="input-fill3" id="username" placeholder="type your username" type="text" />
          <br />
          <label className="label-sign"  htmlFor="email">Email</label>
          <input className="input-fill3" id="email" placeholder="type your email" type="email" />
          <br />
          <label className="label-sign" htmlFor="name">Name </label>
          <input className="input-fill3" id="name" type="text" placeholder="type your name"/>
          <br />
          <label className="label-sign" htmlFor="password">Password </label>
          <input className="input-fill3" type="password"placeholder="type your password"  id="password" />
          <br />
          <label className="label-sign" htmlFor="confirm">Confirm password</label>
          <input className="input-fill3" type="password"placeholder="type your comfirm password"  id="confirm" />
          <br />
          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
      {msg?.messages?.map((ele) => {
        return <h4 style={{ color: msg.error ? "red" : "green" }}>{ele}</h4>;
      })}
    </div>
  );
};
export default Signup;