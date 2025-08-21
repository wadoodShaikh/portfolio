import Header from "./components/Header";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Techstack />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
