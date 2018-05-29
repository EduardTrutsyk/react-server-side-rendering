import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserById } from '../../modules/users';
import UserPage from './UserPage';

const mapStateToProps = (state, props) => ({
  user: state.users.current,
  loading: state.users.loading,
  userId: props.match.params.userId,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
