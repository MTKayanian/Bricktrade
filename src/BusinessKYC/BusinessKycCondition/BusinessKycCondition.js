import React, { Component } from 'react';
import { COUNTRY_LIST } from '../../app.constant';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { getItem } from '../../utils/localStore';
import Note from '../../utils/Note';
import axios from 'axios';
import { Base_Url } from '../../app.constant';
import $ from 'jquery';

import Swal from 'sweetalert2';

import pencil from '../../images/pencil.png';
import profile from '../../images/profile-photo.png';
import tick from '../../images/approved-tick.png';
import cross from '../../images/red-cross.png';
import crossBtn from '../../images/close-btn.png';
import crossRed from '../../images/cross.png';

import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { getkycSavedDataApi } from '../../actions/kycDocumentation';

import './BusinessKycCondition.css';
import '../kycResBus.css';

class BusinessKycCondition extends Component {
  state = {};

  componentDidMount() {
    $('.loading-container').fadeIn();
    this.props
      .getkycSavedDataApi()
      .then(res => {
        if (this.props.kycDocReducer.KYCGetSaveData.data) {
          if (
            this.props.kycDocReducer.KYCGetSaveData.data.saveStatus == false
          ) {
            $('.loading-container').fadeOut();
            this.props.history.push('/KycStarted');
          } else if (
            this.props.kycDocReducer.KYCGetSaveData.data.saveStatus == true
          ) {
            $('.loading-container').fadeOut();
            this.props.history.push('/kycPending');
          } else {
            $('.loading-container').fadeOut();
            this.props.history.push('/KycStarted');
          }
        } else {
          $('.loading-container').fadeOut();
          this.props.history.push('/KycStarted');
        }
      })
      .catch(res => {
        $('.loading-container').fadeOut();
        this.props.history.push('/KycStarted');
      });

    // console.log("No of pages : length ",check,this.state.allData.length);
  }

  render() {
    //   console.log('state*****', this.state);
    if (localStorage.getItem('accessToken') === '') {
      return <Redirect to="/" />;
    } else
      return (
        <>
          <div className="container-fluid dashboard-content">
            <div className="row pb-4"></div>
          </div>
        </>
      );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch, props) => ({
  getkycSavedDataApi: () => dispatch(getkycSavedDataApi())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessKycCondition);
