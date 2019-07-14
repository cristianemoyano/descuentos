import {connect} from 'react-redux';

import DataProvider from '../../components/Accounts/DataProvider';
import {fetchUser, loginUser, logoutUser} from '../../actions/accounts';


const _mapStateToProps = () => ({

});

const _mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser()),
    login: (username, password) => dispatch(loginUser(username, password)),
    logout: () => dispatch(logoutUser()),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(DataProvider);
