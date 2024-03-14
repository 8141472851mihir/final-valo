import React from 'react';
function Carousel() {
    const carouelBtn = {
    borderRadius: '50%',
    width: '5px',
    height: '5px',
  };
  const carouelImg = {
    height: '100vh',
  };
return(
<>
<div id="demo" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-indicators " >
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" style={carouelBtn}></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"  style={carouelBtn}></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"  style={carouelBtn}></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://dotesports.com/wp-content/uploads/2020/04/20075547/valorant_jett_duotoned-1-2-1.jpg" alt="Los Angeles" style={carouelImg} class="d-block w-100"/>
              <div class="carousel-caption">
                <a href="https://playvalorant.com/en-gb/" target="_blank"><button class="btn button-49 rounded-0 font_secondary">Play Now</button></a>
              </div>  
            </div>
            <div class="carousel-item">
              <img src="https://tasbihdigital.com/wp-content/uploads/2022/10/HD-Valorant-Wallpaper.jpg" alt="Chicago" style={carouelImg} class="d-block w-100"/>
              <div class="carousel-caption">
                <a href="https://playvalorant.com/en-gb/" target="_blank"><button class="btn button-49 rounded-0 font_secondary ">Play Now</button></a>
              </div>  
            </div>
            <div class="carousel-item">
              <img src="https://wallpapers.com/images/hd/valorant-ignition-j19e3k9x6pn0naz9.jpg" alt="New York"  style={carouelImg} class="d-block w-100"/>
              <div class="carousel-caption">
                <a href="https://playvalorant.com/en-gb/" target="_blank"><button class="btn button-49 rounded-0 font_secondary">Play Now</button></a>
              </div>  
            </div>
           
          </div>
        
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
    </div>
</>
)
}
export default Carousel;