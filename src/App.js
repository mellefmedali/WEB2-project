import './App.css';
import Decoration from './components/Decoration';
import Home from './components/Home';
import Industrie from './components/Industrie';
import { NavBar } from './components/NavBar';
import { Sport } from './components/Sport';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Home />
        <Sport />
        <Industrie />
        <Decoration />
      </Routes>
    </div>
  );
}

export default App;
