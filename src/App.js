import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import './sass/main.scss'


import Home from './components/home/home.component'
import About from './components/about/about.component'
import Features from './components/features/features.component'
import Tours from './components/tours/tours.component'
import Stories from './components/stories/stories.component'
import Book from './components/book/book.component'
import Footer from './components/footer/footer.component'

function App() {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    navigation = {false} 
    autoScrolling = {true}
    anchors = {['home', 'about', 'features', 'tours', 'stories', 'book', 'footer']}
    fixedElements = {'.navigation'}
    
    /* Options here */

    render={({ state, fullpageApi }) => {
      console.log(fullpageApi);
      const navTog = () => {
        const nav = document.querySelector('#navi-toggle');
        nav.checked = !nav.checked;
      }
      return (
        <ReactFullpage.Wrapper>
          <div class="navigation">
              <input type="checkbox" id="navi-toggle" class="navigation__checkbox" />
              <label for="navi-toggle" class="navigation__button">
                  <span class="navigation__icon">

                  </span>
              </label>
              <div class="navigation__background">&nbsp;</div>
              <nav class="navigation__nav">
                  <ul class="navigation__list">
                      <li class="navigation__item"><a href="#about" class="navigation__link" onClick={navTog}><span>01</span>About Natours</a></li>
                      <li class="navigation__item"><a href="#features" class="navigation__link" onClick={navTog}><span>02</span>Your benifits</a></li>
                      <li class="navigation__item"><a href="#tours" class="navigation__link" onClick={navTog}><span>03</span>Popular tours</a></li>
                      <li class="navigation__item"><a href="#stories" class="navigation__link" onClick={navTog}><span>04</span>Stories</a></li>
                      <li class="navigation__item"><a href="#book" class="navigation__link" onClick={navTog}><span>05</span>Book now</a></li>
                  </ul>
              </nav>
          </div>
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
