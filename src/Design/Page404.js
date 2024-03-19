import React, { useState, useEffect } from 'react';
import Header from "./Common/Header.js";
import Footer from "./Common/Footer.js";
import {Link} from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <Header/>
      <div className="container d-sm-flex justify-content-center" style={{height:'80vh'}}>
        <div className="my-auto text-right ">
        <h1 className="text-light mt-sm-0 mt-4" style={{fontSize:'30vh'}}>404</h1>
        </div>
        <div className="my-auto mx-2">
        <h1 className="text-light" style={{fontSize:'10vh'}}>Page Not Found!</h1>
        <p className="text-light" style={{fontSize:'2vh'}}>The page You are looking for was moved,removed,renamed or might never existed.</p>
        <Link to="/final-valo/" ><button className="button-49" style={{width:'200px'}}>Back to Home Page</button></Link>
        </div>
      </div>
        {/* <div className="container border border-light text-light text-center" style={{height:'100vh'}} >
           <h1 className="">404</h1>
        </div> */}
    <div className="fixed-bottom">
        <Footer/>
    </div>
    </div>
  )
}

export default Page404
