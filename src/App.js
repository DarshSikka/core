import "./App.css";
import Home from "./components/Home";
import Share from "./components/Share";
import Challenge from "./components/Challenge";
import React from "react";
import Signup from "./components/Signup";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
export default function App() {
  const [showLogin, setShowLogin] = React.useState(false);
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
              <NavLink to="/" activeClassName="selected" className="nav-items">
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
                to="/share"
                activeClassName="selected"
                className="nav-items"
              >
                Share
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
              <button
                className="nav-items"
                id="login"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </nav>
          </div>
          <Switch>
            <Route path="/challenge">
              <Challenge />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/share">
              <Share />
            </Route>
            <Route path="/browse">
              <Browse />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
      {showLogin ? <Login /> : ""}
    </>
  );
}
