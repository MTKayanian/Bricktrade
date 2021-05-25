import React, { Component } from 'react';

import '../ricktrade.css';
import './email-code-verify.css';

import heroImg from '../../images/email_verify_bg.png';

import logo from '../../images/logo.png';
import chat from '../../images/chat.png';
import Shape from '../../images/Shape.png';

import { Link } from 'react-router-dom';
import { Base_Url } from '../../app.constant';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { getItem } from '../../utils/localStore';
import axios from 'axios';
import { connect } from 'react-redux';

class EmailcodeVerify extends Component {
  state = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    otp5: '',
    otp6: '',
  };
  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.otp6 !== '') {
          // this.handleVerify();
        }
      }
    );
  };
  handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      $(e.target).prev().focus();
      $(e.target).prev().select();
    }
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.otp6 !== '') {
          // this.handleVerify();
        }
      }
    );
  };
  handleKeyPress = (e) => {
    if (e.which >= 48 && e.which <= 57) {
      e.target.value = '';
      $(e.target).next().focus();
    } else {
      e.preventDefault();
    }
  };
  handleVerify = (event) => {
    event.preventDefault();
    $('.loading-container').fadeIn();
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.state;
    let OTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    let TOKEN = getItem('accessToken');
    console.log('i am the token ', TOKEN);
    console.log('i am otp ', OTP);
    axios({
      method: 'POST',
      url: `${Base_Url}/user/login/verifyOtp`,
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
      data: {
        otp: OTP,
      },
    })
      .then((response) => {
        console.log(response);
        $('.loading-container').fadeOut();
        console.log('success is here ', response);
        localStorage.setItem('verified', true);

        if (
          localStorage.getItem('adminRole') == 'ADMIN' &&
          localStorage.getItem('verified') == 'true'
        ) {
          this.props.history.push('/dashboardAdmin');
        } else {
          this.props.history.push('/DataSlider');
        }

        Swal.fire({
          type: 'success',
          text: 'Successfully! Login',
        });

        // this.props.userLoginAction(true);
      })
      .catch((error) => {
        console.log('error is here', error);
        $('.loading-container').fadeOut();
        if (error.response.status === 406 || error.response.status === 404) {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        }
      });
  };
  reSendCode = () => {
    let TOKEN = getItem('accessToken');
    axios({
      method: 'POST',
      url: `${Base_Url}/user/login/resendOtp`,
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
    })
      .then((response) => {
        console.log(response);
        $('.loading-container').fadeOut();
        console.log('success is here ', response);
        Swal.fire({
          type: 'success',
          text: 'Otp Resend Successfully',
        });
        // this.props.history.push('/DataSlider');
        // this.props.userLoginAction(true);
      })
      .catch((error) => {
        console.log('error is here', error);
        $('.loading-container').fadeOut();
        if (error.response.status === 406 || error.response.status === 404) {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        }
      });
  };
  render() {
    return (
      <>
        <div className="container-fluid gray-bg m-0 p-0 otp-screen">
          <div className="row flex-row-reverse gray-bg">
            <div className="col-lg-6 email-code-img m-0 p-0">
              <img
                src={heroImg}
                alt="heroImg"
                className="img-fluid otp-img"             
              />
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
                <div className="mt-5 pt-4 mb-0 pb-0">
                  <h2>Verification code sent!</h2>
                  <p>
                    Verification code has been sent to{' '}
                    {this.props.userReducer.details.email} . Email confirmation
                    helps us to ensure your data will always be safe. Enter the
                    code below to proceed.
                  </p>
                  <form
                    action="/DataSlider"
                    method="post"
                    className="m-verification-form"
                  >
                    <div className="d-lg-flex mx-auto">
                      <div className="mb-4 mb-lg-0">
                        <input
                          type="text"
                          className="verification-popup-input"
                          maxLength="1"
                          name="otp1"
                          value={this.state.otp1}
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress.bind(this)}
                          onKeyUp={this.handleKeyUp}
                        />
                        <input
                          type="text"
                          className="verification-popup-input"
                          maxLength="1"
                          name="otp2"
                          value={this.state.otp2}
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress.bind(this)}
                          onKeyUp={this.handleKeyUp}
                        />
                        <input
                          type="text"
                          className="verification-popup-input mb-sm-2"
                          maxLength="1"
                          name="otp3"
                          value={this.state.otp3}
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress.bind(this)}
                          onKeyUp={this.handleKeyUp}
                        />
                        <input
                          type="text"
                          className="verification-popup-input mb-lg-0 mb-2"
                          maxLength="1"
                          name="otp4"
                          value={this.state.otp4}
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress.bind(this)}
                          onKeyUp={this.handleKeyUp}
                        />
                        <input
                          type="text"
                          className="verification-popup-input"
                          maxLength="1"
                          name="otp5"
                          value={this.state.otp5}
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress.bind(this)}
                          onKeyUp={this.handleKeyUp}
                        />
                        <input
                          type="text"
                          className="verification-popup-input"
                          maxLength="1"
                          name="otp6"
                          value={this.state.otp6}
                          onChange={this.handleChange.bind(this)}
                          onKeyUp={this.handleKeyUp}
                          onKeyPress={this.handleKeyPress}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="access-btn dark-bg mt-2"
                      onClick={this.handleVerify}
                    >
                      SUBMIT CODE
                    </button>
                    <p className="mt-4">
                      Don't receive an email from us?
                      <span
                        className="ml-4"
                        onClick={this.reSendCode}
                        style={{ cursor: 'pointer', color: '#358ED7' }}
                      >
                        RESEND CODE
                      </span>
                    </p>
                  </form>
                </div>

                <div className="otp-at-bottom mt-5 pt-3">
                  <div className="bottom-menu text-left pt-4">
                    <ul className="p-0">
                      <li>
                        <Link to="#">Help</Link>
                      </li>
                      <li>
                        <Link to="#">Support</Link>
                      </li>
                      <li>
                        <Link to="#">Contact</Link>
                      </li>
                    </ul>
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

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(EmailcodeVerify);
