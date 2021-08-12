import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Browse() {
  const [challenges, setChallenges] = React.useState([]);
  const [filteredChallenges, setFilteredChallenges] = React.useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/posts/all`)
      .then((resp) => resp.json())
      .then((res) => {
        setChallenges(res);
        setFilteredChallenges(challenges);
      });
  }, []);
  return (
    <div class="luredown">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setFilteredChallenges(
            challenges.filter((ele) => ele.title.includes(e.target.value))
          );
        }}
      />
      {console.log(filteredChallenges.length)}

      <>
        {filteredChallenges.length > 0 ? (
          <>
            {filteredChallenges.map((ele) => {
              return (
                <>
                  <Link to={`/challenge/${ele._id}`}>
                    <h2>{ele.title}</h2>
                  </Link>{" "}
                  {/*qwiefu  iuq */}
                  <h4>{ele.author.username}</h4>
                </>
              );
            })}
          </>
        ) : (
          <h1>Drat, couldn't find any challenges with that search </h1>
        )}
      </>
    </div>
  );
}
