import React, { Component } from 'react';

import { COUNTRY_LIST } from '../../app.constant';
import { connect } from 'react-redux';
import $ from 'jquery';
import modalCross from '../../images/cross.png';
import pending from '../../images/pending.png';
import approved from '../../images/approved-tick.png';
import cross from '../../images/red-cross.png';
import pencil from '../../images/pencil.png';
import profile from '../../images/profile-photo.png';
import crossBtn from '../../images/close-btn.png';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { getItem } from '../../utils/localStore';
import { Base_Url,Img_Url } from '../../app.constant';

import { Link } from 'react-router-dom';
import {
  getkycSavedDataApi,
  updateKycProfileApi,
  userKycCloseAcountApi,
} from '../../actions/kycDocumentation';

import './BusinessProfile.css';
import '../kycResBus.css';

class BusinessProfile extends Component {
  state = {
    image: '',
    attachment: null,
    name: '',
    address: '',
    time: 'GMT-08:00',
    country: '',
    phone: '',
    walletAdd: '',
    busAccId: '',
    email: '',
    compName: 'ACE PROPERTY',
    kycStatus: 'incomplete',
    joinDate: '',
    profile: false,
    busAcc: false,
    perAdd: false,
    busEmail: false,
    compProfile: false,
    modal: false,
  };

  componentDidMount() {
    let TOKEN = getItem('accessToken');
    axios({
      method: 'POST',
      url: `${Base_Url}/user/business/getProfile`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        authorization: TOKEN,
      },
      data: {
        user_id: '',
      },
    })
      .then((response) => {
        var newadd1 =
          response.data.data.address1 != undefined
            ? response.data.data.address1 + ' , '
            : '';
        var newadd2 =
          response.data.data.address2 == undefined
            ? ''
            : response.data.data.address2;

        this.setState({
          name:
            response.data.data.first_name + ' ' + response.data.data.last_name,
          address: newadd1 + newadd2,
          country: response.data.data.country,
          email: response.data.data.email,
          city: response.data.data.city,
          phone: response.data.data.phone,
          date: response.data.data.date_of_birth,
          busAccId: response.data.data.business_account_id,
          compName: response.data.data.company_name,
          createdAt: response.data.data.createdAt,
          kycStatus: response.data.data.KYC_status,
          attachment: response.data.data.profile_photo,
        });
      })
      .catch((error) => {
        console.log('error is here', error);
      });

