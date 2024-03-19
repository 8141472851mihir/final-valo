import React from 'react';
import {Link} from "react-router-dom";
function Header() {
return(
<div>
<div className="container-fluid bg_color_danger fixed-top navigation">
        <nav className="navbar navbar-expand-sm ">
            <div className="container-fluid ">
                <Link className="navbar-brand font_primary text-white " to="/final-valo">Valorant</Link>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                <ul className="navbar-nav font_secondary text-white nav_effect ">
                    <li className="nav-item ">
                        <Link to="/final-valo/#homepage" className="  mx-lg-2 nav-link active bg-transparent text-white nav_effect">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/final-valo/#patch" className="  mx-lg-2 nav-link text-white nav_effect">Patch Notes</a>
                    </li>
                    <li className="nav-item">
                        <a href="/final-valo/#popular-maps" className="  mx-lg-2 nav-link text-white nav_effect">Popular Maps</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/final-valo/download" className="  mx-lg-2 nav-link text-white nav_effect">Download</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <Link  className="  mx-lg-2 nav-link dropdown-toggle text-white nav_effect" data-bs-toggle="dropdown">Other</Link>
                        <ul className="dropdown-menu rounded-0">
                            <li className="">
                                <Link to="/final-valo/weapons" className="dropdown-item">weapons</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/map" className="dropdown-item">Maps</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/Agents" className="dropdown-item">Agents</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/Currency" className="dropdown-item">Currency</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/competitiveTiers" className="dropdown-item">Competitive Tiers</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/bundles" className="dropdown-item">Bundles</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/buddies" className="dropdown-item">Buddies</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/sprays" className="dropdown-item">Sprays</Link>
                            </li>
                            <li className="">
                                <Link to="/final-valo/playercard" className="dropdown-item">Player Cards</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/final-valo/#about" className="  mx-lg-2 nav-link text-white nav_effect">About US</a>
                    </li>
                </ul>
    
                {/* <form action="" className="form d-none ">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search.."/>
                        <span className="input-group-text"><i className="fa-solid fa-magnifying-glass "></i></span>
                      </div>
                </form> */}
                </div>
            </div>
        </nav>
    </div>
</div>
)
}
export default Header;