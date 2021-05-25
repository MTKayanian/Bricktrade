import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery';
import Swal from 'sweetalert2';
import {
  savekycDocSaveApi,
  savekycDocSubmitApi,
  getkycSavedDataApi,
} from '../../actions/kycDocumentation';
import axios from 'axios';
import { Base_Url } from '../../app.constant';
import logo from '../../images/logo1.png';
import upload from '../../images/upload-icon.png';
import uploadFile from '../../images/upload-file.png';
import fileIcon from '../../images/file-icon.png';
import close from '../../images/close.png';
import crossImg from '../../images/red-cross.png';

import DatePicker from 'react-datepicker';
import { TEST_SITE_KEY } from '../../app.constant';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import './BusinessKycDocumentation.css';
// import "../kycBusiness.css";
import '../kycResBus.css';
import ReuseableBox from './ReuseableBox';

class BusinessKycDocumentation extends Component {
  state = {
    tabToggle: 'idCard' /*For tab Toggle*/,
    idCard: '',
    passport: '',
    license: '',
    idDate: new Date(),
    passDate: new Date(),
    licDate: new Date(),
    modal: false /* For modal screen*/,
    idCard: '' /*For idcard value change*/,
    image: [] /*for storing images on first browse*/,
    image1: [] /*For storing images on second browse */,
    imageObj: [] /*for storing images file object on first browse*/,
    imageObj1: [] /*For storing images file object on second browse */,

    image2: [] /*for storing images on first browse*/,
    image21: [] /*For storing images on second browse */,
    imageObj2: [] /*for storing images file object on first browse*/,
    imageObj21: [] /*For storing images file object on second browse */,

    image3: [] /*for storing images on first browse*/,
    image31: [] /*For storing images on second browse */,
    imageObj3: [] /*for storing images file object on first browse*/,
    imageObj31: [] /*For storing images file object on second browse */,

    img1: '' /*for image object */,
    imageR: '' /*for image */,
    browse: 0 /*for which browse is open */,
    startDate: '',
    toggleSideMenu: false,
  };

  componentDidMount() {
    //this.getKycSaveHandler();
  }

  getKycSaveHandler = () => {
    this.props
      .getkycSavedDataApi()
      .then((res) => {
        if (this.props.kycDocReducer.KYCGetSaveData.data) {
          if (this.props.kycDocReducer.KYCGetSaveData.data.saveStatus == true) {
            this.props.history.push('/kycPending');
          }
        }
      })
      .catch();
  };

