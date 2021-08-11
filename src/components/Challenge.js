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
    console.log("Calling upload");
    console.log({
      title,
      description,
      video: file,
      author: {
        name: user.name,
        username: user.username,
        email: user.email,
      },
    });
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
    }).then(resp=>resp.json()).then(res=>alert("uploaded challenge"));
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
          <h1>Post a public challenge</h1>
          <div className="info">
            <fieldset>
              <legend>Title</legend>
              <input
                type="text"
                placeholder="Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <legend> Description </legend>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe this challenge"
              ></textarea>
            </fieldset>

            <label for="uploader" className="upload">
              Upload your challenge!
            </label>
            <br />
            <button className="challengeSubmit" onClick={upload}>
              Submit
            </button>
          </div>
          <input type="file" onChange={fileChange} id="uploader" />
          <br />
          <video controls key="updatee">
            {file ? <source src={file} /> : ""}
          </video>
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
