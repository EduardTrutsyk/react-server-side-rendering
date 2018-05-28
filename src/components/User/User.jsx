import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ item }) => (
  <div className="user">
    <Link to={`/users/${item.id}`}>{item.name}</Link>
  </div>
);

User.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
