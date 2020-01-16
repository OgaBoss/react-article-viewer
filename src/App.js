import React from 'react';
import PlatformsContainer from './components/platforms/platforms_container'
import Articles from "./components/news/articles.js";
function App() {
  return (
	  <div className="App w-full h-full" >
		  <div className="w-full h-full flex flex-row flex-no-wrap justify-between p-4">
        <PlatformsContainer />
        <Articles/>
		  </div>
	  </div>
  );
}

export default App;
