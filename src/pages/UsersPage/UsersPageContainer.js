import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../modules/users';
import UsersPage from './UsersPage';

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
