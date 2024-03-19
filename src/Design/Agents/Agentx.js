import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import Agentdemo from "./Agentsdemo.js";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Agentx = () => {
  const data = (a, b, c, d) => {
    var element = document.getElementById(a);
    element.classNameList.remove("d-none");
    var element1 = document.getElementById(b);
    element1.classNameList.add("d-none");
    var element2 = document.getElementById(c);
    element2.classNameList.add("d-none");
    var element3 = document.getElementById(d);
    element3.classNameList.add("d-none");
  };

  const { uid } = useParams();
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents/' + uid);
        const data = await response.json();
        setAgents(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, [uid]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (<>
    

    <Header />
    <div className="mt-5 pt-1">
      <div className="container mt-5">
        <div className="row">
          {/* Agent X image*/}
          <div className="col-12 col-lg-6  d-flex justify-content-center">
            <div className=" ">
              <img src="D:\Projects\Practice\First\img\agents-background.jpg" alt="" className="w-100"/>
              {/* Agent large image */}
              <div className="">
                <a href={agents.bustPortrait}>
                  <img src={agents.bustPortrait}  alt="valorant-font" border="0" className="w-100" /></a>
              </div>
            </div>
          </div>

          {/* Agent Ability */}
          <div className="col-12 col-lg-6 ">
            <div className="row">
              <div className="col-12 my-3 ">
                <h1 className="font_primary display-3 m-0  text_color_danger">{agents.displayName}</h1>
                <h3 className="font_secondary text-white">{agents.role.displayName}</h3>
              </div>
              <div className="col-12 my-3 ">
                <h3 className="font_secondary text-white font_primary border-secondary border-bottom">Special Ability</h3>

                <ul className="nav nav-pills my-4 font_secondary text-white">
                  <li className="nav-item ">
                    <button className="btn btn-outline-light rounded-0 active btn-square-md" onClick={() => data('a1', 'a2', 'a3', 'a4')} data-bs-toggle="pill" data-bs-target="#collapseOne">Q</button>
                  </li>
                  <li className="nav-item ">
                    <button className="btn  btn-outline-light rounded-0 btn-square-md" onClick={() => data('a2', 'a1', 'a3', 'a4')} data-bs-toggle="pill" data-bs-target="#collapseTwo">E</button>
                  </li>
                  <li className="nav-item ">
                    <button className="btn  btn-outline-light rounded-0 btn-square-md " onClick={() => data('a3', 'a2', 'a1', 'a4')} data-bs-toggle="pill" data-bs-target="#collapseThree">C</button>
                  </li>
                  <li className="nav-item ">
                    <button className="btn  btn-outline-light rounded-0 btn-square-md " onClick={() => data('a4', 'a2', 'a3', 'a1')} data-bs-toggle="pill" data-bs-target="#collapseFour">X</button>
                  </li>
                </ul>

                <div className="text-white font_secondary">
                  <div id="a1" className="container p-0">
                    <h4>Q - {agents.abilities[0].displayName}</h4>
                    {agents.abilities[0].description}
                  </div>
                  <div id="a2" className="container p-0  d-none">
                    <h4>E - {agents.abilities[1].displayName}</h4>
                    {agents.abilities[1].description}
                  </div>
                  <div id="a3" className=" container p-0 d-none">
                    <h4>C - {agents.abilities[2].displayName}</h4>
                    {agents.abilities[2].description}
                  </div>
                  <div id="a4" className=" container p-0 d-none">
                    <h4>X - {agents.abilities[3].displayName}</h4>
                    {agents.abilities[3].description}
                  </div>
                </div>

                <div  className="tab-content mt-4">
                    <div id="collapseOne" className="tab-pane container p-0 active">
                        {/* <img src={require('../../assets/Website_Gekko_Wingman_Stun_FNL.mp4')} alt="" className="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                      <video className="img-thumbnail bg-danger border-danger rounded-0 p-1" src={Agentdemo[agents.displayName]['Q']}  width="600vh" autoPlay muted loop></video>
                   </div>
                    <div id="collapseTwo"  className="tab-pane p-0 container ">
                    {/* <img src={agents.abilities[1].displayIcon} alt="" className="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                    <video className="img-thumbnail bg-danger border-danger rounded-0 p-1" src={Agentdemo[agents.displayName]['E']} width="600vh" autoPlay muted loop></video>
                    </div>
                    <div id="collapseThree"  className="tab-pane p-0 container ">
                    {/* <img src={agents.abilities[2].displayIcon} alt="" className="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                        <video className="img-thumbnail bg-danger border-danger rounded-0 p-1" src={Agentdemo[agents.displayName]['C']} width="600vh" autoPlay muted loop></video>
                      </div>
                    <div id="collapseFour"  className="tab-pane p-0 container ">
                    {/* <img src={agents.abilities[3].displayIcon} alt="" className="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                    <video className="img-thumbnail bg-danger border-danger rounded-0 p-1" src={Agentdemo[agents.displayName]['X']} width="600vh" autoPlay muted loop></video>
                    </div>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>

  );
};

export default Agentx;
