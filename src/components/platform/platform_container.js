import {connect} from 'react-redux'
import Platform from './platform'
import {fetchPlatformNews} from "../../redux/news/news_actions";


const mapStateToProps = ({platform_reducer, news_reducer}, ownProps) => {
  return {
    platform: ownProps.platform,
    currentSelectedSource: news_reducer.currentSelectedSource
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatformNews: (source) => dispatch(fetchPlatformNews(source)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform)