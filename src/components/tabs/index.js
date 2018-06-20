import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const Tabs = () => (
  <div className="tabs">
    <ul className="tabs__list">
      <li>
        <Link to="/">Overview</Link>
      </li>
      {/* <li>
        <Link to="/bracket">Bracket</Link>
      </li> */}
      <li>
        <Link to="/rules">Rules</Link>
      </li>
      <li>
        <Link to="/live">Live</Link>
      </li>
    </ul>
  </div>
);

export default Tabs;