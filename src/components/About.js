import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <img
          src={require("../img/pie-left.png")}
          alt="design icon"
          className="pie"
        />
        <div className="text">
          <h2>A bit about me</h2>
          <p className="big-text">
            I like to keep things simple, but interesting. I hope this UI
            conveys that about me. I feel very fortunate to have the opportunity
            to showcase my skills to a company like Sovtech, my passion for
            building things is what got me here. I think Sovtech could use a
            developer like myself, I've come quite a distance from where I
            started and I think being self-taught shows my self-starter
            mentality. I've got the fire in me! Sovtech could only fuel that
            fire, which in turn makes me a strong asset to the team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
