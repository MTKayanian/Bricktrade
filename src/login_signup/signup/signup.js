import React, { Component } from "react";
import "../ricktrade.css";
import "./signup.css";


import logo from "../../images/logo.png";
import chat from "../../images/chat.png";
import Shape from "../../images/Shape.png";
import calander from "../../images/calendar.png";



import { Link } from "react-router-dom";
import { COUNTRY_LIST } from "../../app.constant";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import { Base_Url } from "../../app.constant";
import {
  userLoginAction,
  SignupData,
  userRoleAction,
  userDetailAction
} from "../auth-actions/auth.actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "individual",
      date: "text",
      firstName: "",
      lastName: "",
      country: "",
      date: "",
      email: "",
      phoneNo: "",
      companyName: "",
      comReg: "",
      password: "",
      passwordR: "",
      startDate:""
    };
    this.onChangeTab = this.onChangeTab.bind(this);
  }
  onChangeTab(e) {
    this.setState({
      activeTab: e.currentTarget.value
    });
    console.log(e.currentTarget.value);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
    // console.log(
    //   "Our new date is : ",
    //   `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    // );
  };
  Submit = e => {
    console.log("props is ", this.props);
    e.preventDefault();
    $(".loading-container").fadeIn();
    if (this.state.firstName === "") {
      Swal.fire({
        type: "error",
        text: "Please Enter your First Name"
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.lastName === "") {
      Swal.fire({
        type: "error",
        text: "Please Enter your Last Name"
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.email === "") {
      Swal.fire({
        type: "error",
        text: "Please Enter an Email"
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.startDate === ""||this.state.startDate==null) {
      Swal.fire({
        type: "error",
        text: "Please Enter Date of Birth"
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.country === "") {
      Swal.fire({
        type: "error",
        text: "Please Select a Country"
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.companyName === "" && this.state.activeTab === "business") {
      Swal.fire({
        type: "error",
        text: "Please Select a Company Type"
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.comReg === "" && this.state.activeTab === "business") {
      Swal.fire({
        type: "error",
        text: "Please Enter Company Registration Number"
      });
      $(".loading-container").fadeOut();
      return;
    }

    if (this.state.phoneNo === "") {
      Swal.fire({
        type: "error",
        text: "Please Enter your Phone No. "
      });
      $(".loading-container").fadeOut();
      return;
    }

    if (this.state.password === "" || this.state.password.length < 6) {
      Swal.fire({
        type: "error",
        text: "Please Select a minimum 6 length of Password "
      });
      $(".loading-container").fadeOut();
      return;
    }
    if (this.state.password !== this.state.passwordR) {
      Swal.fire({
        type: "error",
        text: "Password and Confirm Password Should be Same"
      });
      $(".loading-container").fadeOut();
      return;
    }
    const data =
      this.state.activeTab === "business"
        ? {
            type: this.state.activeTab,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            country: this.state.country,

            date_of_birth: `${this.state.startDate.getFullYear()}-${this.state.startDate.getMonth() +
              1}-${this.state.startDate.getDate()}`,
            email: this.state.email,
            phone: this.state.phoneNo,
            company_name: this.state.companyName,
            company_registered_no: this.state.comReg,
            password: this.state.password,
            confirm_password: this.state.passwordR
          }
        : {
            type: this.state.activeTab,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            country: this.state.country,
            date_of_birth: `${this.state.startDate.getFullYear()}-${this.state.startDate.getMonth() +
              1}-${this.state.startDate.getDate()}`,
            email: this.state.email,
            phone: this.state.phoneNo,
            password: this.state.password,
            confirm_password: this.state.passwordR
          };
    axios
      .get(`${Base_Url}/checkEmail`, {
        params: {
          email: this.state.email
        }
      })
      .then(response => {
        // setItem('accessToken', response.data.data.accessToken);
        console.log("response is ", response);
        $(".loading-container").fadeOut();
        if (response.data.data.isAvailable) {
          console.log(response);
          Swal.fire({
            type: "success",
            text: "Please ! Agree with terms and conditions to Proceed"
          });
          this.props.SignupData(data);
          console.log("props is 2nd", this.props);
          this.props.history.push("/Signupterm");
        } else {
          Swal.fire({
            type: "error",
            text: "Please Use another Email as this one is already Registered!"
          });
        }
        // localStorage.setItem('role',response.data.data.type);
        // console.log("Role is ",response.data.data.type);
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 406 || error.response.status === 404) {
          Swal.fire({
            type: "error",
            text: error.response.data.message
          });
        } else {
          Swal.fire({
            type: "error",
            text: error.response.data.message
          });
        }
        $(".loading-container").fadeOut();
      });
  };
  render() {
    console.log("state of date is ", this.state);
    return (
      <>
        <div className="container-fluid signup m-0 p-0">
          <div className="row flex-row-reverse">
            <div
              className={`col-md-6  ${
                this.state.activeTab === "business"
                  ? "signuup_business_bg"
                  : "signup-bg-image"
              } `}
            >
              <div
                className={`txt-over ${
                  this.state.activeTab === "business" ? "d-none" : ""
                } `}
              >
                <span>
                  <img src={Shape} alt="qoute" className="img-fluid" />
                </span>
                <p
                  className={`${
                    this.state.activeTab === "business" ? "d-none" : ""
                  } `}
                >
                  As a saver I look for low risk investments for my savings, Bricktrade was the perfect solution for me.
                </p>                
              </div>
              {/* <div className="comment-box">
                <Link href="#">
                  <img src={chat} alt="icon" />
                </Link>
              </div> */}
            </div>
            <div className="col-md-6 m-top-58">
              <div className="left-panel">
                <div className="head-logo">
                  <img src="images/main-logo.png" alt="logo" className="img-fluid" />
                </div>
                <h2>Sign up</h2>
                <p>
                  Welcome, Please fill in the information to get registered.
                </p>

                <div className="signup-sect">
                  <div className="account-cat1 mb-4">
                    <div className="dtablinks1">
                      <input
                        id="Personal-acount"
                        name="bplan"
                        value="individual"
                        type="radio"
                        onChange={this.onChangeTab}
                        checked={this.state.activeTab === "individual"}
                      />
                      <label for="Personal-acount">Individual</label>
                    </div>

                    <div className="dtablinks1">
                      <input
                        id="business-acount"
                        name="bplan"
                        value="business"
                        type="radio"
                        onChange={this.onChangeTab}
                        checked={this.state.activeTab === "business"}
                      />
                      <label for="business-acount">Business</label>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div
                      id="P-acount"
                      className={
                        "tab-pane tab-p " +
                        (this.state.activeTab === "individual" ? "active" : "")
                      }
                    >
                      <form
                        action="signup-terms-conditions.html"
                        method="post"
                        className="signup-form"
                        onSubmit={this.Submit}
                      >
                        <div className="row">
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="email"
                                placeholder="Email ID"
                                required
                                name="email"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0 ">
                            <div className="form-input2">

                              <DatePicker
                                placeholderText="Date of Birth"
                                selected={this.state.startDate}
                                onChange={this.handleChangeDate}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input1">
                              <select
                                id="select1"
                                name="country"
                                onChange={this.handleChange}
                              >
                                <option value="Select Country">
                                  Select Country
                                </option>
                                {COUNTRY_LIST.map((country, id) => (
                                  <option key={id} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNo"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="password"
                                id="inputpassword1"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="password"
                                id="confirmpassword"
                                placeholder="Confirm Password"
                                name="passwordR"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <p className="signupbtm-txt">
                              {/* Speak to us on{" "} */}
                              {/* <span>
                                <a href="/contact">Brick Trade</a>
                              </span>{" "}
                              to find out more about the referral reward
                              program. Or, continue with{" "}
                              <span>
                                <Link href="#">Google</Link>
                              </span>{" "}
                              or{" "}
                              <span>
                                <Link href="#">Facebook</Link>
                              </span>{" "} */}
                              Already a member ?{" "}
                              <span>
                                <Link to="/SignIn">Sign In</Link>
                              </span>
                            </p>
                            <button
                              type="submit"
                              className="continue-button"
                              onClick={this.Submit}
                            >
                              CONTINUE
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      id="b-acount"
                      className={
                        "tab-p tab-pane " +
                        (this.state.activeTab === "business" ? "active" : "")
                      }
                    >
                      <form
                        action="signup-terms-conditions.html"
                        method="post"
                        className="signup-form"
                      >
                        <div className="row">
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="email"
                                placeholder="Email ID"
                                required
                                name="email"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input2">
                              {/* <input
                                type="text"
                                placeholder="Date of Birth"
                                name="date"
                                onChange={this.handleChange}
                              /> */}
                             <DatePicker
                                placeholderText="Date of Birth"
                                selected={this.state.startDate}
                                onChange={this.handleChangeDate}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                              />
                              {/* <span>
                                <img src={calander} alt="calendar" />
                              </span> */}
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input1">
                              <select
                                id="select1"
                                name="country"
                                onChange={this.handleChange}
                              >
                                <option value="Select Country">
                                  Select Country
                                </option>
                                {COUNTRY_LIST.map((country, id) => (
                                  <option key={id} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                          <div className="form-input">
                              <input
                                type="text"
                                placeholder="Company Name"
                                name="companyName"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="Company Reg. Number"
                                name="comReg"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNo"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="password"
                                id="inputpassword1"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <div className="form-input">
                              <input
                                type="password"
                                id="inputpassword1"
                                placeholder="Confirm Password"
                                name="passwordR"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 padd-r-0">
                            <p className="signupbtm-txt">
                              {/* Speak to us on{" "} */}
                              {/* <span>
                                <a href="/contact">Brick Trade</a>
                              </span>{" "}
                              to find out more about the referral reward
                              program. Or, continue with{" "}
                              <span>
                                <Link to="/#">Google</Link>
                              </span>{" "}
                              or{" "}
                              <span>
                                <Link to="/#">Facebook</Link>
                              </span>{" "} */}
                              Already a member ?{" "}
                              <span>
                                <Link to="/SignIn">Sign In</Link>
                              </span>
                            </p>
                            <button
                              type="submit"
                              className="continue-button"
                              onClick={this.Submit}
                            >
                              CONTINUE{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="at-bottom">
                  <div className="bottom-menu">
                    {/* <ul className="p-0">
                      <li>
                        <Link href="#">Help</Link>
                      </li>
                      <li>
                        <Link href="#">Support</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
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
const mapDispatchToProps = dispatch => ({
  userLoginAction: payload => dispatch(userLoginAction(payload)),
  SignupData: payload => dispatch(SignupData(payload)),
  userRoleAction: payload => dispatch(userRoleAction(payload)),
  userDetailAction: payload => dispatch(userDetailAction(payload))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Signup);
