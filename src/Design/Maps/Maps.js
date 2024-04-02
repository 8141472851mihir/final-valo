import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from "../Common/Loader.js";

const Maps = () => {
  const navigate = useNavigate();
  const handleShareClick = (uid) => {
    navigate(`/final-valo/agent/${uid}`);
  };

  const [map, setMaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapImg,setMapImg] = useState('https://images5.alphacoders.com/120/1203267.jpg');
  const [mapInfo,setMapInfo] = useState('Valorant features a diverse array of meticulously designed maps, each offering unique tactical challenges and strategic opportunities. From the urban streets of Bind to the futuristic facility of Haven, players navigate dynamic environments that demand adaptability and teamwork to emerge victorious. With carefully crafted layouts and strategic chokepoints, Valorant maps provide the perfect battleground for thrilling, high-stakes encounters.');
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data = await response.json();
        setMaps(data.data);
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
  const handleMapData = async(id) =>{
    try{
      const response = await fetch(`https://valorant-api.com/v1/maps/${id}`);
      const data = await response.json();
      setMapImg(data.data.splash);
      setMapInfo(data.data.narrativeDescription);
      console.log(mapImg);
      // setMapInfo(data.);

    } catch(error){
      console.log(error);
    }
  }

 if(!mapInfo)
 {
   setMapInfo('Valorant features a diverse array of meticulously designed maps, each offering unique tactical challenges and strategic opportunities. From the urban streets of Bind to the futuristic facility of Haven, players navigate dynamic environments that demand adaptability and teamwork to emerge victorious. With carefully crafted layouts and strategic chokepoints, Valorant maps provide the perfect battleground for thrilling, high-stakes encounters.');
 }
  if (isLoading) {
    return <p><Loader/></p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
    <Header/>
    <div className="main_map_container p-0  position-relative">
      <div className="row p-0 m-0">
        <div className="col-lg-2 col-md-12 col-12 d-flex justify-content-center align-items-center">
          <div className="map_container position-fixed ">
              <div className="font_primary text-white text_color_danger">Maps</div>
          </div>
        </div>
        <div className="col-lg-10 col-md-12 position-relative col-12 text-white p-0 m-0">
          <div className="map_cover d-flex align-items-center justify-content-center">
              
            <div className="w-25 font_secondary border-top pt-3">  
            {mapInfo}
            </div> 
          </div>
          <div className="position-absolute overflow-auto mt-5 vertical_map_menu font_secondary fw-bold">
          {map.map((map) => ( <div className="text-uppercase map_name" onClick={()=>handleMapData(map.uuid)}>{map.displayName}</div>))}
          </div>
          <div className="img_map">
            <div className="ratio ratio-16x9 active">
                <img src={mapImg} description="Each map is a playground to showcase your creative thinking. Purpose-built for team strategies.Each map is a playground to showcas" alt="Los Angeles" className="d-block w-100 " />

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Maps;
