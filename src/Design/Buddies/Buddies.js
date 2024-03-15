import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
<<<<<<< Updated upstream
import Card from '../../components/CardBuddies';
=======
import Card from '../../components/Card';
>>>>>>> Stashed changes

const Buddies = () => {
    const navigate = useNavigate();
    const [buddies, setBuddies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchBuddies = async () => {
        try {
          const response = await fetch('https://valorant-api.com/v1/buddies');
          const data = await response.json();
          setBuddies(data.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchBuddies();
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
      <div class="container mt-5 pt-5">
        <div class="container">
            <h1 class="col-12 text-center text-light ">Buddies</h1>
        </div>
        <div class="row mt-5">
        {buddies.map((Buddies) => (
            <Card imgSrc={Buddies['displayIcon']} title={Buddies['displayName']} href="#" />
        ))}
        </div>
      </div>
<<<<<<< Updated upstream
        <Footer/>
=======
      <div class="fixed-bottom">
        <Footer/>
      </div>
>>>>>>> Stashed changes
    </div>
  )
}

export default Buddies
