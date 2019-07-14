import {connect} from 'react-redux';

import DataProvider from '../../components/Benefits/DataProvider';
import {fetchBenefits} from '../../actions/benefits';
import { fetchUser } from '../../actions/accounts'


const _mapStateToProps = ({benefits, auth}) => ({
    benefits,
    auth,
});

const _mapDispatchToProps = (dispatch) => ({
    getBenefits: () => dispatch(fetchBenefits()),
    fetchUser: () => dispatch(fetchUser()),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(DataProvider);
