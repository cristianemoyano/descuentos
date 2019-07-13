import {connect} from 'react-redux';

import DataProvider from '../../components/Task/DataProvider';
import {fetchTasks} from '../../actions/tasks';


const _mapStateToProps = ({tasks}) => ({
    tasks,
});

const _mapDispatchToProps = (dispatch) => ({
    getTasks: () => dispatch(fetchTasks()),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(DataProvider);
