import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/review" className="hover:underline">Resume Review</Link>
        </li>
        <li>
          <Link to="/feedback" className="hover:underline">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;