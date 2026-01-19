import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import Hero from "../features/hero/Hero";
import Services from "../features/services/Services";
import Portfolio from "../features/portfolio/Portfolio";
import Skills from "../features/skills/Skills";
import Contact from "../features/contact/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
