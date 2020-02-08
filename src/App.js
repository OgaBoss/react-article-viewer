import React from 'react';
import Platforms from './components/platforms/platforms'
import Articles from "./components/news/articles.js";
function App() {
  return (
	  <div className="App w-full h-full" >
		  <div className="w-full h-full flex flex-row flex-no-wrap justify-between p-4">
        <Platforms />
        <Articles/>
		  </div>
	  </div>
  );
}

export default App;
