import me from "../assets/Me/me2.png";
import "./home-style.css";
import React from "react";
// import { useEffect } from "react";

const HomePage = () => {
  const Me = document.getElementById("me");

  const test = (window.onmousemove = function (e) {
    console.log(`mouse location = X: ${e.x}, Y: ${e.y}`);

    let screenHeight = window.innerHeight;
    let scrrennWidth = window.innerWidth;


    let nbr1 = Math.round((e.x / screenHeight) * 10);
    let nbr2 = Math.round((e.y / scrrennWidth) * 10);

    console.log(nbr1, nbr2);

    Me.style.transform = `translate(${nbr1}, ${nbr2})`;
        // Me.style.top = `${e.y}px`;
    // transform: translate(10px, 10px);
  });

  console.log(test);

  return (
    <div className="homePage scroll-page" id="homePage">
      <div className="pagesContainer">
        <img src={me} alt="img" className="persoImg" id="me" />
        <div className="containerDiv">
          <h1>Welcome</h1>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
