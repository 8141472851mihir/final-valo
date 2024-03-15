import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Design/Home/Home.js";
import Download from "./Design/Download/Download.js";
import Weapons from "./Design/Weapons/Weapons.js";
import Agents from "./Design/Agents/Agents.js";
import Agentx from "./Design/Agents/Agentx.js";
import Maps from "./Design/Maps/Maps.js";
import Currency from "./Design/Currency/Currency.js";
import Tiers from "./Design/Tiers/Tiers.js";
import Buddies from "./Design/Buddies/Buddies.js";
<<<<<<< Updated upstream
import Spray from "./Design/Sprays/Spray.js";
import Playercard from "./Design/Playercards/Playercards.js";
import Bundles from "./Design/Weapons/Bundles.js";
=======
>>>>>>> Stashed changes

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
        <Route path="/final-valo/buddies" element={<Buddies />}></Route>
<<<<<<< Updated upstream
        <Route path="/final-valo/sprays" element={<Spray />}></Route>
        <Route path="/final-valo/playercard" element={<Playercard />}></Route>
        <Route path="/final-valo/bundles" element={<Bundles />}></Route>
=======
>>>>>>> Stashed changes
      </Routes>
      </Router>
      {/* <Download/> */}
      {/* <Weapons/>   */}
    </div>
  );
}

export default App;