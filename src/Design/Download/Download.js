import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import downloadimage from "../../images/d-home.mp4";
import {Link} from "react-router-dom";

function Download() {
  return (
    <div>
      <Header/>
    <div id="demo" class="carousel slide d-md-block d-none" data-bs-ride="carousel" >
        <div class="carousel-inner">
            <div class="carousel-item active " style={{height: '80vh'}}>
                <video class="img-fluid w-100" height="740" autoPlay loop muted>
                    <source src={downloadimage} class="h-100" style={{objectFit: 'cover'}} type="video/mp4" />
                  </video>
              <div class="carousel-caption d-md-block d-none">
                <p style={{marginBottom: '5vh '}}>A 5v5 Character-based tactical shooter </p>
                <h3 style={{marginBottom: '10vh'}}><Link to="/home.html"><img src="https://fontmeme.com/permalink/230425/21ebc8446a8f706151071ee4a51e6be3.png" alt="valorant-font" border="0" /></Link></h3>
                <Link to="/download" ><button class="btn button-49 ">Download Now</button></Link>
              </div>  
            </div>
          </div>
    </div>

    <div id="download" class="container text-light my-5 text-center p-md-0 p-5 ">
        <div class="row my-3">
            <p> <span><i class="fa-brands fa-windows me-2"></i></span> windows</p>
            <Link class="text-center  " onClick={() => alert('Download Started..')}><button class="btn btn-info other-button">Download</button></Link>

        </div>
        <div class="row   my-3">
            <p> <span><i class="fa-brands fa-apple me-2"></i></span> apple</p>
            <Link class="text-center  " onClick={() => alert('Available Soon..')}><button class="btn btn-info other-button">Download</button></Link>

        </div>
        <div class="row  my-3">
            <p> <span><i class="fa-brands fa-linux me-2"></i></span> linux</p>
            <Link class="text-center  " onClick={() => alert('Available Soon..')}><button class="btn btn-info other-button">Download</button></Link>

        </div>
    </div>
    <div class="py-0     py-md-5"></div>

    <div class="fixed-bottom">
      <Footer/>
    </div>
    </div>
  );
}

export default Download;
