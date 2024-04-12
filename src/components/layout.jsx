import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className='sidebar' style={{ display: 'flex' }}>
      <div style={{backgroundColor: '#f0f0f0' }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
