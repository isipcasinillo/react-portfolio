
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css';
import Information from './Components/Information/Information';
import Education from './Components/Education/Education';
import Technologies from './Components/Technologies/Technologies';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='wrapper'>
        <Information />
      </div>
      <Education />
      <Technologies />
      <Projects />
      <Contact />


    </>
  );
}

export default App;
