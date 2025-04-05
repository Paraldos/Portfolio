import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
