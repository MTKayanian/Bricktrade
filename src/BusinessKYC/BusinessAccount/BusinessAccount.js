import React, { Component } from 'react';
import "./BusinessAccount.css";
import  KYCsidebar from "../KYCsidebar/KYCsidebar"


import { Link } from 'react-router-dom';





class BusinessAccount extends  Component{

   constructor(props) {
      super(props);
      this.state = {
        activeTab : 'first-phase',
        docActive : 'idcards',
        step:1
      };
      console.log(this.state.step)
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
                                            <li className="active-link"><a href="#">KYC Business</a></li>
                                            <li><a href="#" id="breadcrumbs-text">Get Started</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <KYCsidebar step = {this.state.step} />
                            <div className="col-lg-7" id="first">
                                <div className="profile-section business-acc">
                                    <div>
                                        <h3 className="head-main pb-2">Business account</h3>
                                    </div>
                                    <div className="pb-32">
                                        <form>
                                            <div className="row m-0">
                                                <div className="col-lg-11 p-0">
                                                    <p className="fs-14 mb-3">Name, please complete the following information about
                                                        your business</p>
                                                    <div className="fancyInput">
                                                        <input type="text" name="" placeholder="Company Name" className="m-0" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="pb-4">
                                        <p className="sub-head mb-1">Business phone</p>
                                        <p className="fs-14 mb-2">(+44) 012345 67546</p>
                                        <div className="edit-details"><a href="#">EDIT</a></div>
                                    </div>
                                    <div className="pb-32">
                                        <p className="sub-head mb-1">Business address</p>
                                        <p className="fs-14 mb-2">2 Hearbert Street, Newtown, NSW 2042  London, UK</p>
                                        <div className="edit-details"><a href="#">EDIT</a></div>
                                    </div>
                                    <div>
                                        <label className="check_container m-0">I have read, consent and agree to LC Net’s <a
                                            href="#">User Agreement</a> and <a href="#">Privacy Policy</a> (including the processing
                                            and disclosing of my personal data), and I am of legal age. Please read the Key Payment
                                            and Service Information.
                                            <input type="checkbox" id="termsChkbx " />
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="pt-3">
                                        <div className="btnLightBlue inline_btn button-text">
                                            <Link to="/BusinessInfo" className="btn success-btn">AGREE AND CONTINUE</Link>
                                        </div>
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

export default BusinessAccount;
