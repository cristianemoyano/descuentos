import {connect} from 'react-redux';

import Layout from '../../components/Accounts/Layout';
import {addBenefit} from '../../actions/benefits';

const _mapStateToProps = ({auth}) => ({
    auth,
});

const _mapDispatchToProps = (dispatch) => ({
    addBenefit: benefit => dispatch(addBenefit(benefit)),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Layout);