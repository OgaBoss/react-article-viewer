import React from 'react';
import PlatformsContainer from './components/home_page/platforms_container'
function App() {
  return (
	  <div className="App w-full h-full" >
		  <div className="w-full max-w-md" >
			  <p className="text-red-500">Using Tailwind css now, sure</p>
        <PlatformsContainer />
		  </div>
	  </div>
  );
}

export default App;
