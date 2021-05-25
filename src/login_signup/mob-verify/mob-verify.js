import React, {Component} from 'react';
import "../ricktrade.css";
import logo from '../../images/logo.png'
import chat from '../../images/chat.png'
import Shape from '../../images/Shape.png'
import {Link} from 'react-router-dom';

class Mobverify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp1: "",
            otp2: "",
            otp3: "",
            otp4: "",
            otp5: "",
            otp6: "",
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => {
                if (this.state.otp6 !== "") {
                    // this.handleVerify();
                }
            }
        );
    }
    // handleKeyUp(e) {
    //     if (e.keyCode === 8) {
    //         $(e.target)
    //             .prev()
    //             .focus();
    //         $(e.target)
    //             .prev()
    //             .select();
    //     }
    //     this.setState(
    //         {
    //             [e.target.name]: e.target.value
    //         },
    //         () => {
    //             if (this.state.otp6 !== "") {
    //                 // this.handleVerify();
    //             }
    //         }
    //     );
    // }

    handleVerify = (event) =>{
        event.preventDefault();
    }

    render() {
        const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.state;
        return (
            <>
                <div className="container-fluid gray-bg ">
                    <div className="row flex-row-reverse bg-height">
                        <div className="col-lg-4 v-sent-bg-image">
                            <div className="comment-box">
                                <Link to="#"><img src={chat} alt="icon"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 m-top-58">
                            <div className="left-panel">
                                <div className="head-logo mb-0"><img src={logo} alt="logo" className="img-fluid"/></div>
                                <div className="mid-sect">
                                <h2>Mobile number Verification</h2>
								<p>OTP verification code has been sent to your provide mobile number +44******0074</p>
                                    <form onSubmit={this.handleVerify} method="post" className="m-verification-form">
                                        <ul>
                                            <li>
                                                <input
                                                    type="text"
                                                    className="verification-popup-input"
                                                    maxLength="1"
                                                    name="otp1"
                                                    value={otp1}
                                                    onChange={this.handleChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    onKeyUp={this.handleKeyUp}
                                                />
                                            </li>
                                            <li>
                                                <input
                                                    type="text"
                                                    className="verification-popup-input"
                                                    maxLength="1"
                                                    name="otp2"
                                                    value={otp2}
                                                    onChange={this.handleChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    onKeyUp={this.handleKeyUp}
                                                />
                                            </li>
                                            <li>
                                                <input
                                                    type="text"
                                                    className="verification-popup-input mb-sm-2"
                                                    maxLength="1"
                                                    name="otp3"
                                                    value={otp3}
                                                    onChange={this.handleChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    onKeyUp={this.handleKeyUp}
                                                />
                                            </li>
                                            <li>
                                                <input
                                                    type="text"
                                                    className="verification-popup-input mb-lg-0 mb-2"
                                                    maxLength="1"
                                                    name="otp4"
                                                    value={otp4}
                                                    onChange={this.handleChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    onKeyUp={this.handleKeyUp}
                                                />
                                            </li>
                                            <li>
                                                <input
                                                    type="text"
                                                    className="verification-popup-input"
                                                    maxLength="1"
                                                    name="otp5"
                                                    value={otp5}
                                                    onChange={this.handleChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    onKeyUp={this.handleKeyUp}
                                                />
                                            </li>
                                            <li>
                                                <input
                                                    type="text"
                                                    className="verification-popup-input"
                                                    maxLength="1"
                                                    name="otp6"
                                                    value={otp6}
                                                    onChange={this.handleChange}
                                                    onKeyUp={this.handleKeyUp}
                                                    onKeyPress={this.handleKeyPress}
                                                />
                                            </li>
                                        </ul>
                                        <button type="button" className="access-btn blue-bg"><Link to="/SignIn">SUBMIT
                                            CODE</Link></button>
                                        <p className="mt-4">Don't receive an email from us?<span className="ml-4">
                                           <Link to="#">RESEND CODE</Link></span></p>
                                    </form>
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

export default Mobverify;
