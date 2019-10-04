import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styl';

export const NavBar: React.FC = () => 
<nav className="navbar">
  <Link className="option" to="/tank-monitoring">Home</Link>
  <Link className="option" to="/batch-history">Batch History</Link>
  <Link className="option" to="/tank-history">Tank History</Link>
  <Link className="option" to="/admin">Admin</Link>
  <a className="option" href="noop">Logout</a>
</nav>