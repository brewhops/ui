import React from 'react';
import './TankCard.styl'

export interface ITankCardProps {
  tankName: string;
  beerName: string;
  pressure: number;
  batchName: string;
  actionName: string;
  status: string;
  temperature: number;
}

const TankCard: React.FC = () => {
  return (    
  <a>
    <div className="tank">
      <div className="tank-name">
        Tank
      </div>
      <table>
        <tr>
          <td>tank.beer_name</td>
          <td>tank.pressure psi</td>
          <td>tank.status</td>
        </tr>
        <tr>
          <td>tank.batch_name</td>
          <td>tank.temperature ºF</td>
        </tr>
      </table>

      <div className="tank-action">
        tank.action_name
      </div>
    </div>
  </a>
  )
}

export default TankCard;