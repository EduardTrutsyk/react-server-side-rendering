import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hello.css';

const Hello = ({ name }) => (
  <div>Hello <b className={styles.name}>{name}</b></div>
);

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;

