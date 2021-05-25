import React, { Component } from "react";
import "./Business_Profile_tab.css";
import { Link } from "react-router-dom";
import calander from "../../images/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { withRouter } from "react-router-dom";

import { Base_Url } from "../../app.constant";
import { getItem } from "../../utils/localStore";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
//import Business_sidebar from '../Business_sidebar/Business_sidebar'

class Business_content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "first-phase",
      docActive: "ID CARDS",
      startDate: new Date(),
      datePickerIsOpen: false,
      email: "",
      email2: "",
      firstName: "",
      lastName: "",
      add1: "",
      add2: "",
      zip1: "",
      zip2: "",
      date: "",
      compName: "",
      regNo: "",
      termCond: false,
      document1_url: "",
      document2_url: "",
      idCard: "",
      date: ""
    };
    this.onChangeTab = this.onChangeTab.bind(this);
    this.tabfunction = this.tabfunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this);
    // /Business_KYC_Pending
  }

  onChangeTab(e) {
    e.preventDefault();
    $(".loading-container").fadeIn();
    if (this.state.email === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter Email"
      });
      return;
    }
    if (this.state.email2 === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter 2nd Email"
      });
      return;
    }
    if (this.state.firstName === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter your First Name"
      });
      return;
    }
    if (this.state.lastName === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter your Last Name"
      });
      return;
    }
    if (this.state.add1 === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter First Address"
      });
      return;
    }
    if (this.state.zip1 === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter First Zip Address"
      });
      return;
    }
    if (this.state.add2 === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter 2nd Address"
      });
      return;
    }
    if (this.state.zip2 === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter 2nd Zip Address"
      });
      return;
    }
    if (this.state.compName === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter your Company Name"
      });
      return;
    }
    if (this.state.regNo === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter your Company Registration Number"
      });
      return;
    }
    if (!this.state.termCond) {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Agree with Term and Cond. to proceed"
      });
      return;
    }
    console.log("state is  ", this.state);
    let TOKEN = getItem("accessToken");
    axios({
      method: "POST",
      url: `${Base_Url}/business/updateProfile`,
      headers: {
        "Content-Type": "application/json",
        authorization: TOKEN
      },
      data: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_id: this.state.email,
        address1: this.state.add1,
        address2: this.state.add2,
        zip1: this.state.zip1,
        zip2: this.state.zip2,
        date_of_birth: this.state.startDate,
        company_name: this.state.compName,
        company_registration_number: this.state.regNo
      }
    })
      .then(response => {
        console.log(response);
        $(".loading-container").fadeOut();
        console.log("success is here ", response);
        Swal.fire({
          type: "success",
          text: "Business Profile Update Successfully"
        });
        this.setState({
          activeTab: "second-phase"
        });
      })
      .catch(error => {
        console.log("error is here", error);
        $(".loading-container").fadeOut();
        this.setState({
          activeTab: "second-phase"
        });
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
      });
  }
  tabfunction = name => {
    this.setState({
      docActive: name
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeDate = date => {
    let d = `0${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .slice(2, 4)}`;
    this.setState({
      date: d,
      startDate: date
    });
  };

  openDatePicker() {
    this.setState({
      datePickerIsOpen: !this.state.datePickerIsOpen
    });
  }
  handleFileChange = e => {
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(
      "i am here full",
      `0${this.state.startDate.getMonth() + 1}/${this.state.startDate
        .getFullYear()
        .toString()
        .slice(2, 4)}`
    );
    $(".loading-container").fadeIn();

    if (this.state.idCard === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter ID Card number"
      });
      return;
    }
    if (this.state.date === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Enter a valid date "
      });
      return;
    }
    if (this.state.document1_url === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Select 1st Document"
      });
      return;
    }
    if (this.state.document2_url === "") {
      $(".loading-container").fadeOut();
      Swal.fire({
        type: "success",
        text: "Please Select 2nd Document"
      });
      return;
    }
    console.log(this.state);
    let TOKEN = getItem("accessToken");
    const data = new FormData();
    data.append("document_type", this.state.docActive);
    data.append("id_card_number", this.state.idCard);
    data.append("expiration_date", this.state.date);
    data.append("upload_document", this.state.document1_url);
    data.append("upload_address_proof", this.state.document2_url);

    axios({
      method: "POST",
      url: `${Base_Url}/business/updateDocument`,
      headers: {
        "Content-Type": "application/json",
        authorization: TOKEN
      },
      data: data
    })
      .then(response => {
        console.log(response);
        $(".loading-container").fadeOut();
        console.log("success is here ", response);
        Swal.fire({
          type: "success",
          text: "Document Update Successfully"
        });
        this.props.history.push("/Business_profile_overview");
      })
      .catch(error => {
        console.log("error is here", error);
        $(".loading-container").fadeOut();
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
        this.props.history.push("/Business_profile_overview");
      });
  };
  handleSelect = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    console.log("props are here ", this.props);
    console.log("State is ", this.state);
    return (
      <>
        <div className="col-lg-12 col-md-12 mb-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-main">
                <div>
                  <ol className="breadcrumbs m-0 p-0">
                    <li className="active-link">
                      <Link to="/">KYC Business</Link>
                    </li>
                    <li>
                      <Link to="#">Get Started</Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-3 col-md-3 mb-4">
                  <div className="profile-section business-main">
                    <div
                      className={
                        " d-flex align-items-center pb-40 " +
                        (this.state.activeTab === "second-phase"
                          ? "d-none"
                          : "")
                      }
                      id="step1"
                    >
                      <div className="clearfix w-100 position-relative">
                        <div className="d-flex align-items-center w-20">
                          <span className="first-step blue-back">1</span>
                          <span className="first-step blueBg">
                            <i
                              className="fa fa-check white"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="acc-head">Business Profile</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        " d-flex align-items-center pb-40 " +
                        (this.state.activeTab === "second-phase"
                          ? "current_side"
                          : "") +
                        (this.state.step === "second-phase"
                          ? "is-complete"
                          : "")
                      }
                      id="step2"
                    >
                      <div className="clearfix w-100 position-relative">
                        <div className="w-20 align-items-center d-flex">
                          <span
                            className={`first-step ${
                              this.state.activeTab === "second-phase"
                                ? "gray-blue"
                                : "gray-back"
                            }`}
                          >
                            2
                          </span>
                          <span className="first-step blueBg">
                            <i
                              className="fa fa-check  white"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="acc-head d-inline-block">
                            Documentataion
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div
                    id="first-phase"
                    className={
                      "" + this.state.activeTab === "second-phase"
                        ? "d-none"
                        : ""
                    }
                  >
                    {/* <ul className="progressbar">
                                            <li className="active">Business Profile</li>
                                            <li>Documentataion</li>
                                        </ul> */}
                    <div className="business-profile sm-width-100">
                      <div className="profile-form">
                        <div className="clearfix">
                          <div className="float-left">
                            <h3 className="head-main">Business Profile</h3>
                          </div>
                          <div className="edit-details float-right">
                            <Link to="#">EDIT</Link>
                          </div>
                        </div>
                        <form onSubmit={this.onChangeTab}>
                          <div className="font-control">
                            <div className="pt-3 pb-3">
                              <h4 className="sub-head">Personal Info </h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="email"
                                    placeholder="taz.kingston@gmaill.com"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="email2"
                                    placeholder="taz.kingston@gmaill.com"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Taz"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Kingston"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-control">
                            <div className="pt-2 pb-3">
                              <h4 className="sub-head">Address</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="add1"
                                    placeholder="2 Hearbert Street, Newtown"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="zip1"
                                    placeholder="NSW 2042"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="add2"
                                    placeholder="2 Hearbert Street, Newtown"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="zip2"
                                    placeholder="NSW 2042"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-control">
                            <div className="pt-2 pb-3">
                              <h4 className="sub-head">Date of Birth</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="fancyInput position-relative">
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
                            </div>
                          </div>
                          <div className="font-control">
                            <div className="pt-2 pb-3">
                              <h4 className="sub-head">Business Info</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="compName"
                                    placeholder="Company Name"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="fancyInput">
                                  <input
                                    type="text"
                                    name="regNo"
                                    placeholder="Company Registration Number"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-2">
                            <label className="check_container m-0">
                              I agree to the Bricktrade User Agreement, Privacy
                              Policy, Cookie Policy and E-Sign Consent.
                              <input
                                type="checkbox"
                                id="termsChkbx "
                                onClick={() => {
                                  this.setState({
                                    termCond: !this.state.termCond
                                  });
                                }}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="pt-4">
                            <div className="btnLightBlue">
                              <input
                                type="button"
                                name="submit"
                                value="CONTINUE"
                                id="sub1"
                                className="btn"
                                onClick={this.onChangeTab}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    id="second-phase"
                    className={
                      "" +
                      (this.state.activeTab === "first-phase" ? "d-none" : "")
                    }
                  >
                    {/* <div className="progress-step text-center">
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> parent of ed927b6... Merged in ruhit-html (pull request #22)
                                            <div className="position-relative d-inline-block pr-4">
                                            <span className="style-blue black-back"><i className="fa fa-check pt-2 white"
                                                                                    aria-hidden="true"></i></span>
                                                <span className="correct"></span>
                                                <p className="fw-bold fs-14 color-black padd-5">Business Profile</p>
                                            </div>
                                            <div className="position-relative d-inline-block">
                                                <span className="is-active content-none"></span>
                                                <span className="step left-59">2</span>
                                                <p className="fw-bold fs-14 color-blue">Documentataion</p>
                                            </div>
                                        </div> */}
                    <div className="business-profile sm-width-100">
                      <div className="profile-form">
                        <div className="clearfix pb-3">
                          <div className="float-left">
                            <h3 className="head-main">1. Required Documents</h3>
                          </div>
                          <div className="edit-details float-right">
                            <Link to="#">EDIT</Link>
                          </div>
                        </div>
                        <div className="row pt-3">
                          <div className="col-lg-12">
                            <div className="tab">
                              <ul className="nav document-tab w-100">
                                <li className="nav-item">
                                  <Link
                                    to="#"
                                    className={
                                      "nav-link tablinks " +
                                      (this.state.docActive === "ID CARDS"
                                        ? "active"
                                        : "")
                                    }
                                  >
                                    <span
                                      onClick={() =>
                                        this.tabfunction("ID CARDS")
                                      }
                                      className="idcards"
                                    >
                                      ID CARDS
                                    </span>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="#"
                                    className={
                                      "nav-link tablinks " +
                                      (this.state.docActive === "PASSPORT"
                                        ? "active"
                                        : "")
                                    }
                                  >
                                    <span
                                      onClick={() =>
                                        this.tabfunction("PASSPORT")
                                      }
                                      className="passport"
                                    >
                                      PASSPORT
                                    </span>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="#"
                                    className={
                                      "nav-link tablinks " +
                                      (this.state.docActive ===
                                      "DRIVING LICENSE"
                                        ? "active"
                                        : "")
                                    }
                                  >
                                    <span
                                      onClick={() =>
                                        this.tabfunction("DRIVING LICENSE")
                                      }
                                      className="license"
                                    >
                                      DRIVING LICENSE
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row tabcontent pt-4 " id="idcards">
                          <div className="col-lg-3">
                            <div className="fancyInput">
                              <input
                                type="text"
                                name="idCard"
                                placeholder="ID Card Number"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="fancyInput position-relative">
                              <DatePicker
                                placeholderText="Expiration Date"
                                selected={this.state.startDate}
                                onChange={this.handleChangeDate}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="pt-2 pb-3">
                              <h4 className="sub-head">Upload Documents</h4>
                            </div>
                            <div>
                              <p className="fs-14 m-0">
                                We require both sides of your documents
                              </p>
                            </div>
                            <form>
                              <div className="drag-file mt-3 mb-2">
                                <label>
                                  Drag your file to upload or Browse
                                  <input
                                    type="file"
                                    size="60"
                                    name="document1_url"
                                    onChange={this.handleFileChange}
                                  />
                                </label>
                              </div>

                              {this.state.document1_url === "" ? (
                                <p className="m-0 fs-12">
                                  Maximum size of image 8MB. PDF, JPG, PNG
                                </p>
                              ) : (
                                <p
                                  className="m-0 fs-12"
                                  style={{ color: "red" }}
                                >
                                  {this.state.document1_url.name}
                                </p>
                              )}
                            </form>
                          </div>
                          <div className="col-lg-12">
                            <h3 className="m-0 head-main pt-4">
                              2. Proof of Address{" "}
                            </h3>
                            <p className="m-0 fs-14 pt-3">
                              Proof of address document can be one of the
                              following: Bank/credit card statment or a utility
                              bill . More{" "}
                            </p>
                            <form>
                              <div className="drag-file mt-3 mb-2">
                                <label>
                                  Drag your file to upload or Browse
                                  <input
                                    type="file"
                                    size="60"
                                    name="document2_url"
                                    onChange={this.handleFileChange}
                                  />
                                </label>
                              </div>
                              <p className="m-0 fs-12">
                                {this.state.document2_url === "" ? (
                                  <p className="m-0 fs-12">
                                    Maximum size of image 8MB. PDF, JPG, PNG
                                  </p>
                                ) : (
                                  <p
                                    className="m-0 fs-12"
                                    style={{ color: "red" }}
                                  >
                                    {this.state.document2_url.name}
                                  </p>
                                )}
                              </p>
                            </form>
                            <div className="pt-4">
                              <div className="btnLightBlue">
                                <button
                                  className="btn"
                                  id="myBtn"
                                  onClick={this.onSubmit}
                                >
                                  SUBMIT
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default withRouter(Business_content);
