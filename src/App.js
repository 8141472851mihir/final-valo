import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Design/Home/Home.js";
import Download from "./Design/Download/Download.js";
import Weapons from "./Design/Weapons/Weapons.js";

function App() {
  return (
    <div>
      
      <Home/>
      <Download/>
      <Weapons/>  
    </div>
  );
}

export default App;