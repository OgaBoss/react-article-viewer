import React from 'react';
import styles from './platform.module.css'

const Platform = ({platform}) => {
 return (
  <li className={`text-gray-400 p-4 cursor-pointer ${styles.platform}`}>{platform.id}</li>
 )
};

export default Platform;