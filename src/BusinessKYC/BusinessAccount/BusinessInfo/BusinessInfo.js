import React, { Component } from 'react';
import "./BusinessInfo.css";
import  KYCsidebar from "../../KYCsidebar/KYCsidebar"


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






class BusinessInfo extends  Component{

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
                                            <li><Link href="#" id="breadcrumbs-text">Get Started</Link></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <KYCsidebar step={this.state.step}/>
                            <div className="col-lg-7" id="second">
                                <div className="profile-section business-acc">
                                    <div className="">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-11">
                                                    <h3 className="head-main pb-2">Tell us about your business</h3>
                                                    <p className="fs-14 mb-3">Name, please complete the following information about
                                                        your business</p>
                                                    <div className="fancyInput mb-2">
                                                        <select>
                                                            <option>Business Type</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                    <div className="fancyInput mb-2">
                                                        <select>
                                                            <option>Business Category</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                    <div className="fancyInput mb-2">
                                                        <input type="text" name="" />
                                                    </div>
                                                    <div className="fancyInput pb-32">
                                                        <select className="m-0">
                                                            <option>Country</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                    <div className="btnLightBlue pb-140 inline_btn button-cont">
                                                        <Link to="/AccountHolderinfo" className="btn success-btn">CONTINUE</Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 d-none" id="third">
                                <div className="profile-section business-acc">
                                    <div className="">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h3 className="head-main pb-2">Stakeholder</h3>
                                                    <p className="fs-14 mb-3 lh-22">Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                        officia deserunt mollit anim id est laborum.</p>
                                                    <div className="row">
                                                        <div className="col-lg-6 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="First Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Last Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 pl-0">
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
                                                        <div className="col-lg-6 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Owner Percentage"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 pl-0">
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
                                                        <div className="col-lg-6 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Date of Birth"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Zipcode"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Country"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 pl-0">
                                                            <div className="fancyInput mb-2">
                                                                <input type="text" name="" placeholder="Town/City"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btnLightBlue pb-32 center-text">
                                                        <Link to="#/" className="link pl-32">ADD ANOTHER OWNER</Link>
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

export default BusinessInfo;
