import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Design/Home/Home.js";
import Download from "./Design/Download/Download.js";
import Weapons from "./Design/Weapons/Weapons.js";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/final-valo" element={<Home />}></Route>
        <Route path="/final-valo/download" element={<Download />}></Route>
        <Route path="/final-valo/weapons" element={<Weapons />}></Route>
      </Routes>
      </Router>
      {/* <Download/> */}
      {/* <Weapons/>   */}
    </div>
  );
}

export default App;