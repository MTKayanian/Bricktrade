import React, { Component } from 'react';
import "./IncomeassetsTab2.css";
import  Incomesidebar from "../../KYCsidebar/Incomesidebar"


import { Link } from 'react-router-dom';





class IncomeassetsTab2 extends  Component{

   constructor(props) {
      super(props);
      this.state = {
           step:3 
      };
      console.log(this.state.step3)
  }



  render(){
     return(
        <>
            <div className="light_bg">
                <div className="row m-0">
                    <div className="col-lg-11 col-md-11 mb-4 left-margin">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="dashboard-main">
                                    <div>
                                        <ol className="breadcrumbs p-0">
                                            <li className="active-link"><Link to="#/">KYC Business</Link></li>
                                            <li><Link to="#/" id="breadcrumbs-text">Income & Assets</Link></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Incomesidebar step= {this.state.step} />
                            <div className="col-lg-7" id="third">
                            <div className="profile-section business-acc">
			  				<div className="pb-2">
			  					<h3 className="head-main pb-2">Thank you provinding the required information.</h3>
			  					<p className="fs-14 m-0 lh-22">We’ll get back to you wthin few working days</p>
			  				</div>
			  				<div className="pt-3">
			  					<form>
   									<div className="btnLightBlue pt-3">
										<input type="button" name="submit" value="GO TO ACCOUNT OVERVIEW" id="sub1" class="btn success-btn w-50 white-space" onclick="next();"/>
									</div>
			  					</form>
			  				</div>
			  			</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

     )
  }

}

export default IncomeassetsTab2;
