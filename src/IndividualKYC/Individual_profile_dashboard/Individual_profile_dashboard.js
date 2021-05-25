import React, { Component } from 'react';
import "./Individual_profile_dashboard.css";


import IndividualProfileTab from '../Individual_Profile_tab/Individual_Profile_tab'




class Individual_profile_dashboard extends  Component{
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
                   <IndividualProfileTab />
               </div>
           </div>
        </>

     )
  }

}

export default Individual_profile_dashboard;
