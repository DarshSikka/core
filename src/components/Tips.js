import React from "react";
import "./Tips.css";
import illus from "./depress.jpg";
import illus1 from "./anxiety.jpg";
import illus2 from "./homeillus.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function Tips(props) {
  const [msg, setMsg] = React.useState("Healthy");
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  return (
    <>
      <div>
        <br></br>
        <div className="text">
          <h1>
            Tips to follow for <custom style={{ color: "red" }}>{msg}</custom>
            life
          </h1>
        </div>
        <div className="cards">
          {" "}
          <div
            class="card"
            id="modal"
            onClick={() => {
              props.modalShow(
                "General tips",
                `Exercise. Take a 15- to 30-minute brisk walk every day — or dance, jog, or bike if you prefer. People who are depressed may not feel much like being active. But make yourself do it anyway (ask a friend to exercise with you if you need to be motivated). Once you get in the exercise habit, it won't take long to notice a difference in your mood.

              In addition to getting aerobic exercise, some yoga poses can help relieve feelings of depression. Try downward-facing dog or legs-up-the-wall pose (you can find these poses on yoga websites). Two other aspects of yoga — breathing exercises and meditation — can also help people with depression feel better.
              Nurture yourself with good nutrition. Depression can affect appetite. One person may not feel like eating at all, but another might overeat. If depression has affected your eating, you'll need to be extra mindful of getting the right nourishment. Proper nutrition can influence a person's mood and energy. So eat plenty of fruits and vegetables and get regular meals (even if you don't feel hungry, try to eat something light, like a piece of fruit, to keep you going).
              Identify troubles, but don't dwell on them. Try to identify any situations that have contributed to your depression. When you know what's got you feeling blue and why, talk about it with a caring friend. Talking is a way to release the feelings and to receive some understanding.
              
              Once you air out these thoughts and feelings, turn your attention to something positive. Take action to solve problems. Ask for help if you need it. Feeling connected to friends and family can help relieve depression. It may also help them feel there's something they can do instead of just watching you hurt.
              Express yourself. With depression, a person's creativity and sense of fun may seem blocked. Exercise your imagination (painting, drawing, doodling, sewing, writing, dancing, composing music, etc.) and you not only get those creative juices flowing, you also loosen up some positive emotions. Take time to play with a friend or a pet, or do something fun for yourself. Find something to laugh about — a funny movie, perhaps. Laughter helps lighten your mood.
              Try to notice good things. Depression affects a person's thoughts, making everything seem dismal, negative, and hopeless. If depression has you noticing only the negative, make an effort to notice the good things in life. Try to notice one thing, then try to think of one more. Consider your strengths, gifts, or blessings. Most of all, don't forget to be patient with yourself. Depression takes time to heal`
              );
            }}
          >
            <img src={illus2} alt="error"></img>
            <div class="dg">
              <h3>General tips</h3>
            </div>
          </div>{" "}
          <div
            class="cards1"
            id="modal"
            onClick={() => {
              props.modalShow(
                "Depression",
                `Exercise. Take a 15- to 30-minute brisk walk every day — or dance, jog, or bike if you prefer. People who are depressed may not feel much like being active. But make yourself do it anyway (ask a friend to exercise with you if you need to be motivated). Once you get in the exercise habit, it won't take long to notice a difference in your mood.

              In addition to getting aerobic exercise, some yoga poses can help relieve feelings of depression. Try downward-facing dog or legs-up-the-wall pose (you can find these poses on yoga websites). Two other aspects of yoga — breathing exercises and meditation — can also help people with depression feel better.
              Nurture yourself with good nutrition. Depression can affect appetite. One person may not feel like eating at all, but another might overeat. If depression has affected your eating, you'll need to be extra mindful of getting the right nourishment. Proper nutrition can influence a person's mood and energy. So eat plenty of fruits and vegetables and get regular meals (even if you don't feel hungry, try to eat something light, like a piece of fruit, to keep you going).
              Identify troubles, but don't dwell on them. Try to identify any situations that have contributed to your depression. When you know what's got you feeling blue and why, talk about it with a caring friend. Talking is a way to release the feelings and to receive some understanding.`
              );
            }}
          >
            <img src={illus} alt="error"></img>
            <div class="dg">
              <h3>How to come out of depression?</h3>
              <p>
                Lorem ipsum dolor I am too lazy to even type lorem or generate
                it
              </p>
            </div>
          </div>{" "}
          <div
            id="modal"
            class="cards2"
            onClick={() => {
              props.modalShow(
                "Anxiety",
                `Take a time-out. 
                Eat well-balanced meals. 
                Limit alcohol and caffeine, which can aggravate anxiety and trigger panic attacks.
                Get enough sleep. 
                Exercise daily to help you feel good and maintain your health. 
                Take deep breaths. 
                Count to 10 slowly.`
              );
            }}
          >
            <img src={illus1} alt="error"></img>
            <div class="dg">
              {" "}
              <h3>How to be less anxious?</h3>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal title={title} content={content} /> : ""}
    </>
  );
}
