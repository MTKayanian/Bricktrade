import React, { Component } from 'react';
import '../ricktrade.css';
import './style.css';

import logo from '../../images/logo.png';
import chat from '../../images/chat.png';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';

import { Base_Url } from '../../app.constant';

class ResetPassword extends Component {
  state = {
    password: '',
    passwordC: '',
  };
  onNext = (e) => {
    e.preventDefault();
    let URLSplitter = window.location.href.split('/');
    if (this.state.password === '' || this.state.passwordC === '') {
      Swal.fire({
        type: 'error',
        text: 'Please Enter new Password in order to continue',
      });
      return;
    }
    if (this.state.password !== this.state.passwordC) {
      Swal.fire({
        type: 'error',
        text: 'Please Check your both passwords as these are not matched',
      });
      return;
    }

    const ajaxRequestHeaders = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    console.log('i am here', this.state);
    $('.loading-container').fadeIn();
    axios({
      url: `${Base_Url}/user/newPassword`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        origin: 'x-requested-with',
      },
      data: {
        resetToken: URLSplitter[4],
        newPassword: this.state.password,
        confirm_password: this.state.passwordC,
      },
    })
      .then((response) => {
        $('.loading-container').fadeOut();
        console.log(response);

        Swal.fire({
          type: 'success',
          text: 'Password reset Successfully',
        });
        this.props.history.push('/SignIn');
        // } else {
        //   Swal.fire({
        //     type: "success",
        //     text: "Please Verify your Email First"
        //   });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          type: 'error',
          text: error.response.data.message,
        });
        $('.loading-container').fadeOut();
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <>
        <div className="container-fluid signIn m-0 p-0">
          <div className="row reverse">
            <div className="col-lg-6 col-md-6 p-0 d-flex justify-content-center position-relative brick-custm-h">
              <div className="reset-body-content">
                <div className="reset">
                  <img src={logo} alt="logo" />
                </div>
                <div className="reset-signin">
                  <div>
                    <h3 className="reset-description m-0">
                      Reset Your Password
                    </h3>
                    <form onSubmit={this.onNext}>
                      <div className="">
                        <div className="reset-form-signin">
                          <input
                            type="password"
                            placeholder="Enter new Password"
                            name="password"
                            onChange={this.handleChange}
                          />{' '}
                          <span className="sent-cls">
                            <img src="images/eye.png" alt="password" />
                          </span>
                        </div>
                        <div className="reset-form-signin">
                          <input
                            type="password"
                            name="passwordC"
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                          />{' '}
                          <span className="sent-cls">
                            <img src="images/eye.png" alt="password" />
                          </span>
                        </div>
                        <p className="reset-txt">
                          Use a password that has at least 8 characters, use at
                          least one number, one uppercase letter, one lowercase
                          letter and one special symbol.
                        </p>
                        <div className="reset-submit-bttns mb-3">
                          <button
                            type="submit"
                            onClick={this.onNext}
                            className="btn next-btn"
                            id="reset-link-btn"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="reset-at-bottom">
                  <div className="reset-bottom-menu text-left">
                    <ul className="p-0">
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="reset-email-verify-bg">
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

export default ResetPassword;
