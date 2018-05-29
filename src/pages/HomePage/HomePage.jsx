import React from 'react';
import Hello from '../../components/Hello';
import styles from './HomePage.css';

const HomePage = () => (
  <div>
    <h2 className={styles.title}>Home Page</h2>
    <Hello name="you are on Home Page" />
  </div>
);

export default HomePage;
