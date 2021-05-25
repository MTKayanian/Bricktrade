import React, {Component} from 'react';
import "./BusinessPaymentTab.css";


import {Link} from 'react-router-dom';
import thick_check from '../../../images/thick-check.png';
import warning from '../../../images/warning.png';

import BankPopup from "./BankPopup";


class BusinessPaymentTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            docActive: "Payment",
            bankpopUp: false,
        };
      
        this.tabfunction = this.tabfunction.bind(this);
        this.addBankDetailpopUp = this.addBankDetailpopUp.bind(this);
        

    }

    tabfunction = (event) => {
    
        this.setState({docActive: event.currentTarget.className});
        console.log(this.state.docActive);
    }

    addBankDetailpopUp = (event) => {console.log('here');
    
        this.setState({bankpopUp: !this.state.bankpopUp });
    }


    render() {


        

        return (
            <>
                <div className="light_bg">
                    <div className="col-lg-7 col-md-7 mb-4 left-margin">
                         <div className="dashboard-main">
                            <div>
                                <ol className="breadcrumbs p-0">
                                    <li className="active-link"><Link to="#">KYC Business</Link></li>
                                    <li><Link to="#" id="breadcrumbs-text">Get Started</Link></li>
                                </ol>
                            </div>
                        </div>
                            
                        
                        <div className="profile-section acc-holder mb-4">
                            <div className="">
                                <div className="tab">
                                    <ul className="nav">
                                        <li className="item-nav">
                                             <Link to="#"className={"nav-link pannel " + (this.state.docActive === 'Payment' ? 'active' : '')}><span
                                                                onClick={this.tabfunction}
                                                                className="Payment">Payment</span></Link>
                                        </li>
                                        <li className="item-nav">
                                               <Link to="#"className={"nav-link pannel " + (this.state.docActive === 'accountsetup' ? 'active' : '')}><span
                                                                onClick={this.tabfunction}
                                                                className="accountsetup">Account SETUP</span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="border2"></div>
                                <div  className={"pannelcontent " + (this.state.docActive === 'payment' ? '' : 'd-none')} id="payment">
                                </div>
                                <div  className={"pannelcontent " + (this.state.docActive === 'accountsetup' ? '' : 'd-none')} id="accountsetup">
                                    <div>
                                        <div className="d-flex width-2080 align-items-center pt-32" id="step1">
                                            <div className="clearfix w-75 position-relative pb-3">
                                                <div className="float-left w-10">
                                                    <span className="first-step green-back"></span>
                                                    <span className="email-step">
												<img src={thick_check} />
											</span>
                                                </div>
                                                <div className="float-left w-90">
                                                    <span className="head-main">Email Address</span>
                                                    <p className="lh-22 fs-14 m-0 pt-2">You have confirmed your email address</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border3"></div>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center pt-32" id="step1">
                                            <div
                                                className="clearfix width-2080 w-75 position-relative pb-3 w-75 d-inline-block">
                                                <div className="float-left w-10">
                                                    <span className="first-step"></span>
                                                    <span className="email-step left-6">
												<img src={warning} />
											</span>
                                                </div>
                                                <div className="float-left w-90">
                                                    <span className="head-main">Bank Account</span>
                                                    <p className="lh-22 fs-14 m-0 pt-2">You have yet to add your bank account</p>
                                                </div>
                                            </div>
                                            <div className="w-25 d-inline-block text-right">
                                                <button className="m-0 modal-link model-button" data-toggle="modal" data-target="myModal" onClick={this.addBankDetailpopUp}>ADD <i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                        <div className="border3"></div>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center pt-32" id="step1">
                                            <div
                                                className="width-2080 clearfix position-relative pb-3 w-75 d-inline-block">
                                                <div className="float-left w-10">
                                                    <span className="first-step"></span>
                                                    <span className="email-step left-6">
												<img src={warning} />
											</span>
                                                </div>
                                                <div className="float-left w-90">
                                                    <span className="head-main">Business Name</span>
                                                    <p className="lh-22 fs-14 m-0 pt-2">Make your business name more
                                                        clear to customers</p>
                                                </div>
                                            </div>
                                            <div className="w-25 d-inline-block text-right">
                                                <Link href="#" className="m-0 modal-link" data-toggle="modal"
                                                   data-target="myModal1">EDIT <i className="fa fa-angle-right"
                                                                                  aria-hidden="true"></i></Link>
                                            </div>
                                        </div>
                                        <div className="border3"></div>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center pt-32" id="step1">
                                            <div
                                                className="width-2080 clearfix position-relative pb-3 w-75 d-inline-block">
                                                <div className="float-left w-10">
                                                    <span className="first-step"></span>
                                                    <span className="email-step left-6">
												<img src={warning}/>
											</span>
                                                </div>
                                                <div className="float-left w-90">
                                                    <span
                                                        className="head-main">Lift limits &#38; move funds easily</span>
                                                    <p className="lh-22 fs-14 m-0 pt-2">Make sure you set limits off for
                                                        you to transfer funds easily</p>
                                                </div>
                                            </div>
                                            <div className="w-25 d-inline-block text-right">
                                                <Link href="#" className="m-0 modal-link">EDIT <i
                                                    className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                            </div>
                                        </div>
                                        <div className="border3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            

                { this.state.bankpopUp
                    ? <BankPopup open={this.state.bankpopUp} />
                    : ''
                }

            </>

        )
    }

}

export default BusinessPaymentTab;
