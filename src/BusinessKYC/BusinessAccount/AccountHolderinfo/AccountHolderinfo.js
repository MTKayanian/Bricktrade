import React, { Component } from 'react';
import "./AccountHolderinfo.css";
import  KYCsidebar from "../../KYCsidebar/KYCsidebar"


import { Link } from 'react-router-dom';





class BusinessInfo extends  Component{

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
                                            <li><Link to="#/" id="breadcrumbs-text">Get Started</Link></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <KYCsidebar step= {this.state.step} />
                            <div className="col-lg-7" id="third">
                                <div className="profile-section business-acc">
                                    <div className="">
                                        <form>

                                                <div className="col-lg-12 p-0">
                                                    <h3 className="head-main pb-2">Stakeholder</h3>
                                                    <p className="fs-14 mb-3 lh-22">Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                        officia deserunt mollit anim id est laborum.</p>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="First Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Last Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="fancyInput pb-32">
                                                                <select className="m-0">
                                                                    <option>Nationality</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Owner Percentage"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="fancyInput pb-32">
                                                                <select className="m-0">
                                                                    <option>Country</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Date of Birth"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Zipcode"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Country"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Town/City"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btnLightBlue pb-32 center-text inline_btn">
                                                        <Link to="/BusinessSolutionTab" className="btn success-btn">CONTINUE</Link>
                                                        <Link to="#/" className="link pl-32">ADD ANOTHER
                                                        OWNER</Link>
                                                    </div>
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

export default BusinessInfo;
