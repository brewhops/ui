import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => 
<nav className="navbar">
  <Link to="/tank-monitoring">Home</Link>
  <Link to="/batch-history">Batch History</Link>
  <Link to="/tank-history">Tank History</Link>
  <Link to="/admin">Admin</Link>
  <a>Logout</a>
</nav>