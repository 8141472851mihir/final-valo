import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Maps = () => {
  const navigate = useNavigate();
  const handleShareClick = (uid) => {
    navigate(`/final-valo/agent/${uid}`);
  };
  const [map, setMaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data = await response.json();
        setMaps(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
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
        <h1 class="col-12 text-center text-light ">Valorant map</h1>
    </div>
    <div class="container text-light" >
        <div class="container-fluid weapon-list my-1 d-flex flex-wrap">
            {map.map((map) => (
            <div key={map.uuid} class="weapon-card col-md-4 col-12 text-center p-md-5 ">
              <div class='weapon-inner-card h-100 d-flex justify-content-between flex-column p-md-4 border border-light'>
                <div class="">
                <img class="align-text-middle img-fluid w-100 " src={map.splash} alt={map.splash} />
                </div>
                 <div class="weapon-info">
                  <h3 class="weapon-name float-center">{map.displayName}</h3>
                  <span class="float-end"><button class="btn btn-danger" id="weaponDeatils" name="weaponDeatils" value="weaponDeatils">+</button></span>
                </div>
                <div class="cover-overlay text-dark">
                    <p class="p-2 font-weight-bold text-danger text-uppercase ">{map.description}</p>
                    <div class="float-end"><button class="btn btn-danger" id="weaponDeatils" name="weaponDeatils" value="weaponDeatils">+</button></div>
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

export default Maps;
