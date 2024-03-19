import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../../components/CardBuddies';

const Currency = () => {
  const navigate = useNavigate();
  const [currencies, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/currencies');
        const data = await response.json();
        setAgents(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrency();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
       <>
       <Header />
            <div className="container mt-5 pt-5">
            <div className="container p-3 my-5">
                <h1 className="col-12 text-center text-light font_primary display-4 text_color_danger">Currency</h1>
            </div>
            <div className="row justify-content-center mt-5">
            {currencies.map((currency) => (
                <Card imgSrc={currency['displayIcon']} title={currency['displayName']} />
            ))}
            </div>

            </div>
            <div className="fixed-bottom">
                <Footer/>
            </div>
        </>
    </div>
  )
}

export default Currency
