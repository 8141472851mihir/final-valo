import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardBuddies from '../../components/CardBuddies';
import Loader from "../Common/Loader.js";

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
        setTimeout(() => {
          setIsLoading(false);
     }, 2000)
      }
    };

    fetchTiers();
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
            <h1 className="col-12 text-center text-light ">Competitive Tiers</h1>
        </div>
        <div className="row mt-5">
        {competitivetiers[0]['tiers'].map((Tiers) => (
          Tiers.tier !== 1 && Tiers.tier !==2 ? (
            <CardBuddies imgSrc={Tiers['largeIcon']} title={Tiers['tierName']}  />
          ):null
        ))}
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer/>
      </div>
    </div>
  )
}

export default Tiers
