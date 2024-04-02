import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../../components/CardBuddies';
import Loader from "../Common/Loader.js";

const Spray = () => {
    const navigate = useNavigate();
    const [sprays, setSprays] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchSprays = async () => {
        try {
          const response = await fetch('https://valorant-api.com/v1/sprays');
          const data = await response.json();
          setSprays(data.data);
        } catch (error) {
          setError(error);
        } finally {
          setTimeout(() => {
            setIsLoading(false);
       }, 1000)
        }
      };
  
      fetchSprays();
    }, []);
  
    if (isLoading) {
      return <p><Loader/></p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  

  return (
    <div>
      <Header/>
      <div className="container mt-5 pt-5">
        <div className="container">
            <h1 className="col-12 text-center text-light ">Sprays</h1>
        </div>
        <div className="row mt-5">
        {sprays.map((spray) => (
            <Card imgSrc={spray['fullIcon']!==null?spray['fullIcon']:spray['displayIcon']} title={spray['displayName']} href="#" />
        ))}
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Spray
