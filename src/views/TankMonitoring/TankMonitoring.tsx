import React from 'react';
import TankCardDisplay from './TankCardDisplay/TankCardDisplay';
import './TankMonitoring.styl';
import BulkCsvEntry from './BulkCsvEntry/BulkCsvEntry';

const TankMonitoring: React.FC = () => {
  return <div id="content">
    <TankCardDisplay />
    <BulkCsvEntry />
  </div>
}

export default TankMonitoring;
  