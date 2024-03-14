import React from 'react';
import agenntasset from './assets'; // Import the agenntasset object

const AgentAssets = () => {
  return (
    <div>
      {Object.entries(agenntasset).map(([agent, abilities]) => (
        <div key={agent} className='text-danger'>
          <h2>{agent}</h2>
          <ul>
            {Object.entries(abilities).map(([ability, video]) => (
              <li key={ability}>
                {ability}: {video}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AgentAssets;