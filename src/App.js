import React from 'react';
import PlatformsContainer from './components/home_page/platforms_container'
function App() {
  return (
	  <div className="App w-full h-full" >
		  <div className="w-full h-full flex flex-row flex-no-wrap justify-between p-4">
        <PlatformsContainer />
		  </div>
	  </div>
  );
}

export default App;