    this.props
      .getkycSavedDataApi()
      .then((res) => {
        this.setState({
          walletAdd: this.props.kycDocReducer.KYCGetSaveData.data
            .wallet_address,
        });
      })
      .catch((error) => {
        console.log('error is here', error);
      });
  }

  onSaveHandler = () => {
    //console.log("image***",this.state);
    //console.log("attachment***",this.state.attachment);

    var newAdd1 = this.state.address.split(',')[0]
      ? this.state.address.split(',')[0]
      : '';
    var newAdd2 = this.state.address.split(',')[1]
      ? this.state.address.split(',')[1]
      : '';

    const data = new FormData();
    this.state.name && data.append('first_name', this.state.name.split(' ')[0]);
    this.state.name && data.append('last_name', this.state.name.split(' ')[1]);
    this.state.email && data.append('email', this.state.email);
    this.state.address && data.append('address1', newAdd1);
    this.state.address && data.append('address2', newAdd2);
    this.state.country && data.append('country', this.state.country);
    this.state.phone && data.append('phone', this.state.phone);

    if (typeof this.state.attachment != 'string') {
      this.state.attachment &&
        data.append('profile_photo', this.state.attachment);
    } else {
      //this.state.image && data.append('profile_photo', this.state.image);
    }

    console.log('OUR SAVE API DATA::', ...data);
    $('.loading-container').fadeIn();
    this.props.updateKycProfileApi(data).then(() => {
      window.location.href = '/BusinessProfile';
      $('.loading-container').fadeOut();
    });
    $('.loading-container').fadeOut();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };
  closeAccount = () => {
    this.props.userKycCloseAcountApi().then((res) => {
      localStorage.clear();
      this.props.history.push('/');
    });
  };
  render() {
    console.log('************', this.state);
    return (
      <>
        <div className="container-fluid dashboard-content businessProfile">
          <div className="row pb-4">
            <div className="col-md-12">
              <div className="row">
                <div className="content-head pt-0 pb-0 col-12">
                  <div className="left-content">
                    <div className="row">
                      <h4>
                        <span style={{ color: '#0077DC' }}>Settings > </span>
                        <span>
                          {this.props.userReducer.role === 'individual'
                            ? 'Individual profile'
                            : 'Business profile'}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-profile-width">
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="profile-section h-100">
                  <div className="clearfix pb-4">
                    <div className="float-left">
                      <h3 className="head-main">
                        {this.props.userReducer.role === 'individual'
                          ? 'individual Profile'
                          : 'Business Profile'}
                      </h3>
                    </div>

                    <div className="edit-details float-right">
                      {this.state.profile ? (
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            {
                              this.onSaveHandler();
                              this.setState({ profile: !this.state.profile });
                            }
                          }}
                        >
                          SAVE
                        </div>
                      ) : (
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            this.setState({ profile: !this.state.profile })
                          }
                        >
                          EDIT
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="clearfix d-flex align-items-center">
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

                      {this.state.profile ? (
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
                      <h3
                        className="fs-20 m-0"
                        style={{ textTransform: 'capitalize' }}
                      >
                        {this.state.profile ? (
                          <input
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                            className="mb-2"
                          />
                        ) : (
                          this.state.name
                        )}
                      </h3>
                      <h3 className="fs-20 m-0"></h3>

                      <p className="fs-14-profile m-0">
                        Joined in{' '}
                        {this.state.joinDate ? this.state.joinDate : '2020'}
                      </p>
                    </div>
                  </div>
                  <div className="kyc-aml-app" style={{ marginRight: '110px' }}>
                    <span>
                      <img
                        src={
                          this.state.kycStatus == 'Approved'
                            ? '/ImagesAdmin/approved-tick.png'
                            : this.state.kycStatus == 'pending'
                            ? '/ImagesAdmin/pending(2).png'
                            : this.state.kycStatus == 'incomplete'
                            ? '/ImagesAdmin/red-cross1.png'
                            : ''
                        }
                        alt="cross"
                      />
                    </span>
                    &nbsp;
                    <span
                      className={
                        this.state.kycStatus == 'approved'
                          ? 'kyc-aml-app'
                          : this.state.kycStatus == 'pending'
                          ? 'orange-color'
                          : this.state.kycStatus == 'incomplete'
                          ? 'red-color'
                          : ''
                      }
                    >
                      {' '}
                      KYC/AML{' '}
                      {this.state.kycStatus
                        ? this.state.kycStatus
                        : 'incomplete'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="profile-section h-100">
                  <div className="clearfix pb-4">
                    <div className="float-left">
                      <h3 className="head-main">Personal Address</h3>
                    </div>

                    <div className="edit-details float-right">
                      {this.state.perAdd ? (
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            {
                              this.onSaveHandler();
                              this.setState({ perAdd: !this.state.perAdd });
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
                  <div>
                    <p className="fs-14-profile mb-2">You have 1 address</p>
                  </div>
                  <div className="border1"></div>
                  <div className="mt-2 mb-32">
                    <h4 className="sub-head m-0">
                      {this.state.perAdd ? (
                        <input
                          value={this.state.address}
                          style={{ width: '100%' }}
                          className="p-2"
                          name="address"
                          onChange={this.handleInputChange}
                        />
                      ) : (
                        this.state.address
                      )}
                    </h4>
                    <h4 className="sub-head m-0"></h4>
                  </div>
                  <div>
                    <p className="m-0 fs-14-profile">
                      Primary Address, Billing Address
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="profile-section h-100 position-relative">
                  <div className="clearfix pb-2">
                    <div className="float-left">
                      <h3 className="head-main">
                        {this.props.userReducer.role === 'individual'
                          ? 'individual Account information'
                          : 'Business Account information'}
                      </h3>
                    </div>

                    <div className="edit-details float-right">
                      {this.state.busAcc ? (
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            {
                              this.onSaveHandler();
                              this.setState({ busAcc: !this.state.busAcc });
                            }
                          }}
                        >
                          SAVE
                        </div>
                      ) : (
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            this.setState({ busAcc: !this.state.busAcc })
                          }
                        >
                          EDIT
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 head-main">Timezone</h3>
                    <h3 className="mb-10 sub-head">
                      {this.state.busAcc ? (
                        <input
                          value={this.state.time}
                          name="time"
                          onChange={this.handleInputChange}
                        />
                      ) : (
                        this.state.time
                      )}
                    </h3>
                    <h3 className="mb-1 head-main">Country</h3>
                    <h3 className="mb-10 sub-head">
                      {this.state.busAcc ? (
                        <select
                          id="sel1"
                          name="country"
                          onChange={this.handleInputChange}
                        >
                          <option>{this.state.country}</option>
                          {COUNTRY_LIST.map((c) => (
                            <option id={c}>{c}</option>
                          ))}
                        </select>
                      ) : (
                        this.state.country
                      )}
                    </h3>
                    <h3 className="mb-1 head-main">Phone Number</h3>
                    <h3 className="mb-10 sub-head">
                      {this.state.busAcc ? (
                        <input
                          value={this.state.phone}
                          name="phone"
                          onChange={this.handleInputChange}
                        />
                      ) : (
                        this.state.phone
                      )}
                      <span className="kyc-aml-app mt-0">
                        <img src={approved} alt="pending" />
                        &nbsp; Approved{' '}
                      </span>
                    </h3>
                    <p className="m-0 head-main">Mobile, Primary</p>
                  </div>
                  <div className="mt-3">
                    <h3 className="head-main mb-2">
                      Bricktrade Wallet address{' '}
                    </h3>
                    <p className="sub-head mb-2"> Wallet address</p>
                    <h3 className="mb-1 sub-head incmplt">
                      {this.state.busAcc ? (
                        <input
                          value={this.state.walletAdd}
                          name="walletAdd"
                          onChange={this.handleInputChange}
                          readOnly={true}
                        />
                      ) : this.state.walletAdd != '' ? (
                        this.state.walletAdd
                      ) : (
                        ''
                      )}
                      {'      '}

                      {this.state.walletAdd == undefined ||
                      this.state.walletAdd == '' ? (
                        <span className="wallet-incomplete-profile mt-0">
                          <img src={cross} alt="cross" />
                          &nbsp; Incomplete
                        </span>
                      ) : (
                        <span
                          className="kyc-aml-app mt-0"
                          style={{ color: '#3DD8BC' }}
                        >
                          <img src={approved} alt="cross" />
                          &nbsp; Approved
                        </span>
                      )}
                    </h3>
                  </div>
                  <div className="mt-3">
                    <h3 className="head-main mb-2">
                      {' '}
                      {this.props.userReducer.role === 'individual'
                        ? 'Individual ACCOUNT ID'
                        : 'Business ACCOUNT ID'}{' '}
                    </h3>
                    <p className="sub-head mb-2">
                      {' '}
                      {this.props.userReducer.role === 'individual'
                        ? 'Individual ACCOUNT ID'
                        : 'Business ACCOUNT ID'}{' '}
                    </p>
                    <h3 className="mb-1 sub-head incmplt">
                      {this.state.busAcc ? (
                        <input
                          value={this.state.busAccId}
                          name="busAccId"
                          onChange={this.handleInputChange}
                          readOnly={true}
                        />
                      ) : (
                        this.state.busAccId
                      )}{' '}
                      {this.state.busAccId == undefined ||
                      this.state.busAccId == '' ? (
                        <span className="wallet-incomplete-profile mt-0">
                          <img src={cross} alt="cross" />
                          &nbsp; Incomplete
                        </span>
                      ) : (
                        <span
                          className="kyc-aml-app mt-0"
                          style={{ color: '#3DD8BC' }}
                        >
                          <img src={approved} alt="cross" />
                          &nbsp; Approved
                        </span>
                      )}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="row">
                  <div className="col-lg-12 p-0">
                    <div className="profile-section">
                      <div className="clearfix pb-3" style={{ width: '100%' }}>
                        <div className="float-left">
                          <h3 className="head-main">Email Address</h3>
                          <p className="sub-head1">
                            {this.state.busEmail ? (
                              <input
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                              />
                            ) : (
                              this.state.email
                            )}
                          </p>
                        </div>

                        <div className="edit-details float-right">
                          {this.state.busEmail ? (
                            <div
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                {
                                  this.onSaveHandler();
                                  this.setState({
                                    busEmail: !this.state.busEmail,
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
                                this.setState({
                                  busEmail: !this.state.busEmail,
                                })
                              }
                            >
                              EDIT
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="m-0">
                        <p className="fs-14-profile m-0">Primary</p>
                        <p className="sub-head">
                          To update an email address, you must have at least 2
                          email address on the file
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      this.props.userReducer.role === 'individual'
                        ? 'd-none'
                        : 'col-lg-12 mt-4 p-0'
                    }
                  >
                    {/* <div className="profile-section">
                      <div className="clearfix pb-3">
                        <div className="float-left">
                          <h3 className="head-main">Company Profile </h3>
                        </div>
                        <div
                          className="edit-details float-right"
                          style={{ cursor: 'pointer' }}
                        >
                          <a>Go to Profile</a>
                        </div>
                      </div>
                      <div className="col-lg-12 p-0">
                        <p className="fs-14 m-0 pb-1">Company Name</p>
                        <h3 className="mb-10 sub-head">
                          {this.state.compName}{' '}
                          <span className="red-color">
                            <img src={cross} alt="approver" />
                            &nbsp; Disabled{' '}
                          </span>
                        </h3>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-lg-12 p-0">
                    <div
                      className="close-profl-ac"
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.setState({ modal: true })}
                    >
                      <a>Close Account</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--close account popup--> */}
        <div
          id="closeAccount"
          className={this.state.modal ? 'modal close-ac' : 'd-none'}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="text-center modal-content">
              <span
                className="close-btn text-right"
                onClick={() => this.setState({ modal: false })}
              >
                <img
                  src={crossBtn}
                  alt="close"
                  className="close"
                  data-dismiss="modal"
                />
              </span>
              <div>
                <img src={modalCross} alt="clode" />
              </div>
              <h3 className="m-0 pt-4 pb-3 upld-hd">Close account</h3>
              <p className="modal-desc">
                Are you sure you want to close your account?
              </p>

              <div className="flex justify-content-between">
                <button
                  type="submit"
                  className="submit-btn btn"
                  onClick={this.closeAccount}
                >
                  Closing Account
                </button>
                <button
                  type="button"
                  className="btn close cancl-btn"
                  onClick={() => this.setState({ modal: false })}
                >
                  Cancel
                </button>
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
  KYCGetSaveData: state.kycDocReducer.KYCGetSaveData,
});

const mapDispatchToProps = (dispatch, props) => ({
  getkycSavedDataApi: () => dispatch(getkycSavedDataApi()),
  userKycCloseAcountApi: () => dispatch(userKycCloseAcountApi()),
  updateKycProfileApi: (data) => dispatch(updateKycProfileApi(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);
