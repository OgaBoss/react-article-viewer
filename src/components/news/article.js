import React from 'react'
import styles from '../../assets/css/news.module.css'

export const Article = ({article}) => {
  return (
    <div className='flex justify-start mt-4'>
      <img className={`h-16 w-1/3`} src={article.urlToImage} alt=""/>
      <div className={`${styles.articleContent} ml-2`}>
        <h5 className='text-xl w-3/5 text-gray-700'>{article.title}</h5>
        <p className='italic mt-2'>Click <a href={article.url} className='text-blue-500'>here</a> to read more</p>
      </div>
    </div>
  );
};