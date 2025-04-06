import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import GameExamples from "./components/gameExamples/GameExamples";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <GameExamples />
      </main>
      <Footer />
    </>
  );
}

export default App;
