import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Design/Home/Home.js";
import Download from "./Design/Download/Download.js";
import Weapons from "./Design/Weapons/Weapons.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Weapons" element={<Weapons/>}/>
        <Route path="Download" element={<Download/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;