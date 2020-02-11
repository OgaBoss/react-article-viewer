import React from 'react';
import styles from '../../assets/css/platform.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPlatformNews} from "../../redux/news/news_actions";

const Platform = ({platform}) => {
  const currentSelectedSource = useSelector(({news_reducer}) => news_reducer.currentSelectedSource);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchPlatformNews(platform.id))
  };
 return (
  <li
    onClick={handleClick}
    className={
      `text-gray-400 p-4 cursor-pointer hover:text-blue-500
      ${styles.platform}
      ${currentSelectedSource === platform.id ? 'bg-blue-500 text-white' : ''}`
    }>
    {platform.name}
  </li>
 )
};

export default Platform;
