import React, { Component } from 'react';
import "./Business_profile.css";

import BusinessProfileTab from '../Business_Profile_tab/Business_Profile_tab'




class Business_profile extends  Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
     return(
        <>
           <div className="light_bg_bp">
                <div className="row m-0">
                  <BusinessProfileTab />
               </div>
           </div>
        </>

     )
  }

}

export default Business_profile;
