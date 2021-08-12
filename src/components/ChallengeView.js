import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const ChallengeView = (props) => {
  const parameters = useParams();
  const challengeid = parameters.slug;
  console.log(parameters);
  const [chall, setChall] = useState({});
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/posts/fetchslug?slug=${challengeid}`
    )
      .then((res) => res.json())
      .then((resp) => {
        setChall(resp);
        setFetched(true);
      });
  }, []);
  return (
    <>
      {chall?._doc?.title ? (
        <div className="luredown">
          <h1>{chall?._doc?.title}</h1>
          <h2>
            {chall?._doc?.author?.name} {chall._doc?.author?.username}
          </h2>
          <h4>{chall?._doc.views} views</h4>
          <p>{chall?._doc.description}</p>
          <video controls width="500">
            {chall.url[0]?.uri ? <source src={chall.url[0]?.uri} /> : ""}
          </video>
          <br />
          <Link to={`/reply/${chall?._doc?._id}`}>I have what it takes</Link>
          <br />
          <Link to={`/replies/${chall?._doc?._id}`}>
            Replies to that challenge
          </Link>
        </div>
      ) : (
        <div className="luredown">
          <h1>Loading.... </h1>
        </div>
      )}
    </>
  );
};
export default ChallengeView;
