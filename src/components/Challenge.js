import React, { useState, useEffect } from "react";
import "./challenge.css";
const Challenge = (props) => {
  const [file, setFile] = useState();
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setUser(props.user() || {});
  }, [props]);
  const upload = () => {
    if (!file) {
      return alert("Please upload a file");
    } else if (!title) {
      return alert("Please add a title");
    } else if (!description) {
      return alert("Please add a description");
    }
    props.unClosable("Your challenge is processing, kindly wait");
    fetch(`${process.env.REACT_APP_API_KEY}/posts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        video: file,
        author: {
          name: user.name,
          username: user.username,
          email: user.email,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        alert("uploaded challenge");
        props.closeUnclosable();
        window.location = "/#/browse";
      });
  };
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
    <div className="luredown">
      {user.username ? (
        <>
          <div className="chh">
            <h1>Post a public challenge</h1>
          </div>
          <div className="info">
            <div className="groupField">
              <legend>Title</legend>
              <input
                type="text"
                placeholder="Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="groupField" style={{ marginBottom: "2rem" }}>
              <legend> Description </legend>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe this challenge"
              ></textarea>
            </div>
            <div className="center">
              <label for="uploader" className="upload">
                Upload your challenge!
              </label>
              <br />

              <button className="groupField" id="submitButton" onClick={upload}>
                Submit
              </button>
            </div>
          </div>
          <input type="file" onChange={fileChange} id="uploader" />
          <br />
          <div className="videoContainer">
            <video controls key="updatee">
              {file ? <source src={file} /> : ""}
            </video>
          </div>
        </>
      ) : (
        <>
          {console.log("Not logged in")}
          <h1>Not logged in</h1>
        </>
      )}
    </div>
  );
};
export default Challenge;
