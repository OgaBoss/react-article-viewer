import React from 'react';
import styles from '../../assets/css/platform.module.css'

const Platform = ({platform}) => {
 
 return (
  <li onClick={} className={`text-gray-400 p-4 cursor-pointer hover:text-blue-500 ${styles.platform}`}>{platform.name}</li>
 )
};

export default Platform;