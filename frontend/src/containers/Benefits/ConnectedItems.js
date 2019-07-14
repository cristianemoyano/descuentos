import {connect} from 'react-redux';

import Items from '../../components/Benefits/Items';
import {deleteBenefit, editBenefit, addBenefit} from '../../actions/benefits';

const _mapStateToProps = ({benefits}) => ({
    benefits: benefits.benefits,
});

const _mapDispatchToProps = (dispatch) => ({
    deleteBenefit: benefitId => dispatch(deleteBenefit(benefitId)),
    editBenefit: benefit => dispatch(editBenefit(benefit)),
    addBenefit: benefit => dispatch(addBenefit(benefit)),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Items);
