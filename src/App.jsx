import Contact from "./Components/Contact us/Contact";
import Slider from "./Components/Display/Slider";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/skills/Skills";

const App = () => {
  return (
    <>
      <div className="mx-10">
        <NavBar />
        <Slider />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
