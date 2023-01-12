import React from "react";
import { image } from "../data/data";

function About() {
  return <div id= "about">
    <h2 className="Header2">About Me</h2>
    <p>I am a software Dev and coding is in my DNA</p>
    <img src={image} alt="I made this"/>

  </div>;
}

export default About;
