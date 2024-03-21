import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import Loader from "../Common/Loader.js";
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Agents = () => {
  const navigate = useNavigate();
  const handleShareClick = (uid) => {
    navigate(`/final-valo/agent/${uid}`);
  };
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        setAgents(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
     }, 2000)
      }
    };

    fetchAgents();
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
    <Header/>
    <div className="mt-5 pt-5">
    <div className="container p-4 my-5">
        <h1 className="col-12 text_color_danger display-3 display-md-4 text-center text-light font_primary">Agents</h1>
    </div>
    <div className="container text-light" >
     
        <div className="container-fluid p-0   my-1 d-flex flex-wrap">
            {agents.map((agent) => (
              agent.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9' ? (
                  <div key={agent.uuid} className="col-md-4 col-xl-3 col-6 text-center p-1 ">
                    <div className='agent-inner-card d-flex justify-content-center flex-column p-md-4 p-3 border border-secondary'>
                      <div className="ratio ratio-1x1 ">
                        <img className=" w-100" src={agent.displayIcon} alt={agent.displayName} />
                      </div>
                      <div className="mt-2 ">
                        <h3 className="text-center  font_secondary fw-bold">{agent.displayName}</h3>
                      </div>
                      <div className="cover-overlay flex-column text-dark">
                        <div className="font_secondary overflow-scroll  ajent_cover_overlay">
                          <p className="p-2 font-weight-bold  font_body text-start p-lg-4 p-md-2 p-2 ">{agent.description}</p>
                        </div>
                        <div className="mt-3">
                          <button className="bg-transparent border-0 font_secondary text-decoration-underline hover_black font_body text_color_danger " onClick={() => handleShareClick(`${agent.uuid}`)} id="weaponDeatils" name="weaponDeatils" value="weaponDeatils">More Details</button>
                        </div>
                        
                      </div> 
                    </div>
                  </div>
                ):null
            ))}
        </div>
    </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default Agents;
