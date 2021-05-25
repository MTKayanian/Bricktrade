import React, { Component } from "react";
import "../ricktrade.css";
import "./style.css";

import logo from "../../images/logo.png";
import chat from "../../images/chat.png";
import { Link, Redirect } from "react-router-dom";

class ResetPasswordSuccessfull extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="container-fluid signIn m-0 p-0">
          <div className="row reverse">
            <div className="col-lg-6 col-md-6 p-0 d-flex justify-content-center position-relative">
              <div className="successful-body-content">
                <div className="successful">
                  <img src={logo} alt="logo" />
                </div>
                <div className="successful-signin">
                  <div>
                    <h3 className="successful-description mb-0">
                      <span>
                        <img src="images/successful.png" alt="successfull" />
                      </span>
                      Hello, Mikael
                    </h3>
                    <p>Your password is successfully changed</p>
                    <div className="successful-submit-bttns mb-3">
                      <Link
                        to="/SignIn"
                        type="button"
                        className="btn next-btn"
                        id="successful-link-btn"
                      >
                        SIGN IN NOW
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="successful-at-bottom">
                  <div className="successful-bottom-menu text-left">
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
              <div className="signin-main">
                <div className="comment-box">
                  <Link href="#">
                    <img src={chat} alt="icon" />
                  </Link>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default ResetPasswordSuccessfull;
