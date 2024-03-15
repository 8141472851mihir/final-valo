import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../../components/CardBuddies';

const Bundles = () => {
    const navigate = useNavigate();
    const [bundles, setBundles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchBundles = async () => {
        try {
          const response = await fetch('https://valorant-api.com/v1/bundles');
          const data = await response.json();
          setBundles(data.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchBundles();
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
            <h1 class="col-12 text-center text-light ">Bundles</h1>
        </div>
        <div class="row mt-5">
        {bundles.map((Bundles) => (
            <Card imgSrc={Bundles['displayIcon']} title={Bundles['displayName']} href="#" />
        ))}
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Bundles
