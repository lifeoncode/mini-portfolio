import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <About />
      <Work />
    </>
  );
};

export default App;
