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
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Users;
