import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Casestudy from "./components/Casestudy";
import Closing from "./components/Closing";
import Footer from "./components/Footer";
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <About />
      <Work />
      <Casestudy />
      <Closing />
      <Footer />
    </>
  );
};

export default App;
