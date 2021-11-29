import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from 'react-redux'


// console.log(Provider)
ReactDOM.render(
    <Provider store={store}> 
    <Router>
      <App />
    </Router>
    </Provider>
  ,
  document.getElementById('root')
);

