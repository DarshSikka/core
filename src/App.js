import "./App.css";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import React from "react";
import Signup from "./components/Signup";
import ChallengeView from "./components/ChallengeView";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
export default function App() {
  const [user, setUser] = React.useState();
  const [showLogin, setShowLogin] = React.useState(false);
  if (localStorage.getItem("usrtok")) {
    fetch(`${process.env.REACT_APP_API_KEY}/auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tok: localStorage.getItem("usrtok"),
      }),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.success) {
          setUser(result.msg);
        }
      });
  }
  return (
    <>
      <Router>
        <div
          onClick={(e) => {
            console.log(e);
            if (e.target.id != "login") setShowLogin(false);
          }}
          className="main"
          style={{ background: showLogin ? "grey" : "" }}
        >
          <div className="navbar">
            <nav>
              <NavLink
                exact
                to="/"
                activeClassName="selected"
                className="nav-items"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="selected"
                className="nav-items"
              >
                About
              </NavLink>

              <NavLink
                to="/challenge"
                activeClassName="selected"
                className="nav-items"
              >
                Challenge
              </NavLink>
              <NavLink
                to="/browse"
                activeClassName="selected"
                className="nav-items"
              >
                Browse
              </NavLink>
              <NavLink
                to="/signup"
                activeClassName="selected"
                className="nav-items"
              >
                Signup
              </NavLink>
              {user?.username ? (
                <button
                  className="nav-items"
                  id="login"
                  onClick={() => {
                    localStorage.removeItem("usrtok");
                    window.location.reload();
                  }}
                >
                  Logout ({user.username})
                </button>
              ) : (
                <button
                  className="nav-items"
                  id="login"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
              )}
            </nav>
          </div>
          <Switch>
            <Route exact path="/challenge">
              <Challenge user={() => user} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route path="/challenge/:slug">
              <ChallengeView />
            </Route>
          </Switch>
        </div>
      </Router>
      {showLogin ? <Login /> : ""}
    </>
  );
}
