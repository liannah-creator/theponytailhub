import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Collections from "../components/Collections";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Contact/>
      <Collections/>
    </>
  );
}

export default Home;