import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";

import React, { useState, useEffect } from 'react';

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/weapons');
        const data = await response.json();
        setWeapons(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeapons();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
    <Header/>
    <div className="mt-2 position-relative  ">
        <div className="mt-5 h-50 w-50 weapon_img_design ">
          <img src="https://a-static.besthdwallpaper.com/reyna-and-jett-wallpaper-1600x1200-78749_23.jpg" className="d-block w-100" alt="" />
        </div>
    <div className="container-fluid mx-0 row mt-5 pt-4 justify-content-center">
       <div className="col-sm-12 col-xl-6 m-0 col-lg-4 p-lg-0 p-sm-4 text-white font_primary display-1 arsenal_design_container">
        <div className="position-fixed weapon_title">WEAPONS</div>
        <div className="m-0 p-0 text-white arsenal_design">ARSENAL</div>
       </div>
       {/* content DIV */}
       <div className="col-sm-12 col-xl-6 col-lg-8  text-white">
        <div className="container-fluid m-0 p-0 ">
          <div className="row p-0">
          {weapons.map((weapon) => (
            <div key={weapon.uuid} className="col-md-6 m-0 p-0">
              <div className='weapon-inner-card d-flex flex-column justify-content-between h-100 '>
                {/* div useful for center image */}
                <div></div>
                {/* image */}
                <div className="p-md-4">
                    <img className="w-100 weapon_img" src={weapon.displayIcon} alt={weapon.displayName} />
                </div>
                {/* weapon name */}
                 <div className="mx-4">
                  <h3 className="font_primary weapon_name display-3">{weapon.displayName}</h3>
                </div>
                {/* overlay table */}
                <div className="cover-overlay text-dark d-flex justify-content-between flex-column">
                  <div></div>
                  {weapon.weaponStats && (
                    <>
                   <table className="table font_secondary border border-dark weapon_table">
                      <thead>
                        <tr>
                          <th scope="col" className="">Category</th>
                          <th scope="col" className="">Fire Rate</th>
                          <th scope="col" className="">Magazine Size</th>
                          <th scope="col" className="">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{weapon.category.split('::')[1]}</th>
                          <td>{weapon.weaponStats.fireRate !== null && ( weapon.weaponStats.fireRate)}</td>
                          <td>{weapon.weaponStats.magazineSize !== null && ( weapon.weaponStats.magazineSize)}</td>
                          <td>{weapon.shopData && weapon.shopData.cost !== null && ( weapon.shopData.cost)}</td>
                        </tr>
                      </tbody>
                    </table>  
                  </>
                  )}
                  <div className="mx-4">
                  <h3 className="font_primary weapon_name display-3">{weapon.displayName}</h3>
                </div>
                </div> 
              </div>
            </div>
            ))}
          </div>
        </div>
       </div>
    </div>
    <div className="container text-light" >
        
    </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default Weapons;
