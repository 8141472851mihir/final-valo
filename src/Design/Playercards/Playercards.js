import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../../components/CardPlayerCard';

const Playercard = () => {
    const navigate = useNavigate();
    const [Playercards, setPlayercard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPlayercards = async () => {
        try {
          const response = await fetch('https://valorant-api.com/v1/playercards');
          const data = await response.json();
          setPlayercard(data.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchPlayercards();
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
      <div className="container mt-5 pt-5">
        <div className="container">
            <h1 className="col-12 text-center text-light ">Player Cards</h1>
        </div>
        <div className="row mt-5">
        {Playercards.map((playerCard) => (
            <Card imgSrc={playerCard['largeArt']!==null?playerCard['largeArt']:playerCard['displayIcon']} title={playerCard['displayName']} href="#" />
        ))}
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Playercard
