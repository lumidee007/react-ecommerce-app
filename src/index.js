import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor} from './redux/store'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'


// console.log(Provider)
ReactDOM.render(
    <Provider store={store}> 
      <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  ,
  document.getElementById('root')
);

