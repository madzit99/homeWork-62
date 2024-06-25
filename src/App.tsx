import { Route, Routes } from "react-router-dom";
import Footer from "./Components /Footer/Footer";
import Toolbar from "./Components /Toolbar/Toolbar";
import Home from "./Containers/Home";
import Fighters from "./Containers/Fighters";
import Rating from "./Containers/Rating";
import Fight from "./Containers/Fight";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/fighters" element={<Fighters />} />
        </Routes>
        <Routes>
          <Route path="/rating" element={<Rating />} />
        </Routes>
        <Routes>
          <Route path="/fight" element={<Fight />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
