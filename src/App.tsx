import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { TankMonitoring } from './views/TankMonitoring/TankMonitoring';
import { BatchHistory } from './views/BatchHistory/BatchHistory';
import { TankHistory } from './views/TankHistory/TankHistory';
import { Admin } from './views/Admin/Admin';
import './index.styl'

const App: React.FC = () => {
  return (
    <div id="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/tank-monitoring">
            <TankMonitoring/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/batch-history">
            <BatchHistory/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/tank-history">
            <TankHistory/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
