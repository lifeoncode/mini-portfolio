const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="text">
          <h1>I'm a frontend developer with an obsession for clean ui.</h1>
          <a href="#about" className="btn">
            Learn more
          </a>
        </div>

        <div id="deco">
          <img
            src={require("../img/portrait.webp")}
            className="me"
            alt="portrait of me"
          />
          <img
            src={require("../img/pie-right.png")}
            alt="design icon"
            className="pie"
          />
        </div>
      </div>
      <a className="right-cover" href="#about">
        {" "}
      </a>
    </header>
  );
};

Header.defaultProps = {
  logo: <div className="logo">logo</div>,
};

export default Header;
