import React from 'react';
function Header() {
return(
<div>
<div class="container-fluid bg-success bg-danger fixed-top navigation">
        <nav class="navbar navbar-expand-sm ">
            <div class="container-fluid">
                <a class="navbar-brand" href="home">Valorant</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav nav-pills">
                    <li class="nav-item ">
                        <a href="home" class="nav-link active bg-danger">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="home#patch" class="nav-link">Patch Notes</a>
                    </li>
                    <li class="nav-item">
                        <a href="home#popular-maps" class="nav-link">Popular Maps</a>
                    </li>
                    <li class="nav-item">
                        <a href="download" class="nav-link">Download</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Other</a>
                        <ul class="dropdown-menu">
                            <li class="">
                                <a href="weapons" class="dropdown-item">weapons</a>
                            </li>
                            <li class="">
                                <a href="map" class="dropdown-item">Maps</a>
                            </li>
                            <li class="">
                                <a href="#" class="dropdown-item">sjhgh</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="home#about" class="nav-link">About US</a>
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