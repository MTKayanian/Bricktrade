import React, { Component } from "react";
import "../ricktrade.css";
import "./style.css";

import logo from "../../images/logo.png";
import chat from "../../images/chat.png";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";

import { Base_Url } from "../../app.constant";

class ResetEmailVerification extends Component {
  state = {
    email: ""
  };

  onNext = e => {
    e.preventDefault();
    const ajaxRequestHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    console.log("i am here", this.state);
    $(".loading-container").fadeIn();
    axios({
      url: `${Base_Url}/user/forgotPassword`,
      method: "POST",
      headers: ajaxRequestHeaders,
      data: {
        email: this.state.email
      }
    })
      .then(response => {
        $(".loading-container").fadeOut();
        console.log(response);

        Swal.fire({
          type: "success",
          text: "Password reset instructios has been sent to your email"
        });
        this.props.history.push("/signin");
        // } else {
        //   Swal.fire({
        //     type: "success",
        //     text: "Please Verify your Email First"
        //   });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          type: "error",
          text: error.response.data.message
        });
        $(".loading-container").fadeOut();
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  resetMsg = () => {
    return (
      <div className="recovery-verify-alert-msg" id="pass-reset-msg">
        {/* add visible class after reset api call */}
        <img src="images/sent.png" alt="alert" />
        <p>
          We have sent you password rest link to your registered mal id. Didn’t
          get the mail{" "}
          <span>
            <a href="">click here</a>
          </span>
        </p>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="container-fluid signIn m-0 p-0">
          <div className="row reverse">
            <div className="col-lg-6 col-md-6 p-0 d-flex justify-content-center position-relative brick-custm-h">
              <div className="recovery-verify-body-content">
                <div className="recovery-verify signin-form">
                  <img src={logo} alt="logo" />
                </div>
                <div className="recovery-verify-signin">
                  <div>
                    <h3 className="recovery-verify-description m-0">
                      Enter Your Email ID
                    </h3>
                    <form onSubmit={this.onNext}>
                      <div className="">
                        <div
                          className="recovery-verify-form-signin"
                          id="pass-reset-link"
                        >
                          {/* add reset-link-msg class after reset api call */}
                          <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            onChange={this.handleChange}
                          />{" "}
                          <span className="sent-cls">
                            <img src="images/sent.png" alt="password" />
                          </span>
                        </div>
                        <div className="recovery-verify-submit-bttns mb-3">
                          <button
                            type="submit"
                            className="btn next-btn"
                            id="reset-link-btn"
                            onClick={this.onNext}
                          >
                            Next
                          </button>
                        </div>
                        <p className="try-diff">
                          Try different method.{" "}
                          <span>
                            <a href="#" className="click-hr">
                              Click Here
                            </a>
                          </span>
                        </p>
                        {this.resetMsg()}
                      </div>
                    </form>
                  </div>
                </div>
                <div className="recovery-verify-at-bottom">
                  <div className="recovery-verify-bottom-menu text-left">
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

export default ResetEmailVerification;
