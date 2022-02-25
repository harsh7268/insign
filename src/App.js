import './App.css';
import Download from './components/js/Download';
import Features from './components/js/Features';
import Level from './components/js/Level';
import NavBar from './components/js/NavBar';
import Showcase from './components/js/Showcase';


function App() {
  return (
    <div >
    <NavBar />
    <div className="container">
      <Showcase />
      <Level />
      <Features/>
      <Download />
    </div>
    </div>
    
  );
}

export default App;
