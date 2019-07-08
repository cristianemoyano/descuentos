import {connect} from 'react-redux';

import Items from '../components/Items';
import {deleteTask, editTask, addTask} from '../actions';

const _mapStateToProps = ({tasks}) => ({
    tasks: tasks.tasks,
});

const _mapDispatchToProps = (dispatch) => ({
    deleteTask: taskId => dispatch(deleteTask(taskId)),
    editTask: task => dispatch(editTask(task)),
    addTask: task => dispatch(addTask(task)),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Items);
