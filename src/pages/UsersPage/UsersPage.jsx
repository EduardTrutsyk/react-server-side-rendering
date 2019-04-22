import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/Hello';
import styles from './UsersPage.css';
import Users from '../../components/Users';
import Loader from '../../components/Loader';

const UsersPage = ({ loading, users, fetchUsers }) => {
  /**
   * The effect hook runs when the component mounts but also when the component updates.
   *
   * We only want to fetch data when the component mounts
   * That’s why you can provide an empty array as second argument
   * to the effect hook to avoid activating it on component updates
   * but only for the mounting of the component
   */
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Users Page</h2>
      <Hello name="you are on Users Page" />
      <Suspense fallback={<Loader loading />}>
        <Users users={users} />
      </Suspense>
    </div>
  );
};

UsersPage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})),
};
UsersPage.defaultProps = {
  users: [],
};

export default UsersPage;
