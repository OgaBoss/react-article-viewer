import {connect} from 'react-redux'
import Platform from './platform'

const mapStateToProps = ({platform_reducer}, ownProps) => {
  return {
    platform: ownProps.platform
  }
}

export default connect(mapStateToProps)(Platform)