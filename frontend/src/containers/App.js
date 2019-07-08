import { connect } from 'react-redux'
import { fetchTasks } from '../actions'
import App from '../components/App'

const mapDispatchToProps = {
    fetchTasks,
};

export default connect(
    null,
    mapDispatchToProps
)(App)