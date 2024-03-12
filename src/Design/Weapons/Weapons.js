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
    <div class="mt-5 pt-5">
    <div class="container">
        <h1 class="col-12 text-center text-light ">Valorant Arsenal</h1>
    </div>
    <div class="container text-light border" >
        <div class="container-fluid weapon-list my-1 d-flex flex-wrap">
            {weapons.map((weapon) => (
            <div key={weapon.uuid} class="weapon-card col-md-6 col-12 text-center p-md-5 ">
              <div class='weapon-inner-card h-100 d-flex justify-content-between flex-column p-md-4 border border-light'>
                <div class="">
                <img class="align-text-middle img-fluid w-100 " src={weapon.displayIcon} alt={weapon.displayName} />
                </div>
                 <div class="weapon-info">
                  <h3 class="weapon-name float-center">{weapon.displayName}</h3>
                  <span class="float-end"><button class="btn btn-danger" id="weaponDeatils" name="weaponDeatils" value="weaponDeatils">+</button></span>
                </div>
                <div className="cover-overlay text-dark">
                  {weapon.weaponStats && (
                    <>
                   <table class="table table-responsive">
                      <thead>
                        <tr>
                          <th scope="col">Category</th>
                          <th scope="col">Fire Rate</th>
                          <th scope="col">Magazine Size</th>
                          <th scope="col">Cost</th>
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
                </div> 
              </div>
            </div>
            ))}
        </div>
    </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default Weapons;
