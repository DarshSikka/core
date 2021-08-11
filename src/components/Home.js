import React from "react";
import "./Home.css";
import Illustration from "./homeillus.png";
export default function Home() {
  return (
    <div id="body">
      <div>
        <h1>
          MENTAL HEALTH IS
          <br /> THE<span id="red"> REAL WEALTH</span>
        </h1>
        <p>
          orem ispum dolor andjnadnd orem ispum dolor andjnadnd orem ispum dolor
          andjnadndorem ispum dolor andjnadndorem ispum dolor andjnadndorem
          ispum dolor andjnadndorem ispum dolor andjnadndorem ispum dolor
          andjnadndorem ispum dolor andjnadndorem ispum dolor andjnadndorem
          ispum dolor andjnadnd{" "}
        </p>
      </div>
      <img src={Illustration} height="200" id="illus" />
    </div>
  );
}
