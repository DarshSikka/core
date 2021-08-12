import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import React from "react";
import Tips from "./components/Tips";
import Signup from "./components/Signup";
import ChallengeView from "./components/ChallengeView";
import Reply from "./components/Reply";
import Replies from "./components/Replies";
import Modal from "./components/Modal";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
import About from "./components/About";
export default function App() {
  const [user, setUser] = React.useState();
  const [showLogin, setShowLogin] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modTitle, setModTitle] = React.useState("");
  const [modContent, setModContent] = React.useState("");
  const [unclosable, setUnclosable] = React.useState("");
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
            console.log(e.target.id);
            if ((e.target.id != "login") & (e.target.id != "modal")) {
              setShowLogin(false);
              setShowModal(false);
            } else if (e.target.id === "modal") {
              setShowModal(true);
            }
          }}
          className="main"
          style={{
            background: showLogin || showModal || unclosable ? "grey" : "",
          }}
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
              {user?.username ? (
                ""
              ) : (
                <NavLink
                  to="/signup"
                  activeClassName="selected"
                  className="nav-items"
                >
                  Signup
                </NavLink>
              )}

              <NavLink
                to="/tips"
                activeClassName="selected"
                className="nav-items"
              >
                Tips
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
                  Logout
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
              <text className="nav-items">{user?.username || "GUEST"}</text>
            </nav>
          </div>
          <Switch>
            <Route exact path="/challenge">
              <Challenge
                user={() => user}
                unClosable={(title, content) => {
                  setUnclosable(true);
                  setModTitle(title);
                  setModContent(content);
                }}
                closeUnclosable={() => {
                  setUnclosable(false);
                }}
              />
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
            <Route path="/reply/:slug">
              <Reply
                user={() => user}
                unClosable={(title, content) => {
                  setUnclosable(true);
                  setModTitle(title);
                  setModContent(content);
                }}
                closeUnclosable={() => {
                  setUnclosable(false);
                }}
                modalShow={(title, content) => {
                  setShowModal(true);
                  setModTitle(title);
                  setModContent(content);
                }}
              />
            </Route>
            <Route path="/replies/:slug">
              <Replies />
            </Route>
            <Route path="/tips">
              <Tips
                modalShow={(title, content) => {
                  setShowModal(true);
                  setModTitle(title);
                  setModContent(content);
                }}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      {console.log(modTitle)}
      {showLogin ? <Login /> : ""}
      {showModal ? (
        <>
          <Modal title={modTitle} content={modContent} />
          {console.log("modal present")}
        </>
      ) : (
        ""
      )}
      {unclosable ? <Modal title={modTitle} content={modContent} /> : ""}
    </>
  );
}
