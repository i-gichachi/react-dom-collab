//import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Gichachi from './gichachi';
import Achiebee from './Achiebee';
import Neriko from './neriko';
import Murll from './Murll';
import Home from './home';
import Felix from './Felix';

function App() {
  return (
    <div className="App">
     <nav>
      <button><Link to ="/home">Home</Link></button>
      <button><Link to ="/gichachi">Gichachi</Link></button>
      <button><Link to ="/Achiebee">Achiebee</Link></button>
      <button><Link to ="/neriko">Neriko</Link></button>
      <button><Link to ="/Murll">Murll</Link></button>
      <button><Link to ="/Felix">Felix</Link></button>
      
     </nav>
     <Routes>
     <Route path = "/home" element = {<Home/>} />
     <Route path = "/gichachi" element = {<Gichachi/>} />
     <Route path = "/Achiebee" element = {<Achiebee/>} />
     <Route path = "/neriko" element = {<Neriko/>} />
     <Route path = "/Murll" element = {<Murll/>} />
     <Route path = "/Felix" element = {<Felix/>} />
     </Routes>
    </div>
  );
}

export default App;
