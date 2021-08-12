import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Reply(props) {
  const { slug } = useParams();
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const filer = (e) => {
    const rdr = new FileReader();
    const fle = e.target.files[0];
    rdr.onload = (event) => {
      console.log("reading file");
      setFile(event.target.result);
      console.log(file);
    };
    rdr.readAsDataURL(fle);
  };
  const submit = () => {
    if (!file) {
      alert("Please select a file");
    } else {
      // hold them here and show some message it is loading
      props.unClosable(
        "Uploading......",
        "loading the reply into our database"
      );
      fetch(`${process.env.REACT_APP_API_KEY}/posts/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: slug,
          vid: file,
          author: props.user().username,
        }),
      })
        .then((resp) => resp.text())
        .then((result) => {
          props.closeUnclosable();
          window.location = `/#/replies/${slug}`;
        });
    }
  };
  return (
    <div class="luredown">
      {props.user() ? (
        <>
          <label>Upload</label>
          <input type="file" onChange={filer} accept="video/*" />
          <label>Preview:</label>
          <video controls with="300">
            {file ? <source src={file} /> : ""}
          </video>
          <button onClick={submit}>Submit</button>
        </>
      ) : (
        <h1>Please login to continue</h1>
      )}
    </div>
  );
}
