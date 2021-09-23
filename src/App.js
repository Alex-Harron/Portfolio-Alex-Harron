import './App.css';
import NavBar from './components/navbar';
import About from './components/intro';
import SideLogos from './components/sidelogos';

function App() {
  return (
    <div className="App">
        <NavBar />
      <div className="App-header">
        <About />
        <SideLogos />
      </div>
    </div>
  );
}

export default App;
