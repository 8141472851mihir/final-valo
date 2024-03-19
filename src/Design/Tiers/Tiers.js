import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';

const Tiers = () => {
  const navigate = useNavigate();
  const [competitivetiers, setTiers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTiers = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/competitivetiers');
        const data = await response.json();
        setTiers(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTiers();
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
            <h1 class="col-12 text-center text-light ">Competitive Tiers</h1>
        </div>
        <div class="row mt-5">
        {competitivetiers[0]['tiers'].map((Tiers) => (
          Tiers.tier !== 1 && Tiers.tier !==2 ? (
            <Card imgSrc={Tiers['largeIcon']} title={Tiers['tierName']}  />
          ):null
        ))}
        </div>
      </div>
      <div class="fixed-bottom">
        <Footer/>
      </div>
    </div>
  )
}

export default Tiers
