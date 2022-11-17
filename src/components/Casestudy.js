import React from "react";

const Casestudy = () => {
  return (
    <section id="case-study" className="case-study">
      <div className="container">
        <h2>Case studies</h2>
        <div className="case-study-inner">
          <div className="text">
            <p>
              Darkyntel is a non-profit organisation that's focused on
              addressing the problem of formal education. They primarily focus
              on STEM education. The challenge was to craft an experience that
              targets a broad audience varying from young people, all the way to
              potential business investors.
            </p>
            <a href="https://darkyntel.com" className="btn">
              <div className="btn-bg"></div>
              <span>Live project</span>
            </a>
          </div>
          <img
            src={require("../img/darkyntel-gif.gif")}
            alt="darkyntel"
            className="work-img"
          />

          <img
            src={require("../img/fastfingers.gif")}
            alt="fast fingers app"
            className="work-img"
          />
          <div className="text">
            <p>
              This is a speed typing practice application. The goal here was to
              achieve a minimal UI to help a user focus on the important aspect
              of the application... typing.
            </p>
            <a href="https://fasttypingfingers.vercel.app" className="btn">
              <div className="btn-bg"></div>
              <span>Live project</span>
            </a>
          </div>

          <div className="text">
            <p>
              Yello Garden is a web design and development agency. Their website
              has ti reflect that they are professionals who know what they are
              doing. The challenge was to create a website that conveys trust
              and authority to the user.
            </p>
            <a href="https://yellogarden.com" className="btn">
              <div className="btn-bg"></div>
              <span>Live project</span>
            </a>
          </div>
          <img
            src={require("../img/yello.gif")}
            alt="yello garden"
            className="work-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
