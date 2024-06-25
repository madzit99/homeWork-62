import { Route, Routes } from "react-router-dom";
import Footer from "./Components /Footer/Footer";
import Toolbar from "./Components /Toolbar/Toolbar";
import Home from "./Containers/Home";

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
          <Route path="/fighters" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/rating" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/fight" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
