import React, { Component } from "react";

import "../ricktrade.css";
import logo from "../../images/logo.png";
import chat from "../../images/chat.png";
import Shape from "../../images/Shape.png";
import gcaptcha from "../../images/g-captcha.png";

import ReCAPTCHA from "react-google-recaptcha";
import { TEST_SITE_KEY } from "../../app.constant";

import { Base_Url } from "../../app.constant";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import { connect } from "react-redux";

const DELAY = 1500;

let rerenders = 0;

class SignupTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRerender: rerenders,
      callback: "not fired",
      value: "",
      load: false,
      expired: "false",
      success: true,
      checkBox: false
    };
    this._reCaptchaRef = React.createRef();
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }
  //this
  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };

  handleExpired = () => {
    this.setState({ expired: "true" });
  };

  handleExpired2 = () => {
    this.setState({ expired2: "true" });
  };
  //this
  handleChange5 = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
  };
  handleChange1 = () => {
    this.setState({
      condition: !this.state.condition
    });
  };
  handleChange2 = () => {
    this.setState({
      agreement: !this.state.agreement
    });
  };
  onClick = event => {
    event.preventDefault();
    console.log("value is ", this.props.userReducer.signupData);
    if (this.state.value.length === 0) {
      Swal.fire({
        type: "error",
        text: "Please fill the Captcha"
      });
      return;
    }
    if (this.state.checkBox === false) {
      Swal.fire({
        type: "error",
        text: "Please! Agree with Terms and Condition to Continue"
      });
      return;
    }
    let data = this.props.userReducer.signupData;
    if (data === null) {
      Swal.fire({
        type: "error",
        text: "Connection Lost!! Please Fill the SignUp Form Again"
      });
      this.props.history.push("/Signup");

      return;
    }
    $(".loading-container").fadeIn();
    axios({
      method: "POST",
      url: `${Base_Url}/user/register`,
      data: data
    })
      .then(response => {
        $(".loading-container").fadeOut();
        console.log(response);
        Swal.fire({
          type: "success",
          text:
            "Please Verify! as an email sent to your id and then Login to Continue"
        });
        this.props.history.push("/SignIn");
      })
      .catch(error => {
        $(".loading-container").fadeOut();
        if (error.response.status === 406 || error.response.status === 404) {
          if (error.response.status === 406) {
            Swal.fire({
              type: "warning",
              text: "Email is Already Registered"
            });
          } else
            Swal.fire({
              type: "error",
              text: error.response.data.message
            });
        } else {
          Swal.fire({
            type: "error",
            text: "Server Error!!!, Please Try After Sometime."
          });
        }
      });
  };

  render() {
    console.log("captcha is ", this.state);
    return (
      <>
        <div className="container-fluid m-0 p-0">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 terms-bg-image">
              <div className="txt-over">
                <span>
                  <img src={Shape} alt="qoute" className="img-fluid" />
                </span>
                <p>
                  Being a job holder I look for investment options for my
                  savings and Bricktrade was the answer to my needs.
                </p>
              </div>
              {/* <div className="comment-box">
                <Link to="#">
                  <img src={chat} alt="icon" />
                </Link>
              </div> */}
            </div>
            <div className="col-lg-6 m-top-58">
              <div className="left-panel">
                <div className="head-logo mb-0">
                  <img src="images/main-logo.png" alt="logo" className="img-fluid" />
                </div>
                <div className="">
                  <form action="face-recognition1.html">
                    <div className="sign-up-terms">
                      <h2>Sign Up Now</h2>
                      <div className="terms-txt mt-3">
                        <p>
                          I accept the Terms and Conditions and have reviewed
                          the Risk Warnings.
                        </p>
                        <p>
                          By checking this box, you agree to receive our email
                          newsletter and the latest news from Bricktrade. We
                          will never share your information with any third
                          parties. An overview of how Bricktrade collects
                          personal data, the kind of data it collects, its
                          purpose for doing so, and the people to whom it
                          discloses data, in addition to other policies not
                          limited to direct marketing, access and correction, as
                          well as user consent.For more information, please
                          refer to our latest privacy policy
                        </p>
                      </div>

                      <div className="signup-checkbox mb-3">
                        <label className="check_container">
                          I agree to the Bricktrade User Agreement, Privacy
                          Policy, Cookie Policy and E-Sign Consent.
                          <input
                            type="checkbox"
                            onClick={() => {
                              this.setState({ checkBox: !this.state.checkBox });
                            }}
                          />
                          <span className="checkmark mt-1"></span>
                        </label>
                      </div>
                      <div className="g-recaptcha">
                        <ReCAPTCHA
                          style={{ display: "inline-block" }}
                          theme="light"
                          ref={this._reCaptchaRef}
                          sitekey={TEST_SITE_KEY}
                          onChange={this.handleChange5}
                          asyncScriptOnLoad={this.asyncScriptOnLoad}
                        />
                      </div>
                      <p>
                        <div className="continue-button" onClick={this.onClick}>
                        CONTINUE{" "}
                        </div>
                      </p>
                    </div>
                  </form>
                </div>

                <div className="at-bottom">
                  <div className="bottom-menu text-left">
                    {/* <ul className="p-0">
                      <li>
                        <Link to="#">Help</Link>
                      </li>
                      <li>
                        <Link to="#">Support</Link>
                      </li>
                      <li>
                        <Link to="#">Contact</Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SignupTerm);
