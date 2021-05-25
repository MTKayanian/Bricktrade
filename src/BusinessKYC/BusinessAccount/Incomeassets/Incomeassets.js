import React, { Component } from 'react';
import "./Incomeassets.css";
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






class Incomeassets extends  Component{

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
                            <div className="col-lg-7" id="first">
                                <div className="profile-section business-acc">
                                    <div className="">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-11">
                                                   <h3 className="head-main pb-2">Tell us about income and assets</h3>
                                                </div>
                                                <div className="pb-32">
                                                    <form>
                                                        <div className="row m-0">
                                                            <div className="col-lg-12">
                                                                <p className="fs-14 mb-4 lh-22">To comply with international tax law, we’re required to ask our customers  specific questons about their organisatios. <a href="#">LEARN MORE</a> </p>
                    
                                                                <p className="fs-14 m-0 lh-22">In 2018, did your organisation earn 50&#37; or more of its gross income from dividends intrest, rents, royalties or similar sources&#63; </p>
                                                            </div>
                                                            <div className="col-lg-12 mt-32">
                                                                <label className="custom-radio">YES
                                                                    <input type="radio" name="radio"/>
                                                                    <span className="checkmark-radio "></span>
                                                                </label>
                                                                <label className="custom-radio">NO
                                                                    <input type="radio" name="radio" checked="checked"/>
                                                                    <span className="checkmark-radio"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="pt-3">
                                                    {/* <div className="btnLightBlue">
                                                        <input type="button" name="submit" value="NEXT" id="sub1" class="btn success-btn next-button" onclick="next();"/>
                                                    </div> */}
                                                    <div className="btnLightBlue inline_btn button-text">
                                                        <Link to="/IncomeassetsTab" className="btn success-btn next-button">NEXT</Link>
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

export default Incomeassets;
