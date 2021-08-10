import React, { useState } from "react";
import "./challenge.css";
const Challenge = (props) => {
  const [file, setFile] = useState();
  const fileChange = (e) => {
    if (!file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      e.preventDefault();
      alert("File already uploaded");
      // switch this to a modal
    }
  };
  return (
    <div id="main">
      <h1>Post a public challenge</h1>
      <div className="info">
        <fieldset>
          <legend>Title</legend>
          <input type="text" placeholder="Title" id="title" />
        </fieldset>
        <fieldset>
          <legend> Description </legend>
          <textarea placeholder="Describe this challenge"></textarea>
        </fieldset>

        <label for="uploader" className="upload">
          Upload your challenge!
        </label>
      </div>
      <input type="file" onChange={fileChange} id="uploader" />
      <video controls key="updatee">
        {file ? <source src={file} /> : ""}
      </video>
    </div>
  );
};
export default Challenge;
