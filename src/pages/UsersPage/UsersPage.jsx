import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/Hello';
import styles from './UsersPage.css';
import Users from '../../components/Users';

class UsersPage extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({})),
  };
  static defaultProps = {
    users: [],
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2 className={styles.title}>Users Page</h2>
        <Hello name="you are on Users Page" />
        <Users users={users} />
      </div>
    );
  }
}

export default UsersPage;
