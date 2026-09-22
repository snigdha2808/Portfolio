import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { Expertise } from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import ExperienceSection from './components/Experience/ExperienceSection';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <ExperienceSection />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
