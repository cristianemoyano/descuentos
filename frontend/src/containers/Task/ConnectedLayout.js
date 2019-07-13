import {connect} from 'react-redux';

import Layout from '../../components/Task/Layout';
import {addTask} from '../../actions/tasks';

const _mapDispatchToProps = (dispatch) => ({
    addTask: task => dispatch(addTask(task)),
});

export default connect(
    null,
    _mapDispatchToProps,
)(Layout);