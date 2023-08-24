//import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Gichachi from './gichachi';
import Home from './home';

function App() {
  return (
    <div className="App">
     <nav>
      <button><Link to ="/home">Home</Link></button>
      <button><Link to ="/gichachi">Gichachi</Link></button>
     </nav>
     <Routes>
     <Route path = "/home" element = {<Home/>} />
     <Route path = "/gichachi" element = {<Gichachi/>} />
     </Routes>
    </div>
  );
}

export default App;
