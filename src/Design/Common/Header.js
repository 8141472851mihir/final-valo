import React from 'react';
import {Link} from "react-router-dom";

function Header() {
return(
<div>
<div class="container-fluid bg-success bg-danger fixed-top navigation">
        <nav class="navbar navbar-expand-sm ">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/home">Valorant</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav nav-pills">
                    <li class="nav-item ">
                        <Link to="/home" class="nav-link active bg-danger">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/home#patch" class="nav-link">Patch Notes</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/home#popular-maps" class="nav-link">Popular Maps</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="download" class="nav-link">Download</Link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <Link  class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Other</Link>
                        <ul class="dropdown-menu">
                            <li class="">
                                <Link to="weapons" class="dropdown-item">weapons</Link>
                            </li>
                            <li class="">
                                <Link to="map" class="dropdown-item">Maps</Link>
                            </li>
                            <li class="">
                                <Link to="#" class="dropdown-item">sjhgh</Link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <Link to="/home#about" class="nav-link">About US</Link>
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