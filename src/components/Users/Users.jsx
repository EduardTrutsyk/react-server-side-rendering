import React from 'react';
import PropTypes from 'prop-types';

import User from '../User';

const Users = ({ users }) => (
  <div className="users">
    {users.map(item => (
      <User item={item} key={item.id} />
    ))}
  </div>
);

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Users;
