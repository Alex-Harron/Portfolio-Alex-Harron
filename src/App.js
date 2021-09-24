import './App.css';
import NavBar from './components/navbar';
import About from './components/sections/about';
import Intro from './components/sections/intro';
import SideLogos from './components/sidelogos';
import Jobs from './components/sections/jobs';
import Projects from './components/sections/projects';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <NavBar />
      <div className="App-header">
        <Intro />
      </div>
      <div className='content'>
        <br/>
        <About />
        <br/>
        <Jobs />
        <br/>
        <Projects />
        <br/>
        <SideLogos />
        <Footer />
        </div>
    </div>
  );
}

export default App;
