import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import './sass/main.scss'
import {isMobile, isTablet} from 'react-device-detect'

import Home from './components/home/home.component'
import About from './components/about/about.component'
import Features from './components/features/features.component'
import Tours from './components/tours/tours.component'
import Stories from './components/stories/stories.component'
import Book from './components/book/book.component'
import Footer from './components/footer/footer.component'

function App() {
  let auto = true;
  if(isMobile || isTablet){
    auto = false;
  }
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    navigation = {false} 
    autoScrolling = {auto}
    anchors = {['home', 'about', 'features', 'tours', 'stories', 'book', 'footer']}
    /* Options here */

    render={({ state, fullpageApi }) => {
      console.log(fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Features />
          </div>
          <div className="section">
            <Tours />
          </div>
          <div className="section">
            <Stories />
          </div>
          <div className="section">
            <Book />
          </div>
          <div className="section">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
