import React from 'react';
import Hello from '../../components/Hello';
import './HomePage.css';

const HomePage = () => (
  <div>
    <h2 className="title">Home Page</h2>
    <Hello name="you are on Home Page" />
  </div>
);

export default HomePage;
