import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    navigation = {true} /* Options here */

    render={({ state, fullpageApi }) => {
      console.log(fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
