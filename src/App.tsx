import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { TankMonitoring } from './views/TankMonitoring';
import { BatchHistory } from './views/BatchHistory';
import { TankHistory } from './views/TankHistory';
import { Admin } from './views/Admin';
import './App.styl'

const App: React.FC = () => {
  return (
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
  );
}

export default App;
