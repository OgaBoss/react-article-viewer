import React, {useEffect, useState} from 'react'
import styles from '../../assets/css/platform.module.css'
import PlatformContainer from '../platform/platform_container'

const Platforms = ({platform_reducer: {platforms = [], loading, error}, fetchPlatforms}) => {
  const [search, setSearch] = useState('')
  let [allPlatform, setAllPlatform] = useState([])
  
  useEffect(() => {
    fetchPlatforms()
  }, [fetchPlatforms])
  
  useEffect(() => {
    setAllPlatform(platforms)
  }, [platforms])
  
  const filterPlatform = () => {
    allPlatform = platforms.filter(platform => platform.name.toLowerCase().startsWith(search.toLowerCase()))
  }
  
  if(allPlatform.length > 0) {
    return (
      <div className={`h-full border-r-2 pr-4 ${styles.platforms}`}>
        <div className='h-16 w-full bg-gray-200'>
          <p className='p-4 text-2xl'>All News Platforms</p>
        </div>
        <input onKeyDown={filterPlatform()} onChange={e => setSearch(e.target.value)} value={search} type="text" className='my-4 pl-4 h-12 w-full border-2 border-black-100'/>
        <ul>
          {allPlatform.map(platform => (
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