import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/Hello';
import styles from './UserPage.css';

class UserPage extends PureComponent {
  static propTypes = {
    user: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <h2 className={styles.title}>User Page</h2>
        <Hello name="you are on User Page" />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }
}

export default UserPage;
