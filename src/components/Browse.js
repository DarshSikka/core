import React from "react";
import { Link } from "react-router-dom";
export default function Browse() {
  const [challenges, setChallenges] = React.useState([]);
  fetch(`${process.env.REACT_APP_API_KEY}/posts/all`)
    .then((resp) => resp.json())
    .then((res) => setChallenges(res));
  return (
    <div class="luredown">
      {challenges.map((ele) => {
        return (
          <>
            <Link to={`/challenge/${ele._id}`}>
              <h2>{ele.title}</h2>
            </Link>
            <h4>{ele.author.username}</h4>
          </>
        );
      })}
    </div>
  );
}
