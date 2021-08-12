import React from "react";
export default function Modal(props) {
  return (
    <div
      style={{
        display: "flex",
        background: "white",
        width: "70%",
        position: "fixed",
        left: "20%",
      }}
      className="modal"
    >
      <h1>{props.title}</h1>
      <h5>{props.content}</h5>
    </div>
  );
}
