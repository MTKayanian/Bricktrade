import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './app.store';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import App from './App';
// import { checkServerIdentity } from 'tls';
// import './check';
import GA4React from "ga-4-react";
const ga4react = new GA4React("G-DYVKPMJNY9");


(async _ => {
  await ga4react.initialize();

  // ga4react.push(["_set", "title", "Your Brand New Page Title"]);
  // ga4react.push(["_trackPageview"]); //will send with the overridden page title


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={configureStore()}>< App /></Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();


//ReactDOM.render(  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




