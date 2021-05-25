import React, { Component } from 'react';
import { COUNTRY_LIST } from '../../app.constant';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { getItem } from '../../utils/localStore';
import Note from '../../utils/Note';
import axios from 'axios';
import { Base_Url, Img_Url } from '../../app.constant';
import $ from 'jquery';
import classnames from 'classnames';
import Swal from 'sweetalert2';

import pencil from '../../images/pencil.png';
import profile from '../../images/profile-photo.png';
import tick from '../../images/approved-tick.png';
import cross from '../../images/red-cross.png';
import crossBtn from '../../images/close-btn.png';
import crossRed from '../../images/cross.png';

import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import './BusinessKycStarted.css';
import '../kycResBus.css';

class BusinessKycStarted extends Component {
  state = {
    attachment: null,
    image: '',
    inputMail: '',
    mailMatch: false,
    firstName: 'Robert',
    secondName: 'Rose',
    add1: '',
    add2: '',
    country: 'United Kingdom',
    city: '',
    postal: '',
    type: 'BUSINESS',
    pCountry: 'United Kingdom',
    phone: '+44 0755******678',
    pEmail: 'a.rose@ace.co.uk',
    date: '11/Sep/1976',
    startDate: new Date(),
    accInf: false,
    perAdd: false,
    perInf: false,
    proPic: false,
    popupEmail: false,
    popupSave: false,
    popup: false,
    accountStatus: false,
    oldData: {},
    toggleAdd1: false,
    toggleAdd2: false,
    toggleCountry: false,
    togglePostal: false,
    toggleCity: false,
    toggleEmail: false,
    toggleCountryModel: false
  };

