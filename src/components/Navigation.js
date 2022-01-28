import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">List</Link>
      </li>
      <li>
        <Link to="/write">Write</Link>
      </li>
    </ul>
  );
};

export default Navigation;
