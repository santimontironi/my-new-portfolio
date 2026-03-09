import Home from "../components/layout/Home";
import About from "../components/layout/About";
import Services from "../components/layout/Services";
import Projects from "../components/layout/Projects";
import Contact from "../components/layout/Contact";
import Header from "@/components/ui/Header";

const Page = () => {
  return (
    <main>
      <Header />
      <section id="inicio">
        <Home />
      </section>
      <section id="sobre-mi">
        <About />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="proyectos">
        <Projects />
      </section>
      <section id="contacto">
        <Contact />
      </section>
    </main>
  );
};

export default Page;