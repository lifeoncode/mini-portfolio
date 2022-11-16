const Header = ({ logo, navigation, additional }) => {
  return (
    <header className="header">
      <div className="container">
        {/* site logo */}
        {logo}
        {/* navigation */}
        {navigation}
        {/* account login */}
        {additional}
      </div>
    </header>
  );
};

Header.defaultProps = {
  logo: <div className="logo">logo</div>,
};

export default Header;
