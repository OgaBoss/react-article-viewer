import React from 'react';
import styles from './platform.module.css'

const Platform = ({platform}) => {
 return (
  <li className={`text-gray-400 p-4 cursor-pointer hover:text-blue-500 ${styles.platform}`}>{platform.name}</li>
 )
};

export default Platform;