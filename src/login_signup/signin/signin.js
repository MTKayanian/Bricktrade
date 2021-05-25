import React, { Component } from 'react';

import '../ricktrade.css';
import './signin.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import logo from '../../images/logo.png';
import chat from '../../images/chat.png';
import Shape from '../../images/Shape.png';
import gcaptcha from '../../images/g-captcha.png';
import main_logo from './images/main-logo.png';

import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';

import {
  userLoginAction,
  SignupData,
  userRoleAction,
  userDetailAction,
  userIdAction,
} from '../auth-actions/auth.actions';
import { Base_Url,Server_Url,Core_Url } from '../../app.constant';
import { setItem } from '../../utils/localStore';

import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  // for handle change in input field

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  // for submit form and call api

  Submit = (e) => {
    e.preventDefault();

    if (this.state.email == '' || this.state.password == '') {
      Swal.fire({
        type: 'error',
        text: 'Please fill all field',
      });
      return;
    }

    const ajaxRequestHeaders = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    console.log('i am here', this.state);
    $('.loading-container').fadeIn();
    axios({
      url: `${Base_Url}/user/login`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        email: this.state.email,
        password: this.state.password,
        deviceType: 'WEB',
      },
    })
      .then((response) => {
        setItem('accessToken', response.data.data.accessToken);
        $('.loading-container').fadeOut();
        this.props.userIdAction(response.data.data._id);
        this.props.userDetailAction(response.data.data);
        this.props.userRoleAction(response.data.data.type);
        localStorage.setItem('role', response.data.data.type);
        localStorage.setItem('userRole', response.data.data.roles[0]);
        localStorage.setItem('adminRole', response.data.data.roles[1]);
        localStorage.setItem('toggleSidebar', response.data.data.roles.length);
        console.log('Role is ', response.data.data.type);
        console.log(response);
        if (response.data.data.isEmailVerified) {
          Swal.fire({
            type: 'success',
            text: 'Please Enter OTP to Continue',
          });
          this.props.history.push('/EmailcodeVerify');
        } else {
          Swal.fire({
            type: 'success',
            text: 'Please Verify your Email First',
          });
        }
      })
      .catch((error) => {
        console.log(error);
        // if (error.response.status === 406 || error.response.status === 404) {
        //   Swal.fire({
        //     type: 'error',
        //     text: error.response.data.message,
        //   });
        // } else {
          Swal.fire({
            type: 'error',
            text: 'Server Error',
          });
        // }
        $('.loading-container').fadeOut();
      });
  };

  componentDidMount() {
    let URLSplitter = window.location.href.split('/');
    //console.log("URLSplitter", URLSplitter);
    $('.loading-container').fadeIn();
    axios({
      url: `${Base_Url}/user/verifyEmail/${URLSplitter[[4]]}/${
        URLSplitter[[5]]
      }`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {},
    })
      .then((response) => {
        $('.loading-container').fadeOut();
        console.log(response);
        Swal.fire({
          type: 'success',
          text: 'Email Verify Successfully',
        });
      })
      .catch((error) => {
        console.log(error);
        $('.loading-container').fadeOut();
      });
  }
  render() {
    console.log("Base_Url***",Base_Url)
    return (
      <>
        <div className="container-fluid signIn m-0 p-0">
          <div className="row reverse">
            <div className="col-lg-6 col-md-6 p-0 d-flex justify-content-center position-relative">
              <div className="signin-form w-57 m-top-58">
                <div className="">
                  <div className="pb-44">
                    <img src={main_logo} alt="logo" />
                  </div>
                  <div className="pb-60">
                    <h3 className="head-main">Sign In</h3>
                    <p className="description m-0">
                      Welcome back, Please login to your account.
                    </p>
                  </div>
                  <div>
                    <form
                      method="POST"
                      action="./reset-password.html"
                      onSubmit={this.Submit}
                    >
                      <div className="">
                        <div className="form-signin" id="bucketname_div">
                          <input
                            type="text"
                            name="email"
                            id="border-red"
                            placeholder="Email"
                            onChange={this.handleChange}
                          />
                          <div id="bucket_error"></div>
                        </div>
                        <div className="form-signin" id="report_prefix">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                          />
                          <div id="report_error"></div>
                        </div>
                        <div className="fancycheckbox pb-27 pt-2">
                          <label
                            className="check_container"
                            style={{ paddingTop: '6px' }}
                          >
                            Remember me
                            <input type="checkbox" />
                            <span className="checkmark mt-1"></span>
                          </label>
                        </div>
                        <div className="btnLightBlue mb-3">
                          {/* <Link to="/EmailcodeVerify" className="btn">SIGN IN</Link> */}
                          <button className="btn" type="submit">
                            SIGN IN
                          </button>
                        </div>
                        <div>
                          <p className="fs-16 d-inline-block pr-3">
                            Do not have an account?
                          </p>
                          <Link to="/signup" className="d-inline-block fs-14">
                            SIGN UP
                          </Link>
                        </div>
                        <div>
                          <Link to="/ResetEmailVerification" className="fs-14">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="at-bottom">
                    <div className="bottom-menu text-left">
                      <ul className="p-0 mt-5 pt-3">
                        <li>
                          <Link href="#">Help</Link>
                        </li>
                        <li>
                          <Link href="#">Support</Link>
                        </li>
                        <li>
                          <Link href="#">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="signin-main">
                {/* <div className="comment-box">
                  <Link href="#">
                    <img src={chat} alt="icon" />
                  </Link>
                </div> */}
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
const mapDispatchToProps = (dispatch) => ({
  userIdAction: (payload) => dispatch(userIdAction(payload)),
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
  SignupData: (payload) => dispatch(SignupData(payload)),
  userRoleAction: (payload) => dispatch(userRoleAction(payload)),
  userDetailAction: (payload) => dispatch(userDetailAction(payload)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
