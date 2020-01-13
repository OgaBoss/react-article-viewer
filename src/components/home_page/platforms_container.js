import {connect} from 'react-redux'
import Platforms from './platforms'
import {fetchPlatforms, filterPlatforms} from '../../redux/platforms_actions'

const mapStateToProps = ({platform_reducer}, ownProps) => {
  return {
    platform_reducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatforms()),
    // filterPlatforms: (value) => dispatch(filterPlatforms(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platforms);