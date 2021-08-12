import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Replies(props) {
  const { slug } = useParams();
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/posts/replies/${slug}`)
      .then((res) => res.json())
      .then((resp) => {
        setReplies(resp);
      });
  });
  return (
    <>
      {replies.map((ele) => (
        <>
          <h2>{ele.author}</h2>
          <video controls>{ele.video ? <source src={ele.video} /> : ""}</video>
        </>
      ))}
    </>
  );
}
