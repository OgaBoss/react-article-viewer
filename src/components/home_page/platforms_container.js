import {connect} from 'react-redux'
import platforms from './platforms'
import {fetchPlatforms} from '../../redux/platforms_actions'

const mapStateToProps = ({platform_reducer}, ownProps) => {
  return {
    platform_reducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatforms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(platforms);