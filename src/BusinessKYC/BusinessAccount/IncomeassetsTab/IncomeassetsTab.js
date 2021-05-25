import React, { Component } from 'react';
import "./IncomeassetsTab.css";
import  Incomesidebar from "../../KYCsidebar/Incomesidebar"


import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.png'
import search_icon from '../../../images/search-icon.png'
import refresh from '../../../images/refresh.png'
import share from '../../../images/share.png'
import up_arow from '../../../images/up-arow.png'
import inbox from '../../../images/inbox.png'
import notificaion from '../../../images/notificaion.png'
import user_img from '../../../images/user-img.png'
import dropdown from '../../../images/dropdown.png'






class IncomeassetsTab extends  Component{

   constructor(props) {
      super(props);
      this.state = {
        step:2
      };

      console.log(this.state.step);
  }

  render(){
     return(
        <>
            <div className="container-fluid light_bg">
                <div className="row">
                    <div className="col-lg-11 col-md-11 mb-4 left-margin">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="dashboard-main">
                                    <div>
                                        <ol className="breadcrumbs p-0">
                                            <li className="active-link"><Link href="#">KYC Business</Link></li>
                                            <li><Link href="#" id="breadcrumbs-text">Income & Assets</Link></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Incomesidebar step={this.state.step}/>
                            <div className="col-lg-7" id="second">
                                <div className="profile-section business-acc">
                                    <div className="">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-11">
                                                <div className="heading">
                                                    <h3 className="head-main">Certify and submit information for ABC</h3>
                                                </div>
                                                <div className="pt-3">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <p className="fs-14 mb-4 lh-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                                <p className="fs-14 mb-4 lh-22">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                                <p className="fs-14 mb-4 lh-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                                <p className="fs-14 mb-4 lh-22">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                                                </div>
                                                                
                                                                {/* <div className="btnLightBlue pt-3">
                                                                    <input  type="button" name="submit" value="NEXT" id="sub1" class="btn success-btn" onclick="next();"/>
                                                                </div> */}
                                                                <div className="btnLightBlue inline_btn button-text">
                                                                    <Link to="/IncomeassetsTab2" className="btn success-btn next-button">NEXT</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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

export default IncomeassetsTab;
