import React, {useEffect} from 'react'

const Platforms = ({platform_reducer: {platforms = [], loading, error}, fetchPlatforms}) => {
  useEffect(() => {
    fetchPlatforms()
  }, [fetchPlatforms])
  
  return (
    <div>
      {loading}
    </div>
  )
};

export default Platforms;