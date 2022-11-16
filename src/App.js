import Header from "./components/Header";
import Link from "./components/Link";
import Button from "./components/Button";
import "./styles/App.scss";

const App = () => {
  // nav component
  const nav = (
    <nav className="navigation">
      <Link href="#about" text="about us" />
      <Link href="#services" text="our services" />
      <Link href="#work" text="our work" />
      <Link href="#contact" text="contact us" />
    </nav>
  );
  // account component
  const account = (
    <div className="account">
      <Button text="login" id="login" />
      <Button text="sign up" id="sign-up" />
    </div>
  );

  return (
    <>
      <Header navigation={nav} additional={account} />
      <section className="hero">
        <div className="container">
          <h1>We create state of the art software</h1>
          <Button text="learn more" />
        </div>
      </section>
    </>
  );
};

export default App;
