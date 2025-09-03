import './App.css'
// import './components/Header/Header.css'
import Header from './components/Header/Header';
import NameAndDescription from './components/NameAndDescription/NameAndDescription';
import { Expertise } from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import ExperienceSection from './components/Experience/ExperienceSection';

function App() {
  const links = {
    about: '#about',
    projects: '#projects',
    contact: '#contact'
  };

  return (
    <>
      <Header
        links={links}
      />
      <main className="main-content">
        <section id="about">
          <NameAndDescription/>
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <ExperienceSection />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App;
