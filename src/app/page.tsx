import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Details from "../components/Details";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection"; // Import the new component

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="w-full">
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Details />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}