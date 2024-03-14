import React from 'react';
import Patch from "./Patch.js";
import About from "./About.js";
import Maps from "./Maps.js";
function Viewer() {
return(
<>
<div id="about" class="container p-md-5 p-2 p-lg-3 my-5 text-light">
        <About/>
</div>
<div id="patch" class="container p-5 my-5 mb-0">
    <div class="row">
        <h1 class="bg-dark text_color_danger text-center titles  font_primary">Patch Notes</h1>
    </div>
    <div class="row">
        <Patch/>
    </div>
</div>
<div id="popular-maps" class="container p-5 mb-5 text-light">
        <div class="row mb-2">
            <h1 class="bg-dark text_color_danger text-center titles font_primary">Popular Maps</h1>
        </div>
        <div class="row">
            <Maps/>
        </div>
    </div>
</>
)
}
export default Viewer;