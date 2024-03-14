import React from 'react';
import {Link} from "react-router-dom";
function Header() {
return(
<div>
<div class="container-fluid bg-success bg-danger fixed-top navigation">
        <nav class="navbar navbar-expand-sm ">
            <div class="container-fluid">
                <Link class="navbar-brand font_primary text-white " to="/final-valo">Valorant</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav nav-pills font_secondary text-white nav_effect">
                    <li class="nav-item ">
                        <Link to="/final-valo" class="nav-link active bg-danger text-white nav_effect">Home</Link>
                    </li>
                    <li class="nav-item">
                        <a href="/final-valo/#patch" class="nav-link text-white nav_effect">Patch Notes</a>
                    </li>
                    <li class="nav-item">
                        <a href="/final-valo/#popular-maps" class="nav-link text-white nav_effect">Popular Maps</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/final-valo/download" class="nav-link text-white nav_effect">Download</Link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <Link  class="nav-link dropdown-toggle text-white nav_effect" data-bs-toggle="dropdown">Other</Link>
                        <ul class="dropdown-menu">
                            <li class="">
                                <Link to="/final-valo/weapons" class="dropdown-item">weapons</Link>
                            </li>
                            <li class="">
                                <Link to="/final-valo/map" class="dropdown-item">Maps</Link>
                            </li>
                            <li class="">
                                <Link to="/final-valo/Agents" class="dropdown-item">Agents</Link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/final-valo/#about" class="nav-link text-white nav_effect">About US</a>
                    </li>
                </ul>
    
                <form action="" class="form d-none ">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search.."/>
                        <span class="input-group-text"><i class="fa-solid fa-magnifying-glass "></i></span>
                      </div>
                </form>
                </div>
            </div>
        </nav>
    </div>
</div>
)
}
export default Header;