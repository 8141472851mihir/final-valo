import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Design/Home/Home.js";
import Download from "./Design/Download/Download.js";
import Weapons from "./Design/Weapons/Weapons.js";
import Agents from "./Design/Agents/Agents.js";
import Agentx from "./Design/Agents/Agentx.js";
import Maps from "./Design/Maps/Maps.js";
import Currency from "./Design/Currency/Currency.js";
import Tiers from "./Design/Tiers/Tiers.js";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/final-valo" element={<Home />}></Route>
        <Route path="/final-valo/download" element={<Download />}></Route>
        <Route path="/final-valo/weapons" element={<Weapons />}></Route>
        <Route path="/final-valo/agents" element={<Agents />}></Route>
        <Route path="/final-valo/map" element={<Maps />}></Route>
        <Route path="/final-valo/agent/:uid" element={<Agentx />}></Route>
        <Route path="/final-valo/Currency" element={<Currency />}></Route>
        <Route path="/final-valo/competitiveTiers" element={<Tiers />}></Route>
      </Routes>
      </Router>
      {/* <Download/> */}
      {/* <Weapons/>   */}
    </div>
  );
}

export default App;