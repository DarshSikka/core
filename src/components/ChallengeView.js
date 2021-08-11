import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ChallengeView = (props) => {
  const parameters = useParams();
  const challengeid = parameters.slug;
  console.log(parameters);
  const [chall, setChall] = useState({});
  fetch(`${process.env.REACT_APP_API_KEY}/posts/fetchslug?slug=${challengeid}`)
    .then((res) => res.json())
    .then((resp) => {
      setChall(resp);
      console.log(resp);
    });
  return (
    <div class="luredown">
      <h1>{chall.title}</h1>
      <h2>
        {chall?.author?.name} {chall.author?.username}
      </h2>
      <h4>{chall?.views} views</h4>
      <video controls width="500">
        {chall.video ? <source src={chall.video} /> : ""}
      </video>
    </div>
  );
};
export default ChallengeView;
