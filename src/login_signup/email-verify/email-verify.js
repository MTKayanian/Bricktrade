import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "../ricktrade.css";
import logo from '../../images/logo.png'
import chat from '../../images/chat.png'
import Shape from '../../images/Shape.png'
import gcaptcha from '../../images/g-captcha.png'

class Emailverify extends Component {

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 verification-email-bg-image">
                            <div className="comment-box">
                                <Link to="#"><img src={chat} alt="icon"/></Link>
                            </div>
                        </div>
                        <div className="col-md-6 m-top-58">
                            <div className="left-panel">
                                <div className="head-logo mb-0"><img src={logo} alt="logo" className="img-fluid"/></div>
                                <div className="mid-sect">
                                    <h2>Verification email sent!</h2>
                                    <p>Don't recive an email from us? <span>Contact Us</span><br/> Email confirmation
                                        helps us to ensure your data will always be safe.</p>
                                    <div className="reg-btn">
                                        <Link to="signin.html" className="access-btn mr-3">SIGN IN</Link>
                                        <Link to="#" className="access-btn">Invite Colleagues</Link>
                                    </div>

                                </div>

                                <div className="at-bottom">
                                    <div className="bottom-menu text-left">
                                        <ul className="p-0">
                                            <li><Link to="#">Help</Link></li>
                                            <li><Link to="#">Support</Link></li>
                                            <li><Link to="#">Contact</Link></li>
                                        </ul>
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

export default Emailverify;
