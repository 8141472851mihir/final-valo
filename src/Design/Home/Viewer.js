import React from 'react';
import Patch from "./Patch.js";
import About from "./About.js";
import Maps from "./Maps.js";
function Viewer() {
return(
<>
<div id="patch" class="container-fluid p-5 my-5 mb-0">
    <div class="row">
        <h1 class="bg-dark text-danger text-center titles">Patch Notes</h1>
    </div>
    <div class="row">
        <Patch/>
    </div>
</div>
<div id="about" class="container-fluid p-5 mb-5 text-light">
    <div class="row mb-2">
        <h1 class="bg-dark text-danger text-center titles">About Us</h1>
    </div>
    <div class="row">
        <About/>
    </div>
</div>
<div id="popular-maps" class="container-fluid p-5 mb-5 text-light">
        <div class="row mb-2">
            <h1 class="bg-dark text-danger text-center titles">Popular Maps</h1>
        </div>
        <div class="row">
            <Maps/>
        </div>
    </div>
</>
)
}
export default Viewer;