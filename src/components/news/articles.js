import React from 'react'
import styles from '../../assets/css/news.module.css'
import {shallowEqual, useSelector} from "react-redux";
import spinner from '../../assets/img/spinner.gif'
import {Article} from './article.js'

export const NewsHeading = () => {
  const {currentSelectedSource} = useSelector(state => ({
    currentSelectedSource: state.news_reducer.currentSelectedSource
  
  }));
  return (
    <div className='h-16 w-full bg-gray-200'>
      <p className='p-4 text-2xl text-center'>{currentSelectedSource ? currentSelectedSource : 'No selected news source' }</p>
    </div>
  )
};

const Articles = () => {
  const {loading, articles, error} = useSelector(state => ({
    loading: state.news_reducer.loading,
    articles: state.news_reducer.articles,
    error: state.news_reducer.error,
  }), shallowEqual);
  
  
  if (articles.length > 0) {
    return (
      <div className={`${styles.news}`}>
        <NewsHeading />
        {articles.map((article) => (
          <Article article={article} key={article.title}/>
        ))}
      </div>
    )
  } else {
    return (
      <div className={`${styles.news}`}>
        <NewsHeading />
        <div className="w-full h-full text-center">
          <img src={spinner} alt="" className='mx-auto'/>
        </div>
      </div>
    )
  }
};

export default Articles;