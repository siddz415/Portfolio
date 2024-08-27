import React from 'react';      //imported css and my pic for homepage
import '../styles/Home.css';
import myPic from "../assets/myPic.png";
export default function myHome() {
  return (
    <div className="home">
    <div className="about">
      <h3> Hi, My Name is Siddharth Dravid</h3>
      <img src={myPic} alt="pic" />

      <div className="pro">
        <p>Full Stack Web Developer experienced in creating mobile applications and websites.</p>
        
      </div>
    </div>
    <div className="skills">
      <h1> Skills </h1>
      <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
          HTML, CSS, JavaScript, React, API's, JQuery.
        </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
        ExpressJS, NodeJS, MySQL, MongoDB, Flask, Python.
        </span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span>
         HTML, CSS, JavaScript, Python, Typescript.
        </span>
      </li>
      </ol>
    </div>
  </div>
);
}
