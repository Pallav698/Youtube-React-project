import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = ({ display }) => {
  const isMenuopen = useSelector( (store) => store.app.isMenuopen);
  if (!isMenuopen) return null; 
  
  return (
    <div className="w-48 shadow-lg p-5">
      <div className="mb-2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="mb-2">
        <ul>
          <li>
            <h1 className="font-bold">Subscriptions</h1>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="mb-2">
        <ul>
          <li>
            <h1 className="font-bold">Watch Later</h1>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar