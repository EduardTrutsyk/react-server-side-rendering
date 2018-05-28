import React from 'react';
import PropTypes from 'prop-types';
import './Hello.css';

const Hello = ({ name }) => (
  <div>Hello <b className="name">{name}</b></div>
);

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;

