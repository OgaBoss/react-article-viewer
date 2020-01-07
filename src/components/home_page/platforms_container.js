import {connect} from 'react-redux'
import platforms from './platforms'
import {fetchPlatforms} from '../../redux/platforms_actions'

const mapStateToProps = ({platforms, loading, error}, ownProps) => {
  return {
    platforms,
    loading,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatforms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(platforms);