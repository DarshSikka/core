import React from "react";
import "./Home.css";
import Illustration from "./home.png";
import { Link } from "react-router-dom";
import APose from "./A.jpeg";
export default function Home() {
  return (
    <div id="body">
      <div className="headingContainer">
        <h1 className="mainHeading">
          <span style={{ color: "red" }}>
            Ment
            <custom>
              <img src={APose} className="a" />
            </custom>
            cise
          </span>
          <custom style={{ fontSize: 40 }}>Yoga for destressing</custom>
        </h1>
        {/*<h2 style={{ fontSize: 19 }}>MENTAL HEALTH IS THE REAL WEALTH</h2>*/}
        <div className="containGet">
          <Link to="/signup">
            <button className="GetStarted">Get Started</button>
          </Link>
        </div>
      </div>
      <img src={Illustration} id="illus" />
    </div>
  );
}
