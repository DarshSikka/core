import React from "react";
export default function Browse() {
  const [challenges, setChallenges] = React.useState([]);
  fetch(`${process.env.REACT_APP_API_KEY}/posts/all`)
    .then((resp) => resp.json())
    .then((res) => setChallenges(res));
  return (
    <>
      {challenges.map((ele) => {
        return (
          <>
            <h2>{ele.title}</h2>
            <h4>{ele.author.username}</h4>
            <video controls width="200">
              <source src={ele.video} />
            </video>
          </>
        );
      })}
    </>
  );
}
