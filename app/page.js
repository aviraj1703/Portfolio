import AboutSection from "./components/AboutSection";
import Achievements from "./components/Achievements";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white container">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Achievements />
        <AboutSection />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
