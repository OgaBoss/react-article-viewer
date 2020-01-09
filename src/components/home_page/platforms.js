import React, {useEffect} from 'react'
import styles from './platform.module.css'
import PlatformContainer from './platform_container'

const Platforms = ({platform_reducer: {platforms = [], loading, error}, fetchPlatforms}) => {
  useEffect(() => {
    fetchPlatforms()
  }, [fetchPlatforms])
  
  if(platforms.length > 0) {
    return (
      <div className={`h-full border-r-2  ${styles.platforms}`}>
        <div className='h-16 w-full bg-gray-200'>
          <p className='p-4 text-2xl'>All News Platforms</p>
        </div>
        <ul>
          {platforms[0].map(platform => (
            <PlatformContainer key={platform.id} platform={platform}/>
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div className={`p-4 ${styles.loading}`}>
        <p className=''>Loading...</p>
      </div>
    )
  }
};

export default Platforms;