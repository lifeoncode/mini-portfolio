import React from "react";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <a href="https://darkyntel.com" rel="noreferrer" target="_blank">
          <img
            src={require("../img/shot.jpg")}
            data-rate="0.1"
            alt="Darkyntel"
          />
        </a>
        <a
          href="https://fasttypingfingers.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={require("../img/shot-2.jpg")}
            data-rate="0.4"
            alt="Typing app"
          />
        </a>
        <a href="https://yellogarden.co.za" rel="noreferrer" target="_blank">
          <img
            src={require("../img/shot-3.png")}
            data-rate="0.2"
            alt="Yello Garden"
          />
        </a>
      </div>
    </section>
  );
};

export default Work;
