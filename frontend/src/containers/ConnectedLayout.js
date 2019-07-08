import {connect} from 'react-redux';

import Layout from '../components/Layout';
import {addTask} from '../actions';

const _mapDispatchToProps = (dispatch) => ({
    addTask: task => dispatch(addTask(task)),
});

export default connect(
    null,
    _mapDispatchToProps,
)(Layout);