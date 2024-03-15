import Header from "../Common/Header.js";
import Footer from "../Common/Footer.js";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Agentx = (props) => {
    const data = (a,b,c,d) => {
        var element = document.getElementById(a);
        element.classList.remove("d-none");
        var element1 = document.getElementById(b);
        element1.classList.add("d-none");
        var element2 = document.getElementById(c);
        element2.classList.add("d-none");
        var element3 = document.getElementById(d);
        element3.classList.add("d-none");
      };
    
  const { uid } = useParams();
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents/'+uid);
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

  return (
    <div>
    <Header />
    <div id="demo" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-inner">
            <div class="carousel-item active " style={{height: '80vh'}}>
            <div class="my-5"></div>
                <img src="D:\Projects\Practice\First\img\agents-background.jpg" alt="" class=" img-fluid" style={{height: '80vh' }}/>
              <div class="carousel-caption ">
                <h3 style={{marginBottom: '3vh'}}><a href={agents.bustPortrait}><img src={agents.bustPortrait} height="400vh" alt="valorant-font" border="0"/></a></h3>
                <span class=" p-3 mt-2" id="filler-btn" style={{fontSize: 'xx-large'}}>{agents.displayName}</span><br></br>
                <span class=" p-3 mt-2" id="filler-btn" style={{fontSize: 'x-large'}}>{agents.role.displayName}</span>
            </div>  
            </div>
          </div>
    </div>
   
    <div id="about" class="container-fluid p-5 mb-5 text-light">
        <div class="row mb-2">
            <h1 class="bg-dark text-danger text-center titles">Special Ability</h1>
        </div>
        <div class="row">
            <div class="col-md-6 p-4  ">
                       
                <ul class="nav nav-pills my-4">
                    <li class="nav-item">
                            <button class="btn btn-outline-light active btn-square-md" onClick={() => data('a1','a2','a3','a4')}  data-bs-toggle="pill" data-bs-target="#collapseOne">Q</button>       
                    </li>
                    <li class="py-2" style={{fontSize: 'xx-large'}}>-</li>
                    <li class="nav-item">
                        <button class="btn  btn-outline-light btn-square-md" onClick={() => data('a2','a1','a3','a4')} data-bs-toggle="pill" data-bs-target="#collapseTwo">E</button>
                    </li>
                    <li class="py-2" style={{fontSize: 'xx-large'}}>-</li>
                    <li class="nav-item">
                            <button class="btn  btn-outline-light btn-square-md " onClick={() => data('a3','a2','a1','a4')}  data-bs-toggle="pill" data-bs-target="#collapseThree">C</button>
                    </li>
                    <li class="py-2" style={{fontSize: 'xx-large'}}>-</li>

                    <li class="nav-item">
                        <button class="btn  btn-outline-light btn-square-md " onClick={() => data('a4','a2','a3','a1')}  data-bs-toggle="pill" data-bs-target="#collapseFour">X</button>
                    </li>
                  </ul>
                  <div >

                    <div id="a1" class="container">
                        <h4>Q - {agents.abilities[0].displayName}</h4>
                        {agents.abilities[0].description}
                    </div>
                 
        
                    <div id="a2"  class="container  d-none">
                        <h4>E - {agents.abilities[1].displayName}</h4>
                        {agents.abilities[1].description}
                    </div>
               
        
                    <div id="a3"  class=" container d-none">
                        <h4>C - {agents.abilities[2].displayName}</h4>
                        {agents.abilities[2].description}
                      </div>

                    <div id="a4"  class=" container d-none">
                        <h4>X - {agents.abilities[3].displayName}</h4>
                        {agents.abilities[3].description}
                    </div>
                   
                </div>
            </div>
            <div class="col-md-6 ms-md-auto w-md-50">
                <div  class="tab-content">
                    <div id="collapseOne" class="tab-pane container active">
                        {/* <img src={require('../../assets/Website_Gekko_Wingman_Stun_FNL.mp4')} alt="" class="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                      <video class="img-thumbnail bg-danger border-danger p-2" src={Agentdemo[agents.displayName]['Q']}  width="600vh" autoPlay muted loop></video>
                   </div>
                 
        
                    <div id="collapseTwo"  class="tab-pane container ">
                    {/* <img src={agents.abilities[1].displayIcon} alt="" class="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                    <video class="img-thumbnail bg-danger border-danger p-2" src={Agentdemo[agents.displayName]['E']} width="600vh" autoPlay muted loop></video>
                    </div>
               
        
                    <div id="collapseThree"  class="tab-pane container ">
                    {/* <img src={agents.abilities[2].displayIcon} alt="" class="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                        <video class="img-thumbnail bg-danger border-danger p-2" src={Agentdemo[agents.displayName]['C']} width="600vh" autoPlay muted loop></video>
                      </div>
                    <div id="collapseFour"  class="tab-pane container ">
                    {/* <img src={agents.abilities[3].displayIcon} alt="" class="img-thumbnail bg-danger border-danger p-2" height="300vh" width="600vh"/> */}
                    <video class="img-thumbnail bg-danger border-danger p-2" src={Agentdemo[agents.displayName]['X']} width="600vh" autoPlay muted loop></video>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default Agentx;
