import React from 'react';
function Carousel() {
  const carouelBtn = {
    borderRadius: '50%',
    width: '5px',
    height: '5px',
  };
  return (
    <>
      <div className='design-container'>
        <div className='carousel_container'>
          <div className='carousal_btn'>
            <a href="https://playvalorant.com/en-gb/" rel="noreferrer" target="_blank"><button class="btn button-49 rounded-0 font_secondary">Play Now</button></a>
          </div>
          <div id="demo" class="carousel slide mt-5" data-bs-ride="carousel" >
            <div class="carousel-indicators" >
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" style={carouelBtn}></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1" style={carouelBtn}></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2" style={carouelBtn}></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item ratio ratio-21x9  active">
                <img src="https://wallpapercave.com/wp/wp6656047.png" alt="Los Angeles" class="d-block layer w-100" />
              </div>
              <div class="carousel-item ratio ratio-21x9 ">
                <img src="https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg" alt="Chicago" class="d-block layer w-100" />
              </div>
              <div class="carousel-item ratio ratio-21x9 ">
                <img src="https://w.forfun.com/fetch/2a/2afb175a252d34220f693c56462298ad.jpeg" alt="New York" class="d-block layer w-100" />
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Carousel;