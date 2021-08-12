import React from "react";
import Darsh from "./Darsh.jpeg";
import Anisha from "./Anisha.png";
import Atharva from "./Atharva.jpeg";
import Stress1 from "./Stress1.jpeg";
import Stress2 from "./Stress2.jpeg";
import "./about.css";
export default function About() {
  return (
    <div className="luredown">
      <div className="container">
        <h1 id="heading">About us</h1>
        <p id="about">
          We are a team of middle school students set out to make a differnce to
          the important issues of mental health.
        </p>
        <div className="Info">
          <img src={Anisha} width="150" height="150" />

          <p>
            Hi! I am Anisha Mahajan studying at D.P.S. R.K. Puram, New Delhi,
            India. I am a 8th grader who believes in the importance of values
            like passion, dedication, confidence and time management. I have
            many hobbies but in my leisure time, the one which gives me immense
            pleasure is graphic designing. Being inclined towards technology
            since class 3rd, I will be pursuing economic honours after my 12th
            or Senior School Graduation.
          </p>
        </div>
        <div className="Info">
          <img src={Atharva} height="150" width="150" />

          <p>
            Hi! I am Atharva from New Delhi,India.I am current studying at D.P.S
            R.K puram in 8th standard. I am wanderer who likes to learn knew
            things and try to use them in his daily life.I am always curious
            about things.I am a astronomy loer and web-developer. Lets not be
            too philosophical. I want to live my life very different from
            others.
          </p>
        </div>
        <div className="Info">
          <img src={Darsh} height="150" width="150" />

          <p>
            Hi! I am Darsh Sikka from New Delhi. I am a passionate
            mathematician. I am a web develpor at exun clan. I like coding in
            MERN stack, it is a stress buster for me and I want to utilize it
            for the good of others. I am also the founder of{" "}
            <a href="https://revmate.darshsikka.repl.co">Rev Mate</a> your mate
            for revision in exams
          </p>
        </div>
      </div>
      <div className="aboutfooter">
        <img src={Stress1} />
        <div class="info">
          <p>
            Mental stress and anxiety are very commonly reported disorders in
            school students specially during corona times, when they are not
            leaving the house and meeting their friends at school. We have
            created a challenge sharing portal where one can create open
            challenges related to mental health, mainly including mental yoga
            and stress relieving excercise postures. One can reply to these
            challenge videos with own video doing the same posture or
            challenging friends with a new pose. We believe this target based
            activity will be a fun filled stress buster for all across ages.
          </p>
        </div>
        <img src={Stress2} />
      </div>
    </div>
  );
}
