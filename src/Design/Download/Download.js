import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import downloadimage from "../../images/d-home.mp4";

function Download() {
  return (
    <div>
      <Header/>
    <div id="demo" className="carousel slide d-md-block d-none" data-bs-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active " style={{height: '80vh'}}>
                <video className="img-fluid w-100" height="740" autoPlay loop muted>
                    <source src={downloadimage} className="h-100" style={{objectFit: 'cover'}} type="video/mp4" />
                  </video>
              <div className="carousel-caption d-md-block d-none">
                <p style={{marginBottom: '5vh '}}>A 5v5 Character-based tactical shooter </p>
                <h3 style={{marginBottom: '10vh'}}><a href="/final-valo"><img src="https://fontmeme.com/permalink/230425/21ebc8446a8f706151071ee4a51e6be3.png" alt="valorant-font" border="0" /></a></h3>
                <a href="#download" ><button className="btn button-49 ">Download Now</button></a>
              </div>  
            </div>
          </div>
    </div>

    <div id="download" className="container text-light my-5 text-center p-md-0 p-5 ">
        <div className="row my-3">
            <p> <span><i className="fa-brands fa-windows me-2"></i></span> windows</p>
            <a className="text-center  " onClick={() => alert('Download Started..')}><button className="btn btn-light rounded-0 other-button">Download</button></a>

        </div>
        <div className="row   my-3">
            <p> <span><i className="fa-brands fa-apple me-2"></i></span> apple</p>
            <a className="text-center  " onClick={() => alert('Available Soon..')}><button className="btn btn-light rounded-0 other-button">Download</button></a>

        </div>
        <div className="row  my-3">
            <p> <span><i className="fa-brands fa-linux me-2"></i></span> linux</p>
            <a className="text-center  " onClick={() => alert('Available Soon..')}><button className="btn btn-light rounded-0 other-button">Download</button></a>

        </div>
    </div>
    <div className="py-0     py-md-5"></div>

    <div className="fixed-bottom">
      <Footer/>
    </div>
    </div>
  );
}

export default Download;
