import React from 'react';
import Sidebar from '../header-sidebar/Sidebar/Sidebar';
import Header from '../header-sidebar/Header/Header';

export function withFunctions(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebar: false
      };
    }

    onSidebar = () => {
      console.log("sidebar***********");
      this.setState({ sidebar: !this.state.sidebar });
    };

    render() {
      return (
        <>
          <Header onSidebar={this.onSidebar} />
          <Sidebar sidebar={this.state.sidebar} />
          <WrappedComponent />
        </>
      );
    }
  };
}
