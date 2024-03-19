import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../../components/CardBuddies';

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
      <div className="container  mt-5 pt-5">
        <div className="container p-4 my-5">
            <h1 className="col-12 text-center text-light font_primary display-4 text_color_danger">Buddies</h1>
        </div>
        <div className="row mx-4 mt-5">
        {buddies.map((Buddies) => (
            <Card imgSrc={Buddies['displayIcon']} title={Buddies['displayName']} href="#" />
        ))}
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Buddies
