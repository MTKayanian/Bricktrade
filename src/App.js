import React from 'react';
import './App.css';
import Routes from './routes';
import { Helmet } from 'react-helmet';

function App() {
	var pathArray = window.location.pathname.split('/');
	var secondLevelLocation = pathArray[1];
	if(secondLevelLocation == '')
	{
		secondLevelLocation = 'Home'
	}
	console.log('secondLevelLocation', secondLevelLocation, pathArray);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`brick trade - ${secondLevelLocation}`}</title>
        <link rel="canonical" />
      </Helmet>

      <Routes />
    </div>
  );
}

// #f4f8fc
export default App;
