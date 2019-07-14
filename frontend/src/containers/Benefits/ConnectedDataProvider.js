import {connect} from 'react-redux';

import DataProvider from '../../components/Benefits/DataProvider';
import {fetchBenefits} from '../../actions/benefits';


const _mapStateToProps = ({benefits}) => ({
    benefits,
});

const _mapDispatchToProps = (dispatch) => ({
    getBenefits: () => dispatch(fetchBenefits()),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(DataProvider);
