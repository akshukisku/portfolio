import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import GitHubProjects from "./components/GitHubProjects";
import Capabilities from "./components/Capabilities";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import LearningJourney from "./components/LearningJourney";
import Contact from "./components/Contact";

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
    <Hero/>
    <About/>
    <Skills/>
    <GitHubProjects/>
    <Capabilities/>
    <Education/>
    <LearningJourney/>
    <Contact/>
    </main>
    </>
  );
};

export default Homepage;
