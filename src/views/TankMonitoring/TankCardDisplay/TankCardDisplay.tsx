import React from 'react';
import TankCard from '../TankCard/TankCard';
import './TankCardDisplay.styl'

const TankCardDisplay = () => {
  return (
  <div id="tankInfo">
    <h2>Tank Monitoring</h2>
    <div id="tankContent">
      <TankCard />
    </div>
  </div>
  )
}

export default TankCardDisplay;