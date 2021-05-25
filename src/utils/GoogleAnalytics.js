// utils/GoogleAnalytics.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';
import GA4React, { useGA4React } from 'ga-4-react';

class GoogleAnalytics extends Component {
  componentDidMount() {
    this.logPageChange(
      this.props.location.pathname,
      this.props.location.search
    );
  }

  componentDidUpdate({ location: prevLocation }) {
    const {
      location: { pathname, search },
    } = this.props;
    const isDifferentPathname = pathname !== prevLocation.pathname;
    const isDifferentSearch = search !== prevLocation.search;

    if (isDifferentPathname || isDifferentSearch) {
      this.logPageChange(pathname, search);
    }
  }

  logPageChange(pathname, search = '') {
    const page = pathname + search;
    const { location } = window;
    // ReactGA.set({
    //     page,
    //     location: `${location.origin}${page}`,
    //     ...this.props.options
    // });

    var pathArray = pathname.split('/');
    var secondLevelLocation = pathArray[1];
    if (secondLevelLocation == '') {
      secondLevelLocation = 'Home';
    }

    const ga4react = new GA4React('G-DYVKPMJNY9');

    ga4react.initialize().then(
      (ga4) => {
        ga4.pageview('brick trade - ' + secondLevelLocation);

        ga4.gtag('event', 'pageview', 'path'); // or your custom gtag event

        // ga4.push(function(){
        //     var oldtitle = document.title;
        //     document.title = "More Descriptive Title";
        //     ga4.push(["_trackPageview"]);
        //     document.title = oldtitle;
        // });

        // ga4.push(["_set", "title", "Your Brand New Page Title"]);
        // ga4.push(["_trackPageview"]); //will send with the overridden page title
      },
      (err) => {
        console.error(err);
      }
    );

    // ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  options: PropTypes.object,
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options = {}) => {
  const isGAEnabled = process.env.NODE_ENV === 'production';

  // const ga4react = new GA4React("G-271333380");

  // if (true) {
  //     ga4react.initialize("G-271333380");
  // }

  return true;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init,
};
