import React from 'react';
import styles from '../../assets/css/platform.module.css'

const Platform = ({platform, currentSelectedSource,  fetchPlatformNews}) => {
  const handleClick = () => {
    fetchPlatformNews(platform.id)
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