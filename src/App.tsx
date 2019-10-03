import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { TankMonitoring } from './pages/TankMonitoring';
import { BatchHistory } from './pages/BatchHistory';
import { TankHistory } from './pages/TankHistory';
import { Admin } from './pages/Admin';
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
