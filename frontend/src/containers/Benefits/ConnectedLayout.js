import {connect} from 'react-redux';

import Layout from '../../components/Benefits/Layout';
import {addBenefit} from '../../actions/benefits';

const _mapDispatchToProps = (dispatch) => ({
    addBenefit: benefit => dispatch(addBenefit(benefit)),
});

export default connect(
    null,
    _mapDispatchToProps,
)(Layout);