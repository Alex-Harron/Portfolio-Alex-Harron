import './App.css';
import NavBar from './components/navbar';
import About from './components/about';

function App() {
  return (
    <div className="App">
        <NavBar />
      <div className="App-header">
        <About />
      </div>
    </div>
  );
}

export default App;
