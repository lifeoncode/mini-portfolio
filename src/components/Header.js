const Header = () => {
  return (
    <header className="header">
      <div className="container"></div>
    </header>
  );
};

Header.defaultProps = {
  logo: <div className="logo">logo</div>,
};

export default Header;
