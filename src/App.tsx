import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/NavBar/Navbar';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <WhatIDo />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
