import React, { Component } from 'react';
import "./Individual_sidebar.css";
import { Link } from 'react-router-dom';
import number1 from '../../images/number1.png'
import thick_check from '../../images/thick-check.png'
import refresh from '../../images/refresh.png'
import share from '../../images/share.png'
import up_arow from '../../images/up-arow.png'
import inbox from '../../images/inbox.png'
import notificaion from '../../images/notificaion.png'
import user_img from '../../images/user-img.png'
import dropdown from '../../images/dropdown.png'




class Individual_sidebar extends  Component{

   constructor(props) {
      super(props);
      this.state = {
         step: this.props.step, 
      };
      console.log(this.props);
  }


  render(){
     return(
        <>
            <div className="col-lg-3 col-md-3 mb-4">
                <div className="profile-section business-main">
                    <div className={" d-flex align-items-center pb-40 " + (this.state.step === 'second-phase' ? "current_side" : "") + (this.state.step >= 1 ? "is-complete" : "") } id="step1">
                    
                        <div className="clearfix w-100 position-relative">
                            <div className="d-flex align-items-center w-20">
                                <span className="first-step blue-back">1
                                </span>
                                 <span className="first-step greenbg">
                                       <i className="fa fa-check  white" aria-hidden="true"></i>
                                 </span>
                                <span className="acc-head">Get Started</span>
                            </div>
                        </div>
                    </div>
                    <div className={" d-flex align-items-center pb-40 " + (this.state.step === 2 ? "current_side" : "") + (this.state.step >= 2 ? "is-complete" : "") } id="step2">
                        <div className="clearfix w-100 position-relative">
                            <div className="w-20 align-items-center d-flex">
                                <span className={`first-step ${this.state.step === 2 ? "gray-blue" : "gray-back"}`}>2</span>
                                <span className="first-step greenbg">
                                       <i className="fa fa-check  white" aria-hidden="true"></i>
                                 </span>
                                <span className="acc-head d-inline-block">Business Information</span>
                            </div>
                        </div>
                    </div>
                    <div className={" d-flex align-items-center pb-40 " + (this.state.step === 3 ? "current_side" : "") + (this.state.step >= 3 ? "is-complete" : "") } id="step3">
                    
                        <div className="clearfix w-100 position-relative">
                            <div className="d-flex align-items-center w-20">
                                <span className={`first-step ${this.state.step === 3 ? "gray-blue" : "gray-back"}`}>3</span>
                                <span className="acc-head d-inline-block">Account Holder  Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

     )
  }

}

export default Individual_sidebar;
