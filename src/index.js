import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {isMobile, isTablet} from 'react-device-detect'


if(isMobile || isTablet){
    window.location.replace("https://sayeedafridi.github.io/natours-design")
}else{
    ReactDOM.render(<App />, document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
