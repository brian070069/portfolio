import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/parallax";
import { Toaster, toast } from "sonner";
import Cursor from "./cursor/Cursor";

const App = () => {
  return (
    <div>
      <Toaster richColors position="top-center" />
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type={"services"} />
      </section>
      <section id="Services">services</section>
      <section>
        <Parallax />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