  componentDidMount() {
    this.setState({
      inputMail: localStorage.getItem('kycEmail')
        ? localStorage.getItem('kycEmail')
        : ''
    });
    let TOKEN = getItem('accessToken');
    $('.loading-container').fadeIn();
    axios({
      method: 'POST',
      url: `${Base_Url}/user/business/getProfile`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        authorization: TOKEN
      },
      data: {
        user_id: ''
      }
    })
      .then(response => {
        $('.loading-container').fadeOut();
        this.setState({
          oldData: response.data.data,
          firstName: response.data.data.first_name,
          secondName: response.data.data.last_name,
          add1:
            response.data.data.address1 == 'undefined'
              ? ''
              : response.data.data.address1,
          add2:
            response.data.data.address2 == 'undefined'
              ? ''
              : response.data.data.address2,
          country: response.data.data.country,
          pCountry: response.data.data.country,
          pEmail: response.data.data.email,
          city:
            response.data.data.city == 'undefined'
              ? ''
              : response.data.data.city,
          phone: response.data.data.phone,
          postal:
            response.data.data.postal_code == 'undefined'
              ? ''
              : response.data.data.postal_code,
          type: response.data.data.type,
          date: response.data.data.date_of_birth,
          accountStatus:
            response.data.data.account_status == 'enable' ? true : false,
          attachment: response.data.data.profile_photo
        });
        
        if (this.state.pEmail === this.state.inputMail) {
          this.setState({
            mailMatch: true
          });
        } else {
          this.setState({
            mailMatch: false
          });
        }
      })
      .catch(error => {
        console.log('error is here', error);
        $('.loading-container').fadeOut();
        Swal.fire({
          type: 'error',
          text: 'Please Check Your Network Connection'
        });
      });
    // console.log("No of pages : length ",check,this.state.allData.length);
  }

  updateAccountInfo() {
    const { firstName, secondName } = this.state;
    const formData = new FormData();
    // debugger
    formData.append('first_name', firstName);
    formData.append('last_name', secondName);
    axios({
      method: 'post',
      url: `${Base_Url}/user/updateAccountInfo `,
      headers: {
        authorization: localStorage.getItem('accessToken'),
        'content-type': 'multipart/form-data'
      },
      data: formData
    })
      .then(response => {
        // debugger
        if (response.data.statusCode === 200) {
          NotificationManager.success(
            'Account information changed successfully'
          );
          window.location.href = '/KycStarted';
        } else if (response.data.statusCode === 401) {
          localStorage.clear();
          window.location.href = '/';
        }
      })
      .catch(error => {
        if (error.response.data.statusCode === 406) {
          NotificationManager.error(error.response.data.message);
        }
      });
  }

  updateAddressInfo() {
    const { add1, add2, country, postal, city } = this.state;
    const formData = new FormData();
    // debugger
    formData.append('address1', add1);
    formData.append('address2', add2);
    formData.append('postal_code', postal);
    formData.append('city', city);
    formData.append('country', country);
    axios({
      method: 'post',
      url: `${Base_Url}/user/updateAddressInfo`,
      headers: {
        authorization: localStorage.getItem('accessToken'),
        'content-type': 'multipart/form-data'
      },
      data: formData
    })
      .then(response => {
        // debugger
        $('.loading-container').fadeOut();
        if (response.data.statusCode === 200) {
          NotificationManager.success(
            'Account information changed successfully'
          );
          window.location.href = '/KycStarted';
        } else if (response.data.statusCode === 401) {
          localStorage.clear();
          window.location.href = '/';
        }
      })
      .catch(error => {
        if (error.response.data.statusCode === 406) {
          NotificationManager.error(error.response.data.message);
        }
      });
  }

  updateProfileImage() {
    if (typeof this.state.attachment != 'string') {
      const formData = new FormData();
      this.state.attachment &&
        formData.append('profile_photo', this.state.attachment);
      axios({
        method: 'post',
        url: `${Base_Url}/user/updateProfilePhoto `,
        headers: {
          authorization: localStorage.getItem('accessToken'),
          'content-type': 'multipart/form-data'
        },
        data: formData
      })
        .then(response => {
          // debugger
          if (response.data.statusCode === 200) {
            NotificationManager.success(
              'Account information changed successfully'
            );
            window.location.href = '/KycStarted';
          } else if (response.data.statusCode === 401) {
            localStorage.clear();
            window.location.href = '/';
          }
        })
        .catch(error => {
          if (error.response.data.statusCode === 406) {
            NotificationManager.error(error.response.data.message);
          }
        });
    } else {
      //nothing to do
    }
  }
  updatePersonaLInfo() {
    const { pEmail, pCountry, phone, date } = this.state;
    const formData = new FormData();
    // debugger
    formData.append('phone', phone);
    formData.append('date_of_birth', date);
    formData.append('country', pCountry);
    formData.append('email', pEmail);
    axios({
      method: 'post',
      url: `${Base_Url}/user/updatePersonaLInfo`,
      headers: {
        authorization: localStorage.getItem('accessToken'),
        'content-type': 'multipart/form-data'
      },
      data: formData
    })
      .then(response => {
        // debugger
        $('.loading-container').fadeOut();
        if (response.data.statusCode === 200) {
          NotificationManager.success(
            'Account information changed successfully'
          );
          window.location.href = '/KycStarted';
        } else if (response.data.statusCode === 401) {
          localStorage.clear();
          window.location.href = '/';
        }
      })
      .catch(error => {
        if (error.response.data.statusCode === 406) {
          NotificationManager.error(error.response.data.message);
        }
        if (error.response.data.statusCode === 404) {
          Swal.fire({
            type: 'error',
            text: error.response.data.data
          });
          return;
        }
      });
  }
  handleInputChange = event => {
    this.setState(
      { [event.target.name]: event.target.value, toggleEmail: false },
      () => {
        localStorage.setItem('kycEmail', this.state.inputMail);
      }
    );

    if (event.target.name === 'inputMail') {
      if (event.target.value === this.state.pEmail) {
        this.setState({
          mailMatch: true
        });
      } else {
        this.setState({
          mailMatch: false
        });
      }
    }
  };
  handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  };
  handleChangeDate = date => {
    this.setState({
      startDate: date,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    });
    console.log('my date ', this.state.date);
    console.log(
      'Our new date is : ',
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  };

  checkAddressField = async () => {
    new Promise((resolve, reject) => {
      this.state.add1 == '' || this.state.add1 == undefined
        ? this.setState({ toggleAdd1: true })
        : this.setState({ toggleAdd1: false });
      this.state.add2 == '' || this.state.add2 == undefined
        ? this.setState({ toggleAdd2: true })
        : this.setState({ toggleAdd2: false });
      this.state.country == '' || this.state.country == undefined
        ? this.setState({ toggleCountry: true })
        : this.setState({ toggleCountry: false });
      this.state.postal == '' || this.state.postal == undefined
        ? this.setState({ togglePostal: true })
        : this.setState({ togglePostal: false });
      this.state.city == '' || this.state.city == undefined
        ? this.setState({ toggleCity: true })
        : this.setState({ toggleCity: false });

    
      if (this.state.inputMail == '') {
        this.setState({ toggleEmail: true });
      }

      if (!this.state.mailMatch) {
        console.log('i am in email');
        this.setState({ popupEmail: true, popup: true });
        return;
      }

      if (this.state.pCountry != this.state.country) {
        this.setState({ toggleCountryModel: true });
        return;
      }

      if (
        this.state.accInf ||
        this.state.perAdd ||
        this.state.perInf ||
        this.state.proPic
      ) {
        console.log('i am in save mode');
        this.setState({ popupSave: true, popup: true });
        return;
      }
    });
  };
  continue = async () => {
    console.log('countine****', this.state);
    await this.checkAddressField().then(() => {
      console.log('countine2****', this.state);
      if (
        !this.state.popup &&
        !this.state.popupEmail &&
        !this.state.popupSave &&
        !this.state.toggleAdd1 &&
        !this.state.toggleAdd2 &&
        !this.state.togglePostal &&
        !this.state.toggleCity &&
        !this.state.toggleCountry &&
        !this.state.toggleCountryModel &&
        this.state.inputMail != ''
      ) {
        this.walletEmailAPIHandler()
      }
    });
  };

  walletEmailAPIHandler = () => {
    $(".loading-container").fadeIn();
    axios({
      method: "POST",
      url: `${Base_Url}/user/walletEmail`,
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem('accessToken')
      },
      data:{
        email:this.state.inputMail
      }
    })
      .then(response => {
        console.log(response);
        //console.log("data tyupe of data is ", response.data.data.length);
        if (response.data.statusCode === 200) {
          this.props.history.push('/KycDocumentation');
        }
        $(".loading-container").fadeOut();
      })
      .catch(error => {
        console.log("error is here", error);
        $(".loading-container").fadeOut();
        Swal.fire({
          type: "error",
          text: "Please Check Your Network Connection"
        });
      });
  };


  cancelPopup = () => {
    this.setState({
      popupSave: false,
      popupEmail: false,
      popup: false,
      toggleCountryModel: false
    });
  };
  onSave = () => {
    this.setState({
      accInf: false,
      perAdd: false,
      perInf: false,
      proPic: false,
      popupSave: false,
      popup: false
    });
  };
  changeMail = () => {
    this.setState({
      perInf: true,
      popupEmail: false,
      popup: false,
      toggleCountryModel: false
    });
  };
  crossClick = () => {
    this.setState({
      popup: false,
      popupEmail: false,
      popupSave: false,
      toggleCountryModel: false
    });
  };

  saveProfile = () => {
    const oldAddress1 =
      this.state.oldData.address1 != 'undefined'
        ? this.state.oldData.address1
        : '';
    const oldAddress2 =
      this.state.oldData.address2 != 'undefined'
        ? this.state.oldData.address2
        : '';
    const oldCountry =
      this.state.oldData.country != 'undefined'
        ? this.state.oldData.country
        : '';
    const oldPostalCode =
      this.state.oldData.postal_code != 'undefined'
        ? this.state.oldData.postal_code
        : '';
    const oldCity =
      this.state.oldData.city != 'undefined' ? this.state.oldData.city : '';

    if (this.state.attachment != this.state.oldData.profile_photo) {
      $('.loading-container').fadeIn();
      this.updateProfileImage();
    }
    if (
      this.state.pEmail != this.state.oldData.email ||
      this.state.pCountry != this.state.oldData.country ||
      this.state.phone != this.state.oldData.phone ||
      this.state.date != this.state.oldData.date_of_birth
    ) {
      $('.loading-container').fadeIn();
      this.updatePersonaLInfo();
    }
    if (
      this.state.firstName != this.state.oldData.first_name ||
      this.state.secondName != this.state.oldData.last_name
    ) {
      if (this.state.firstName == '' || this.state.secondName == '') {
        Swal.fire({
          type: 'error',
          text: 'Please Fill All Field'
        });
        return;
      }
      $('.loading-container').fadeIn();
      this.updateAccountInfo();
    }
    if (
      this.state.add1 != oldAddress1 ||
      this.state.add2 != oldAddress2 ||
      this.state.country != oldCountry ||
      this.state.postal != oldPostalCode ||
      this.state.city != oldCity
    ) {
      if (this.state.pCountry != this.state.country) {
        this.setState({ toggleCountryModel: true });
      } else {
        $('.loading-container').fadeIn();
        this.updateAddressInfo();
      }

      this.state.add1 == '' || this.state.add1 == undefined
        ? this.setState({ toggleAdd1: true })
        : this.setState({ toggleAdd1: false });
      this.state.add2 == '' || this.state.add2 == undefined
        ? this.setState({ toggleAdd2: true })
        : this.setState({ toggleAdd2: false });
      this.state.country == '' || this.state.country == undefined
        ? this.setState({ toggleCountry: true })
        : this.setState({ toggleCountry: false });
      this.state.postal == '' || this.state.postal == undefined
        ? this.setState({ togglePostal: true })
        : this.setState({ togglePostal: false });
      this.state.city == '' || this.state.city == undefined
        ? this.setState({ toggleCity: true })
        : this.setState({ toggleCity: false });
    }

    $('.loading-container').fadeOut();
    this.setState({
      accInf: false,
      perAdd: false,
      perInf: false,
      proPic: false
    });
  };

  countryModel = () => {
    return (
      <div
        id="save-prof"
        className={this.state.toggleCountryModel ? 'modal  close-ac' : 'd-none'}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="text-center modal-content">
            <span className="close-btn text-right">
              <img
                src={crossBtn}
                alt="close"
                className="close"
                onClick={this.crossClick}
              />
            </span>
            <div>
              <img src={crossRed} alt="clode" />
            </div>
            <h3 className="m-0 pt-4 pb-3 upld-hd">country not matched</h3>
            <p className="modal-desc">
              Edit selected country in personal information section
            </p>

            <div className="d-flex submit-cancl-btn mt-2">
              <button
                type="submit"
                className="submit-btn btn"
                onClick={this.changeMail}
                style={{ width: '211px' }}
              >
                CHANGE
              </button>
              <button
                type="button"
                className="cancelButton"
                onClick={this.cancelPopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log('state*****', this.state);
    if (localStorage.getItem('accessToken') === '') {
      return <Redirect to="/" />;
    } else
      return (
        <>
          <div className="container-fluid dashboard-content">
            <div className="row pb-4">
              <div className="col-md-12">
                <div className="row">
                  <div className="content-head pt-0 pb-0 col-12 m-0 p-0">
                    <div className="left-content">
                      <div className="row m-0 p-0">
                        <h4>
                          <span style={{ color: '#0077DC' }}>
                            {this.props.userReducer.role === 'individual'
                              ? ' Individual KYC'
                              : 'BUSINESS KYC'}{' '}
                            >{' '}
                          </span>
                          <span>Get Started</span>
                        </h4>
                      </div>
                    </div>
                    {!this.state.accountStatus && (
                      <Note
                        bcolor="header-msg-error"
                        text="Your account is disabled, Contact Admin"
                        className="row"
                      />
                    )}

                    {this.state.accountStatus && (
                      <Note
                        bcolor="header-msg-successful"
                        text="Your account is enabled, proceed to apply for KYC/AML"
                        className="row"
                      />
                    )}

                    {this.state.popupEmail ? (
                      <Note
                        bcolor="header-msg-error"
                        text="Your Email ID Should be match with personal information"
                        className="row"
                      />
                    ) : (
                      ''
                    )}

                    {this.state.popupSave ? (
                      <Note
                        bcolor="header-msg-error"
                        text="Save the changes you have made before continue to next step or data will lost"
                        className="row"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 m-0 p-0">
              <div className="row m-0 p-0">
                <div className="col-lg-6 m-0 p-0 bussKycStart">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2 className="head-title">Personal profile</h2>
                      <div className="profile-section">
                        <div className="clearfix">
                          <div className="float-left">
                            <h3 className="prof-pic">Profile Picture</h3>
                          </div>

                          <div className="edit-details float-right">
                            {this.state.proPic ? (
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  {
                                    // this.setState({
                                    //   proPic: !this.state.proPic
                                    // });
                                  }
                                }}
                              >
                                SAVE
                              </div>
                            ) : (
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() =>
                                  this.setState({ proPic: !this.state.proPic })
                                }
                              >
                                EDIT
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="clearfix d-flex align-items-center mb-4">
                          <div className="float-left position-relative">
                            <img
                              src={
                                this.state.attachment == null
                                  ? './images/profile.png'
                                  : this.state.image == ''
                                  ? Img_Url + this.state.attachment
                                  : this.state.image
                              }
                              id="blah"
                              alt="your image"
                              className="img-fluid upload-pic"
                            />
                            {this.state.proPic ? (
                              <div className="upload-btn-wrapper h-100 pt-60">
                                <button className="upload-btn">
                                  <img src={pencil} alt="icon" />
                                </button>
                                <input
                                  type="file"
                                  name="attachment"
                                  onChange={this.handleFileChange}
                                  className="pt-60"
                                />
                              </div>
                            ) : null}
                          </div>
                          <div className="float-left pl-4">
                            <h3 className="fs-20 m-0">Upload your photo</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-4 personal-information">
                      <h2 className="head-title">personal information</h2>
                      <div className="profile-section">
                        <div className="clearfix">
                          <div className="float-left">
                            <h3 className="prof-pic mb-2">
                              Personal Information
                            </h3>
                          </div>
                          <div className="edit-details float-right">
                            {this.state.perInf ? (
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  {
                                    // this.setState({
                                    //   perInf: !this.state.perInf
                                    // });
                                  }
                                }}
                              >
                                SAVE
                              </div>
                            ) : (
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() =>
                                  this.setState({ perInf: !this.state.perInf })
                                }
                              >
                                EDIT
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="businss-txt p-0 m-0">
                          I am a
                          {this.state.perInf ? (
                            <span className="pl-2">
                              <input
                                name="type"
                                value={this.state.type}
                                onChange={this.handleInputChange}
                              />
                            </span>
                          ) : (
                            <span className="pl-2">{this.state.type}</span>
                          )}
                        </p>                       
                        <div className="user-details">
                          <ul className="mb-0 businesskycStarted">
                            <li className="pb-2">
                              <div className="details-left">Date of Birth </div>      
                                                      
                              {this.state.perInf ? (
                                <DatePicker
                                  placeholderText="Date of Birth"
                                  selected={this.state.startDate}
                                  onChange={this.handleChangeDate}                                  
                                  dropdownMode="select"
                                  //className="p-0 perInfFix"
                                />
                              ) : (
                                <div className="perInfFix">
                                  {this.state.date.slice(0, 10)}
                                </div>
                              )}
                            </li>
                            <li className="pb-2">
                              <div className="details-left">Country</div>
                              {this.state.perInf ? (
                                <select
                                  id="sel1"
                                  name="pCountry"
                                  onChange={this.handleInputChange}
                                >
                                  <option>{this.state.pCountry}</option>
                                  {COUNTRY_LIST.map(c => (
                                    <option id={c}>{c}</option>
                                  ))}
                                </select>
                              ) : (
                                <div className="perInfFix">
                                  {this.state.pCountry}
                                </div>
                              )}
                            </li>
                            <li className="pb-2">
                              <div className="details-left">Email</div>
                              {this.state.perInf ? (
                                <input
                                  placeholder="Email"
                                  value={this.state.pEmail}
                                  name="pEmail"
                                  onChange={this.handleInputChange}
                                />
                              ) : (
                                <div className="perInfFix">
                                  {this.state.pEmail}
                                </div>
                              )}
                            </li>
                            <li className="pb-2">
                              <div className="details-left">Phone Number </div>
                              <div>
                                {this.state.perInf ? (
                                  <input
                                    placeholder="phoneNo"
                                    name="phone"
                                    onChange={this.handleInputChange}
                                    value={this.state.phone}
                                  />
                                ) : (
                                  <span className="perInfFix">
                                    {this.state.phone}
                                  </span>
                                )}
                                <span className="green-color ml-5">
                                  <img src={tick} alt="approver" />
                                  &nbsp; Verified
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="btnLightBlue mt-5">
                        <div className="go-sub-cls">
                          <button
                            type="submit"
                            className={
                              this.state.accountStatus
                                ? 'btn mr-3'
                                : 'btn-disable mr-3'
                            }
                            data-toggle="modal"
                            data-target="change-ac"
                            onClick={this.continue}
                            disabled={!this.state.accountStatus}
                          >
                            CONTINUE
                          </button>
                          <span
                            className={
                              this.state.accountStatus
                                ? 'btnSave'
                                : 'btnSave-disable'
                            }
                            onClick={() => this.saveProfile()}
                            disabled={!this.state.accountStatus}
                          >
                            SAVE PROFILE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 p-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2 className="head-title">Bricktrade Wallet</h2>
                      <div className="profile-section">
                        <div className="clearfix">
                          <p className="wallet-txt">
                            Enter email here before admin creats a wallet
                            address and verify it
                          </p>
                        </div>
                        <div className="clearfix dblock">
                          <div className="position-relative float-left">
                            <input
                              type="email"
                              name="inputMail"
                              id="textEmail"
                              value={this.state.inputMail}
                              onChange={this.handleInputChange}
                              readOnly={!this.state.accountStatus}
                              placeholder="A.rose@ace.com"
                              className={
                                this.state.mailMatch
                                  ? 'mailDefaut'
                                  : this.state.popupEmail ||
                                    this.state.toggleEmail
                                  ? 'mailError'
                                  : 'mailDefaut'
                              }
                            />
                            <div className="correct-sign">
                              <img
                                src={
                                  this.state.mailMatch
                                    ? tick
                                    : this.state.popupEmail ||
                                      this.state.toggleEmail
                                    ? cross
                                    : ''
                                }
                                align="icon"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="wallet-txt mt-4 mb-0">Wallet Address</p>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-4">
                      <h2 className="head-title">Account information</h2>
                      <div className="profile-section">
                        <div className="ac-info position-relative">
                          <ul className="mb-0">
                            <li>
                              <div>First name</div>
                              {this.state.accInf ? (
                                <input
                                  value={this.state.firstName}
                                  name="firstName"
                                  onChange={this.handleInputChange}
                                />
                              ) : (
                                <div>{this.state.firstName}</div>
                              )}
                            </li>
                            <li>
                              <div>Surname</div>
                              {this.state.accInf ? (
                                <input
                                  value={this.state.secondName}
                                  name="secondName"
                                  onChange={this.handleInputChange}
                                />
                              ) : (
                                <div>{this.state.secondName}</div>
                              )}
                            </li>
                          </ul>

                          {this.state.accInf ? (
                            <div
                              className="ac-edit-details float-right"
                              onClick={() => {
                                // {
                                //   this.setState({ accInf: !this.state.accInf });
                                // }
                              }}
                            >
                              <a style={{ cursor: 'pointer' }}> SAVE</a>
                            </div>
                          ) : (
                            <div
                              className="ac-edit-details float-right"
                              onClick={() =>
                                this.setState({ accInf: !this.state.accInf })
                              }
                            >
                              <a style={{ cursor: 'pointer' }}> EDIT</a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <h2 className="head-title">Address information</h2>
                      <div className="profile-section pl-2">
                        <div className="clearfix">
                          <div className="edit-details float-right">
                            {this.state.perAdd ? (
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  {
                                    this.setState({
                                      // perAdd: !this.state.perAdd,
                                      toggleAdd1: false,
                                      toggleAdd2: false,
                                      toggleCountry: false,
                                      togglePostal: false,
                                      toggleCity: false
                                    });
                                  }
                                }}
                              >
                                SAVE
                              </div>
                            ) : (
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() =>
                                  this.setState({ perAdd: !this.state.perAdd })
                                }
                              >
                                EDIT
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row pt-2">
                          <div className="col-md-12">
                            {this.state.perAdd ? (
                              <div className="form-input">
                                <input
                                  type="text"
                                  value={this.state.add1}
                                  onChange={this.handleInputChange}
                                  name="add1"
                                  id="textE"
                                  placeholder="Address 1"
                                />
                              </div>
                            ) : (
                              <div
                                className={
                                  this.state.toggleAdd1
                                    ? 'personalErrorDiv mb-3'
                                    : 'personalDiv mb-3'
                                }
                              >
                                {this.state.add1 ? (
                                  this.state.add1
                                ) : (
                                  <span style={{ color: '#7C8495' }}>
                                    Address 1
                                  </span>
                                )}
                                <div className="personalErrorDivImg">
                                  {this.state.toggleAdd1 && (
                                    <img src={cross} align="icon" />
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="col-md-12">
                            {this.state.perAdd ? (
                              <div className="form-input">
                                <input
                                  type="text"
                                  value={this.state.add2}
                                  onChange={this.handleInputChange}
                                  name="add2"
                                  id="textE"
                                  placeholder="Address 2"
                                />
                              </div>
                            ) : (
                              <div
                                className={
                                  this.state.toggleAdd2
                                    ? 'personalErrorDiv mb-3'
                                    : 'personalDiv mb-3'
                                }
                              >
                                {this.state.add2 ? (
                                  this.state.add2
                                ) : (
                                  <span style={{ color: '#7C8495' }}>
                                    Address 2
                                  </span>
                                )}
                                <div className="personalErrorDivImg">
                                  {this.state.toggleAdd2 && (
                                    <img src={cross} align="icon" />
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="col-md-6">
                            <div className="form-input10">
                              {this.state.perAdd ? (
                                <select
                                  id="sel1"
                                  name="country"
                                  onChange={this.handleInputChange}
                                >
                                  <option>{this.state.country}</option>
                                  {COUNTRY_LIST.map(c => (
                                    <option id={c}>{c}</option>
                                  ))}
                                </select>
                              ) : (
                                <div className="personalDiv mb-3">
                                  {this.state.country}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input">
                              {this.state.perAdd ? (
                                <input
                                  type="text"
                                  name="city"
                                  id="textE"
                                  placeholder="City/Town"
                                  value={this.state.city}
                                  onChange={this.handleInputChange}
                                />
                              ) : (
                                <div
                                  className={
                                    this.state.toggleCity
                                      ? 'personalErrorDiv mb-3'
                                      : 'personalDiv mb-3'
                                  }
                                >
                                  {this.state.city ? (
                                    this.state.city
                                  ) : (
                                    <span style={{ color: '#7C8495' }}>
                                      City/Town
                                    </span>
                                  )}
                                  <div className="personalErrorDivImg">
                                    {this.state.toggleCity && (
                                      <img src={cross} align="icon" />
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input">
                              {this.state.perAdd ? (
                                <input
                                  type="text"
                                  value={this.state.postal}
                                  onChange={this.handleInputChange}
                                  name="postal"
                                  id="textE"
                                  placeholder="Postal code"
                                />
                              ) : (
                                <div
                                  className={
                                    this.state.togglePostal
                                      ? 'personalErrorDiv mb-3'
                                      : 'personalDiv mb-3'
                                  }
                                >
                                  {this.state.postal ? (
                                    this.state.postal
                                  ) : (
                                    <span style={{ color: '#7C8495' }}>
                                      Postal Code
                                    </span>
                                  )}
                                  <div className="personalErrorDivImg">
                                    {this.state.togglePostal && (
                                      <img src={cross} align="icon" />
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.countryModel()}
            {/* save data popup  */}
            <div
              id="save-prof"
              className={this.state.popup ? 'modal  close-ac' : 'd-none'}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="text-center modal-content">
                  <span className="close-btn text-right">
                    <img
                      src={crossBtn}
                      alt="close"
                      className="close"
                      onClick={this.crossClick}
                    />
                  </span>
                  <div>
                    <img src={crossRed} alt="clode" />
                  </div>
                  <h3 className="m-0 pt-4 pb-3 upld-hd">
                    {this.state.popupEmail
                      ? 'Email not matched'
                      : 'Save the information'}
                  </h3>
                  <p className="modal-desc">
                    {this.state.popupEmail
                      ? 'Edit your personal information by right email information'
                      : 'Save the changes you have made before continue to next step or data will be lost'}
                  </p>

                  <div className="d-flex submit-cancl-btn mt-2">
                    {!this.state.popupEmail ? (
                      <button
                        type="submit"
                        className="submit-btn btn"
                        onClick={this.onSave}
                        style={{ width: '211px' }}
                      >
                        SAVE
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="submit-btn btn"
                        onClick={this.changeMail}
                        style={{ width: '211px' }}
                      >
                        CHANGE
                      </button>
                    )}
                    <button
                      type="button"
                      className="cancelButton"
                      onClick={this.cancelPopup}
                    >
                      Cancel
                    </button>
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

export default connect(mapStateToProps, null)(BusinessKycStarted);
