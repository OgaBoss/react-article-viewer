import React, {useEffect} from 'react'

const Platforms = ({platforms = {}, loading, error, fetchPlatforms}) => {
  useEffect(() => {
    fetchPlatforms()
  })
  
  return (
    <div>
      {loading}
    </div>
  )
};

export default Platforms;