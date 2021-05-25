import React, {Component} from 'react';
import "./Business_KYC_Pending.css";
import {Link} from 'react-router-dom';

import positive_vote from "../../images/positive-vote-red.png"

class Business_KYC_Pending extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }


    render() {
        return (
            <>
                <div className="light_bg">
                    <div className="row m-0">
                        <div className="col-md-10 col-lg-10 mb-5 mar-pos">
                             <div className="d-flex align-items-center flex-wrap">
                                 <div className="col-md-4 mb-3 text-right">
                                     <img className="postive-icon" src={positive_vote} alt="positive_vote" />
                                 </div>
                                 <div className="col-md-6 mb-3">
                                     <div className="business_kyc_pending">
                                         <p>Your Business KYC is Completed</p>
                                         <div className="btnLightBlue inline_btn">
                                             <Link to="/#" className="btn">START YOUR COMPANY KYC</Link>
                                             <Link to="/Business_profile_overview"className="bus_link" >Go  to business profile</Link>
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

export default Business_KYC_Pending;
