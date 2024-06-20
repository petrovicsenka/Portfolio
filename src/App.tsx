import './App.css';
import Contact from './components/Contact/Contact';
// import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/NavBar/Navbar';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      {/* <Experience /> */}
      {/* <Education /> */}
      <Contact />
    </div>
  )
}

export default App;