  onSubmit = () => {
    if (this.state.idCard == '') {
      Swal.fire({
        type: 'error',
        text: 'Please Filled ID Card No',
      });
      return;
    }
    if (this.state.passport == '') {
      Swal.fire({
        type: 'error',
        text: 'Please Filled Passport No',
      });
      return;
    }
    if (this.state.license == '') {
      Swal.fire({
        type: 'error',
        text: 'Please Filled License No',
      });
      return;
    }

    let newIdMonth = this.state.idDate.getMonth() + 1;
    let newPMonth = this.state.passDate.getMonth() + 1;
    let newDMonth = this.state.licDate.getMonth() + 1;
    const data = new FormData();

    this.state.idCard && data.append('id_number', this.state.idCard);
    this.state.idDate &&
      data.append(
        'id_expiration_date',
        `${this.state.idDate.getDay()}/${
          newIdMonth < 10 ? '0' + newIdMonth : newIdMonth
        }/${this.state.idDate.getFullYear().toString().slice(2, 4)}`
      );

    if (this.state.imageObj.length == 2) {
      data.append('id_front_side', this.state.imageObj[0]);
      data.append('id_back_side', this.state.imageObj[1]);
    } else if (this.state.imageObj.length == 1) {
      data.append('id_front_side', this.state.imageObj[0]);
    }

    this.state.passport && data.append('passport_number', this.state.passport);
    this.state.passDate &&
      data.append(
        'passport_expiration_date',
        `${this.state.passDate.getDay()}/${
          newPMonth < 10 ? '0' + newPMonth : newPMonth
        }/${this.state.passDate.getFullYear().toString().slice(2, 4)}`
      );

    if (this.state.imageObj2.length == 2) {
      data.append('passport_front_side', this.state.imageObj2[0]);
      data.append('passport_back_side', this.state.imageObj2[1]);
    } else if (this.state.imageObj2.length == 1) {
      data.append('passport_front_side', this.state.imageObj2[0]);
    }

    this.state.licDate &&
      data.append(
        'DL_expiration_date',
        `${this.state.licDate.getDay()}/${
          newDMonth < 10 ? '0' + newDMonth : newDMonth
        }/${this.state.licDate.getFullYear().toString().slice(2, 4)}`
      );

    if (this.state.imageObj3.length == 2) {
      data.append('DL_front_side', this.state.imageObj3[0]);
      data.append('DL_back_side', this.state.imageObj3[1]);
    } else if (this.state.imageObj3.length == 1) {
      data.append('DL_front_side', this.state.imageObj3[0]);
    }

    this.state.license && data.append('DL_number', this.state.license);

    if (this.state.imageObj1.length == 2) {
      data.append('address_proof', this.state.imageObj1[0]);
    } else if (this.state.imageObj1.length == 1) {
      data.append('address_proof', this.state.imageObj1[0]);
    }

    console.log('OUR SUBMIT API DATA::', ...data);
    let kyc = '';

    if (localStorage.getItem('role') == 'business') {
      kyc = 'businessKYC';
    } else if (localStorage.getItem('role') == 'individual') {
      kyc = 'individualKYC';
    }

    $('.loading-container').fadeIn();
    axios({
      url: `${Base_Url}/${kyc}/updateDocumentSubmit`,
      method: 'post',
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
      data,
    })
      .then((response) => {
        console.log(response);
        if (response.data.statusCode === 200) {
          this.props.history.push('/kycPending');
        }
        $('.loading-container').fadeOut();
        this.setState({
          idCard: '',
          passport: '',
          license: '',
          idDate: new Date(),
          passDate: new Date(),
          licDate: new Date(),
          idCard: '' /*For idcard value change*/,
          image: [] /*for storing images on first browse*/,
          image1: [] /*For storing images on second browse */,
          imageObj: [] /*for storing images file object on first browse*/,
          imageObj1: [] /*For storing images file object on second browse */,

          image2: [] /*for storing images on first browse*/,
          image21: [] /*For storing images on second browse */,
          imageObj2: [] /*for storing images file object on first browse*/,
          imageObj21: [] /*For storing images file object on second browse */,

          image3: [] /*for storing images on first browse*/,
          image31: [] /*For storing images on second browse */,
          imageObj3: [] /*for storing images file object on first browse*/,
          imageObj31: [] /*For storing images file object on second browse */,

          img1: '' /*for image object */,
          imageR: '' /*for image */,
          browse: 0 /*for which browse is open */,
          startDate: '',
        });
      })
      .catch((error) => {
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
        $('.loading-container').fadeOut();
      });
  };

  toggleSideMenuHandler = () => {
    if (
      this.state.idCard != '' &&
      this.state.passport != '' &&
      this.state.license != '' &&
      this.state.imageObj[0] &&
      this.state.imageObj[1] &&
      this.state.imageObj2[0] &&
      this.state.imageObj2[1] &&
      this.state.imageObj3[0] &&
      this.state.imageObj3[1] &&
      this.state.imageObj1[0] &&
      this.state.imageObj21[0] &&
      this.state.imageObj31[0]
    ) {
      this.setState({ toggleSideMenu: true });
    } else {
      this.setState({ toggleSideMenu: false });
    }
  };
  tabToggleHandle = (value) => {
    this.setState({ tabToggle: value });
  };

  changeHandler = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    // this.toggleSideMenuHandler();

