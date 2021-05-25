import React, {Component} from 'react';
import "./BusinessSolutionTab.css";


import {Link} from 'react-router-dom';

import whiteClose from '../../../images/white-close.png';
import lock from '../../../images/lock.png';
import secure from '../../../images/secure.png';
import hand from '../../../images/hand.png';


class BusinessSolutionTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            docActive: "solution"
        };
      
        this.tabfunction = this.tabfunction.bind(this);
        

    }
    tabfunction = (event) => {
    
        this.setState({docActive: event.currentTarget.className});
        console.log(this.state.docActive);
    }

    render() {
        return (
            <>
            <div className="light_bg">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="dashboard-main">
                                    <div>
                                        <ol className="breadcrumbs p-0">
                                            <li className="active-link"><Link to="#">KYC Business</Link></li>
                                            <li><Link to="#" id="breadcrumbs-text">Get Started</Link></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-section acc-holder mb-5">
                        <div className="">
                            <div className="tab">
                                <ul className="nav center-md">
                                    <li className="item-nav">
                                        <Link to="#"className={"nav-link pannel " + (this.state.docActive === 'solution' ? 'active' : '')}><span
                                                                onClick={this.tabfunction}
                                                                className="solution">SOLUTIONS</span></Link>
                                    </li>
                                    <li className="item-nav">
                                      <Link to="#"className={"nav-link pannel " + (this.state.docActive === 'accountsetup' ? 'active' : '')}><span
                                                                onClick={this.tabfunction}
                                                                className="accountsetup">ACCOUNT SETUP</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="border2"></div>
                            <div  className={"pannelcontent " + (this.state.docActive === 'solution' ? '' : 'd-none')} id="solution">
                                <div className="pt-32 center-md">
                                    <h3 className="head-main mb-2">WHAT WE OFFER&#63;</h3>
                                    <p className="mb-4  lh-22">A complete front-to-back office solution purpose-built for institutions to access the crypto-asset markets.</p>

                                    <p className="m-0  lh-22">Automate your way through Multisig wallets creation process, issuing, storing,  transferring digital assets securely.
                                    Bricktrade is purpose-built from the ground-up to specifically handle crypto-asset workflows. Our platform provides the portfolio and risk management from a  single view tire-1 banking dashboard by providing a turn-key compliance solutions institutions need to thrive in the digital asset markets. Suitable for your entire digital assets management and  business development team.</p>
                                </div>
                                <div className="pt-32 pb-140 center-md">
                                    <h3 className="head-main mb-2">WHAT WE SERVE&#63;</h3>
                                    <p className="mb-4  lh-22">Built for entrepreneurs, brokers, and financial institutions. BrickTrade helps you and your teams.</p>
                                </div>
                            </div>
                            <div  className={"pannelcontent " + (this.state.docActive === 'accountsetup' ? '' : 'd-none')} id="accountsetup">
                                <div className="pt-32 pb-200 center-md">
                                    <h3 className="head-main mb-2">WHAT WE SERVE&#63;</h3>
                                    <p className="mb-4 fs-14 lh-22">Built for entrepreneurs, brokers, and financial
                                        institutions. BrickTrade helps you and your teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-4 col-md-4 p-0">
                        <div id="mysideModal" className="modalright">
                            <div className="sidebarmodal text-center h-100">
                                 <span className="close text-right"><img src={whiteClose} alt="icon"/></span> 
                                <div className="pt-40">
                                    <div className="">	
                                        <div className="imageWrap">
                                            <img src={lock} alt="icon"/>
                                        </div>
                                        <p className="m-0 text-white pt-4">Trusted and secure web dashboard environment access from anywhere, anytime, any device.</p>
                                    </div>
                                    <div className="pt-40">	
                                        <div className="imageWrap">
                                            <img src={secure} alt="icon"/>
                                        </div>
                                        <p className="m-0 text-white pt-4 w-75 mx-auto">Safe and secure hot/cold/vault multi-signature wallets</p>
                                    </div>
                                    <div className="pt-40">	
                                        <div className="imageWrap">
                                            <img src={hand} alt="icon"/>
                                        </div>
                                        <p className="m-0 text-white pt-4 w-75 mx-auto">The global standard for modern digital assets Issuing</p>
                                    </div>
                                    <div className="btnLightBlue pt-32">
                                        <Link to="/BusinessPaymentTab" className="btn success-btn w-50 md-w-100 focus">CONTINUE</Link>
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

export default BusinessSolutionTab;
