import React, {useEffect} from 'react'
import styles from './platform.module.css'
const Platforms = ({platform_reducer: {platforms = [], loading, error}, fetchPlatforms}) => {
  useEffect(() => {
    fetchPlatforms()
  }, [fetchPlatforms])
  
  return (
    <div className={`h-full ${styles.platforms}`}>
      {platforms.length < 0 ? (
        <div></div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
};

export default Platforms;