    this.setState({ [e.target.name]: e.target.value }, () => {
      this.toggleSideMenuHandler();
    });
  };

  changeModelhandler = (browse) => {
    this.setState({ modal: true, browse });
  };

  changeModelhandlerFalse = () => {
    this.setState({ modal: false });
  };

  handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ imageR: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.setState({
      [e.target.name]: e.target.files[0],
    });
    this.toggleSideMenuHandler();
  };
  uploadButton = () => {
    if (this.state.imageR === '') {
      return;
    }
    if (this.state.browse === 0) {
      if (this.state.imageR.includes('data:application/pdf')) {
        // this.state.image.push('./images/pdf.png');
        // this.state.imageObj.push(this.state.img1);
      } else {
        this.state.image.push(this.state.imageR);
        this.state.imageObj.push(this.state.img1);
      }
    }
    if (this.state.browse === 1) {
      if (this.state.imageR.includes('data:application/pdf')) {
        // this.state.image1.push('./images/pdf.png');
        // this.state.imageObj1.push(this.state.img1);
      } else {
        this.state.image1.push(this.state.imageR);
        this.state.imageObj1.push(this.state.img1);
      }
    }
    this.setState({ modal: false, imageR: '', img1: '' });
    this.toggleSideMenuHandler();
  };

  onImageCancel = (index, browse) => {
    console.log('clicked', index, browse);
    if (browse === 0) {
      const imageLocal = [
        ...this.state.image.slice(0, index),
        ...this.state.image.slice(index + 1, this.state.image.length),
      ];
      const imageObjLocal = [
        ...this.state.imageObj.slice(0, index),
        ...this.state.imageObj.slice(index + 1, this.state.imageObj.length),
      ];
      this.setState({ image: imageLocal, imageObj: imageObjLocal });
    }
    if (browse === 1) {
      const imageLocal = [
        ...this.state.image1.slice(0, index),
        ...this.state.image1.slice(index + 1, this.state.image1.length),
      ];
      const imageObjLocal = [
        ...this.state.imageObj1.slice(0, index),
        ...this.state.imageObj1.slice(index + 1, this.state.imageObj1.length),
      ];
      this.setState({ image1: imageLocal, imageObj1: imageObjLocal });
    }
    this.toggleSideMenuHandler();
  };

  // ===================================

  uploadButton2 = () => {
    if (this.state.imageR === '') {
      return;
    }
    if (this.state.browse === 0) {
      if (this.state.imageR.includes('data:application/pdf')) {
        // this.state.image2.push('./images/pdf.png');
        // this.state.imageObj2.push(this.state.img1);
      } else {
        this.state.image2.push(this.state.imageR);
        this.state.imageObj2.push(this.state.img1);
      }
    }
    if (this.state.browse === 1) {
      if (this.state.imageR.includes('data:application/pdf')) {
        // this.state.image21.push('./images/pdf.png');
        // this.state.imageObj21.push(this.state.img1);
      } else {
        this.state.image21.push(this.state.imageR);
        this.state.imageObj21.push(this.state.img1);
      }
    }
    this.setState({ modal: false, imageR: '', img1: '' });
    this.toggleSideMenuHandler();
  };

  onImageCancel2 = (index, browse) => {
    console.log('clicked', index, browse);
    if (browse === 0) {
      const imageLocal = [
        ...this.state.image2.slice(0, index),
        ...this.state.image2.slice(index + 1, this.state.image.length),
      ];
      const imageObjLocal = [
        ...this.state.imageObj2.slice(0, index),
        ...this.state.imageObj2.slice(index + 1, this.state.imageObj.length),
      ];
      this.setState({ image2: imageLocal, imageObj2: imageObjLocal });
    }
    if (browse === 1) {
      const imageLocal = [
        ...this.state.image21.slice(0, index),
        ...this.state.image21.slice(index + 1, this.state.image1.length),
      ];
      const imageObjLocal = [
        ...this.state.imageObj21.slice(0, index),
        ...this.state.imageObj21.slice(index + 1, this.state.imageObj1.length),
      ];
      this.setState({ image21: imageLocal, imageObj21: imageObjLocal });
    }
    this.toggleSideMenuHandler();
  };

  // =====================================

  uploadButton3 = () => {
    if (this.state.imageR === '') {
      return;
    }
    if (this.state.browse === 0) {
      if (this.state.imageR.includes('data:application/pdf')) {
        // this.state.image3.push('./images/pdf.png');
        // this.state.imageObj3.push(this.state.img1);
      } else {
        this.state.image3.push(this.state.imageR);
        this.state.imageObj3.push(this.state.img1);
      }
    }
    if (this.state.browse === 1) {
      if (this.state.imageR.includes('data:application/pdf')) {
        // this.state.image31.push('./images/pdf.png');
        // this.state.imageObj31.push(this.state.img1);
      } else {
        this.state.image31.push(this.state.imageR);
        this.state.imageObj31.push(this.state.img1);
      }
    }
    this.setState({ modal: false, imageR: '', img1: '' });
    this.toggleSideMenuHandler();
  };

  onImageCancel3 = (index, browse) => {
    console.log('clicked', index, browse);
    if (browse === 0) {
      const imageLocal = [
        ...this.state.image3.slice(0, index),
        ...this.state.image3.slice(index + 1, this.state.image.length),
      ];
      const imageObjLocal = [
        ...this.state.imageObj3.slice(0, index),
        ...this.state.imageObj3.slice(index + 1, this.state.imageObj.length),
      ];
      this.setState({ image3: imageLocal, imageObj3: imageObjLocal });
    }
    if (browse === 1) {
      const imageLocal = [
        ...this.state.image31.slice(0, index),
        ...this.state.image31.slice(index + 1, this.state.image1.length),
      ];
      const imageObjLocal = [
        ...this.state.imageObj31.slice(0, index),
        ...this.state.imageObj31.slice(index + 1, this.state.imageObj1.length),
      ];
      this.setState({ image31: imageLocal, imageObj31: imageObjLocal });
    }
    this.toggleSideMenuHandler();
  };

  // =============================================

  handleChangeDate = (date) => {
    console.log(
      'Our new date is : ',
      `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2, 4)}`
    );
    this.setState({
      idDate: date,
    });
  };
  handleChangeDate1 = (date) => {
    console.log(
      'Our new date is : ',
      `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2, 4)}`
    );
    this.setState({
      passDate: date,
    });
  };
  handleChangeDate2 = (date) => {
    console.log(
      'Our new date is : ',
      `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2, 4)}`
    );
    this.setState({
      licDate: date,
    });
  };

  onSaveLater = (e) => {
    e.preventDefault();
    let newIdMonth = this.state.idDate.getMonth() + 1;
    let newPMonth = this.state.passDate.getMonth() + 1;
    let newDMonth = this.state.licDate.getMonth() + 1;
    const data = new FormData();

    this.state.idCard && data.append('id_number', this.state.idCard);
    this.state.idDate &&
      data.append(
        'id_expiration_date',
        `${this.state.idDate.getDay()}/${
          newIdMonth < 10 ? '0' + newIdMonth : newIdMonth
        }/${this.state.idDate.getFullYear().toString().slice(2, 4)}`
      );

    if (this.state.imageObj.length == 2) {
      data.append('id_front_side', this.state.imageObj[0]);
      data.append('id_back_side', this.state.imageObj[1]);
    } else if (this.state.imageObj.length == 1) {
      data.append('id_front_side', this.state.imageObj[0]);
    }

    this.state.passport && data.append('passport_number', this.state.passport);
    this.state.passDate &&
      data.append(
        'passport_expiration_date',
        `${this.state.passDate.getDay()}/${
          newPMonth < 10 ? '0' + newPMonth : newPMonth
        }/${this.state.passDate.getFullYear().toString().slice(2, 4)}`
      );

    if (this.state.imageObj2.length == 2) {
      data.append('passport_front_side', this.state.imageObj2[0]);
      data.append('passport_back_side', this.state.imageObj2[1]);
    } else if (this.state.imageObj2.length == 1) {
      data.append('passport_front_side', this.state.imageObj2[0]);
    }

    this.state.licDate &&
      data.append(
        'DL_expiration_date',
        `${this.state.licDate.getDay()}/${
          newDMonth < 10 ? '0' + newDMonth : newDMonth
        }/${this.state.licDate.getFullYear().toString().slice(2, 4)}`
      );

    if (this.state.imageObj3.length == 2) {
      data.append('DL_front_side', this.state.imageObj3[0]);
      data.append('DL_back_side', this.state.imageObj3[1]);
    } else if (this.state.imageObj3.length == 1) {
      data.append('DL_front_side', this.state.imageObj3[0]);
    }

    this.state.license && data.append('DL_number', this.state.license);

    if (this.state.imageObj1.length == 2) {
      data.append('address_proof', this.state.imageObj1[0]);
    } else if (this.state.imageObj1.length == 1) {
      data.append('address_proof', this.state.imageObj1[0]);
    }

    console.log('OUR SAVE API DATA::', ...data);
    $('.loading-container').fadeIn();

    this.props.savekycDocSaveApi(data).then((res) => {
      this.setState({
        idCard: '',
        passport: '',
        license: '',
        idDate: new Date(),
        passDate: new Date(),
        licDate: new Date(),
        idCard: '' /*For idcard value change*/,
        image: [] /*for storing images on first browse*/,
        image1: [] /*For storing images on second browse */,
        imageObj: [] /*for storing images file object on first browse*/,
        imageObj1: [] /*For storing images file object on second browse */,

        image2: [] /*for storing images on first browse*/,
        image21: [] /*For storing images on second browse */,
        imageObj2: [] /*for storing images file object on first browse*/,
        imageObj21: [] /*For storing images file object on second browse */,

        image3: [] /*for storing images on first browse*/,
        image31: [] /*For storing images on second browse */,
        imageObj3: [] /*for storing images file object on first browse*/,
        imageObj31: [] /*For storing images file object on second browse */,

        img1: '' /*for image object */,
        imageR: '' /*for image */,
        browse: 0 /*for which browse is open */,
        startDate: '',
      });
      $('.loading-container').fadeOut();
    });
  };

  render() {
    console.log('KYC doc parent ****', this.state);
    //console.log('KYC doc parent ****', this.state.imageObj);

    if (localStorage.getItem('accessToken') === '') {
      return <Redirect to="/" />;
    } else
      return (
        <div className="container-fluid dashboard-content documentationkyckyc">
          <div className="row">
            <div className=" col-12">
              <div className="content-head pb-4">
                <div className="left-content">
                  <div className="row">
                    <h4>
                      <span style={{ color: '#0077DC' }}>
                        {this.props.userReducer.role === 'individual'
                          ? 'Individual  KYC/AML'
                          : 'Business KYC'}{' '}
                        >{' '}
                      </span>
                      <span> Documentation</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div
                className="project-left left-source-list left-documention-div"
                style={{ height: '150px' }}
              >
                <ul>
                  <li className="active sideMenuActive">
                    {this.props.userReducer.role === 'individual' ? (
                      <div className="sideMenuActive">Individual Profile</div>
                    ) : (
                      <div className="sideMenuActive">Business Profile</div>
                    )}
                  </li>
                  <li
                    className={this.state.toggleSideMenu ? 'active' : 'current'}
                  >
                    <div
                      className={
                        this.state.toggleSideMenu ? 'sideMenuActive' : ''
                      }
                    >
                      Documentation
                    </div>
                  </li>
                </ul>
                <ul></ul>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="business-profile">
                <div className="profile-form">
                  <div className="row">
                    <div className="col-12 clearfix pb-3">
                      <div className="float-left">
                        <h3 className="head-main">1. Required Documents</h3>
                      </div>
                      <div className="edit-details float-right">
                        <a href="#">EDIT</a>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-3 kycDocTab">
                    <div className="col-lg-12">
                      <div className="tab">
                        <ul className="nav document-tab">
                          <li className="nav-item1">
                            <a
                              href="#"
                              className={classnames('nav-link tablinks', {
                                active: this.state.tabToggle === 'idCard',
                              })}
                              onClick={() => this.tabToggleHandle('idCard')}
                            >
                              ID CARDS
                            </a>
                          </li>
                          <li className="nav-item1">
                            <a
                              href="#"
                              className={classnames('nav-link tablinks', {
                                active: this.state.tabToggle === 'passPort',
                              })}
                              onClick={() => this.tabToggleHandle('passPort')}
                            >
                              PASSPORT
                            </a>
                          </li>
                          <li className="nav-item1">
                            <a
                              href="#"
                              className={classnames('nav-link tablinks', {
                                active:
                                  this.state.tabToggle === 'drivingLicense',
                              })}
                              onClick={() =>
                                this.tabToggleHandle('drivingLicense')
                              }
                            >
                              DRIVING LICENSE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {this.state.tabToggle == 'idCard' ? (
                    <ReuseableBox
                      changeHandler={this.changeHandler}
                      changeModelhandler={this.changeModelhandler}
                      handleFileChange={this.handleFileChange}
                      uploadButton={this.uploadButton}
                      imageName={this.state.img1.name}
                      modal={this.state.modal}
                      image={[...this.state.image]}
                      image1={[...this.state.image1]}
                      onImageCancel={(id, browse) =>
                        this.onImageCancel(id, browse)
                      }
                      changeModelFalse={this.changeModelhandlerFalse}
                      dateChange={this.handleChangeDate}
                      date={this.state.idDate}
                      activeTab={this.state.tabToggle}
                      inputValue={this.state.idCard}
                    />
                  ) : this.state.tabToggle == 'passPort' ? (
                    <ReuseableBox
                      changeHandler={this.changeHandler}
                      changeModelhandler={this.changeModelhandler}
                      handleFileChange={this.handleFileChange}
                      uploadButton={this.uploadButton2}
                      imageName={this.state.img1.name}
                      modal={this.state.modal}
                      image={[...this.state.image2]}
                      image1={[...this.state.image21]}
                      onImageCancel={(id, browse) =>
                        this.onImageCancel2(id, browse)
                      }
                      changeModelFalse={this.changeModelhandlerFalse}
                      dateChange={this.handleChangeDate1}
                      date={this.state.passDate}
                      activeTab={this.state.tabToggle}
                      inputValue={this.state.passport}
                    />
                  ) : (
                    <ReuseableBox
                      changeHandler={this.changeHandler}
                      changeModelhandler={this.changeModelhandler}
                      handleFileChange={this.handleFileChange}
                      uploadButton={this.uploadButton3}
                      imageName={this.state.img1.name}
                      modal={this.state.modal}
                      image={[...this.state.image3]}
                      image1={[...this.state.image31]}
                      onImageCancel={(id, browse) =>
                        this.onImageCancel3(id, browse)
                      }
                      changeModelFalse={this.changeModelhandlerFalse}
                      dateChange={this.handleChangeDate2}
                      date={this.state.licDate}
                      activeTab={this.state.tabToggle}
                      inputValue={this.state.license}
                    />
                  )}
                  <div className="pt-4">
                    <div className="btnLightBlue">
                      <div className="go-sub-cls">
                        <span>
                          <Link to="/KycStarted">Go Back</Link>
                        </span>
                        <button
                          type="submit"
                          className="btn"
                          onClick={this.onSubmit}
                        >
                          SUBMIT
                        </button>
                      </div>
                      <div className="save-cls" style={{ cursor: 'pointer' }}>
                        <a onClick={this.onSaveLater}>Save to complete later</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch, props) => ({
  savekycDocSaveApi: (data) => dispatch(savekycDocSaveApi(data)),
  savekycDocSubmitApi: (data) => dispatch(savekycDocSubmitApi(data)),
  getkycSavedDataApi: () => dispatch(getkycSavedDataApi()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessKycDocumentation);
