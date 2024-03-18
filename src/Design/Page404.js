import React, { useState, useEffect } from 'react';
import Header from "./Common/Header.js";
import Footer from "./Common/Footer.js";
const Page404 = () => {
  return (
    <div>
      <Header/>
      <div class="container d-flex justify-content-center" style={{height:'80vh'}}>
        <div class="jumbotron my-auto">
        <h1 class="text-light" style={{fontSize:'30vh'}}>404</h1>
        </div>
        <div class="jumbotron my-auto">
        <h1 class="text-light" style={{fontSize:'10vh'}}>Page Not Found!</h1>
        <p class="text-light" style={{fontSize:'2vh'}}>The page You are looking for was moved,removed,renamed or might never existed.</p>
        <button class="button-49" style={{width:'200px'}}>Back to Home Page</button>
        </div>
      </div>
        {/* <div class="container border border-light text-light text-center" style={{height:'100vh'}} >
           <h1 class="">404</h1>
        </div> */}
    <div class="fixed-bottom">
        <Footer/>
    </div>
    </div>
  )
}

export default Page404
