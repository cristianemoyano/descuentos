import { connect } from 'react-redux'
import { fetchTasks } from '../../actions/tasks'
import App from '../../components/Task/App'

const mapDispatchToProps = {
    fetchTasks,
};

export default connect(
    null,
    mapDispatchToProps
)(App)