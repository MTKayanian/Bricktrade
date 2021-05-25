import React, { Component } from 'react';
import './Individual_KYC_Pending.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import clock from '../../images/clock.png';
import positiveVote from '../../images/positive-vote.png';
import { getkycSavedDataApi } from '../../actions/kycDocumentation';

import { Redirect } from 'react-router-dom';

class IndividualKYCPending extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getkycSavedDataApi();
  }

  render() {
    console.log('role is :', this.props.userReducer.role);
    let kycCurrentStatus = '';

    if (this.props.kycDocReducer.KYCGetSaveData.data) {
      if (
        this.props.kycDocReducer.KYCGetSaveData.data.KYC_status == 'pending'
      ) {
        kycCurrentStatus = 'PENDING';
      } else if (
        this.props.kycDocReducer.KYCGetSaveData.data.KYC_status == 'Approved'
      ) {
        kycCurrentStatus = 'COMPLETED';
      } else {
        kycCurrentStatus = 'PENDING';
      }
    }

    return (
      <div className="flex justify-content-center pending">
        <div className="light_bg kycPending">
          <div className="row m-0 justify-content-center align-items-center">
            <div className="col-md-12 col-lg-12 mb-5 mar-pos">
              <div className="d-flex align-items-center flex-wrap kycClassPending">
                <div className="col-md-5 mb-3 mr-sm-auto text-right">
                  <img
                    className="postive-icon"
                    src={kycCurrentStatus == 'COMPLETED' ? positiveVote : clock}
                    alt="clock"
                  />
                </div>
                <div className="col-md-7 mb-3">
                  <div className="business_kyc_pending">
                    <p>{`Your Personal KYC is ${kycCurrentStatus}`}</p>
                    <Link
                      to="/BusinessProfile"
                      className="btn1"
                      style={{ color: 'white' }}
                    >
                      {'Go to Personal profile'}
                    </Link>
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch, props) => ({
  getkycSavedDataApi: () => dispatch(getkycSavedDataApi())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualKYCPending);
