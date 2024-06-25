import Footer from "./Components /Footer/Footer";
import Toolbar from "./Components /Toolbar/Toolbar";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container"></main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default App;
