import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <div>Hello <b>{name}</b></div>
);

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;

