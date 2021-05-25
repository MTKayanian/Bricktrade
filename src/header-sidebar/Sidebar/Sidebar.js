import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import overview from '../../images/overview.png';
import wallet from '../../images/wallet.png';
import send_request from '../../images/send-request.png';
import transaction from '../../images/transaction.png';
import portfolio from '../../images/portfolio.png';
import market_cap from '../../images/market-cap.png';
import bank from '../../images/bank.png';
import invoice from '../../images/invoice.png';
import setting from '../../images/setting.png';
import support from '../../images/support.png';
import { connect } from 'react-redux';
import $ from 'jquery';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: true,
      custMng: false,
      kyc: false,
      applyKyc: false,
      kycEnquiry: false,
      projects: false,
      ListProject: false,
      ListNewProject: false,
      NewWallet: false,
      NewAssetListing: false,
      wallet: false,
      newAsstLis: false,
      wallets: false,
      SndReq: false,
      transaction: false,
      portfolio: false,
      marketCap: false,
      bank: false,
      invoice: false,
      setting: false,
      perProfile: false,
      support: false,
      cusMngToggle: false,
      kycTabChange: false
    };

    this.defaultState = {
      overview: false,
      custMng: false,
      kyc: false,
      applyKyc: false,
      kycEnquiry: false,
      projects: false,
      ListProject: false,
      ListNewProject: false,
      NewWallet: false,
      NewAssetListing: false,
      wallet: false,
      newAsstLis: false,
      wallets: false,
      SndReq: false,
      transaction: false,
      portfolio: false,
      marketCap: false,
      bank: false,
      invoice: false,
      setting: false,
      perProfile: false,
      support: false
    };
  }
  sidebarActive = input => {
    if (input == 'overview') {
      this.setState({
        ...this.defaultState,
        overview: true
      });
    }
    if (input == 'custMng') {
      this.setState({
        ...this.defaultState,
        custMng: true
      });
    }
    if (input == 'kyc') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        kyc: true
      });
    }

    if (input == 'applyKyc') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        kyc: false,
        applyKyc: true
      });
    }
    if (input == 'kycEnquiry') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        kyc: false,
        kycEnquiry: true
      });
    }

    if (input == 'projects') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        projects: true
      });
    }

    if (input == 'ListProject') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        projects: false,
        ListProject: true
      });
    }

    if (input == 'ListNewProject') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        projects: false,
        ListNewProject: true
      });
    }

    if (input == 'NewWallet') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        NewWallet: true
      });
    }

    if (input == 'NewAssetListing') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        NewAssetListing: true
      });
    }

    if (input == 'wallet') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        wallet: true
      });
    }
    if (input == 'newAsstList') {
      this.setState({
        ...this.defaultState,
        custMng: true,
        newAsstLis: true
      });
    }
    if (input == 'wallets') {
      this.setState({
        ...this.defaultState,
        wallets: true
      });
    }
    if (input == 'SndReq') {
      this.setState({
        ...this.defaultState,
        SndReq: true
      });
    }
    if (input == 'transaction') {
      this.setState({
        ...this.defaultState,
        transaction: true
      });
    }
    if (input == 'portfolio') {
      this.setState({
        ...this.defaultState,
        portfolio: true
      });
    }
    if (input == 'marketCap') {
      this.setState({
        ...this.defaultState,
        marketCap: true
      });
    }
    if (input == 'bank') {
      this.setState({
        ...this.defaultState,
        bank: true
      });
    }
    if (input == 'invoice') {
      this.setState({
        ...this.defaultState,
        invoice: true
      });
    }
    if (input == 'setting') {
      this.setState({
        ...this.defaultState,
        setting: true
      });
    }
    if (input == 'perProfile') {
      this.setState({
        ...this.defaultState,
        setting: true,
        perProfile: true
      });
    }
    if (input == 'support') {
      this.setState({
        ...this.defaultState,
        support: true
      });
    }
  };
  componentDidMount() {
    $(document).ready(function() {
      $('.has_menu').click(function() {
        $(this).toggleClass('open');
        $(this)
          .next('ul')
          .slideToggle();
      });
    });
    if (window.location.pathname === '/Overview') {
      this.setState({
        ...this.defaultState,
        overview: true
      });
    }
    if (
      window.location.pathname === '/KycStarted' ||
      window.location.pathname === '/KycDocumentation' ||
      window.location.pathname === '/kycPending' ||
      window.location.pathname === '/Profile'
    ) {
      this.setState({
        ...this.defaultState,
        custMng: true,
        kyc: true,
        cusMngToggle: true
      });
    }

    // this.props
    //   .getkycSavedDataApi()
    //   .then(res => {
    //     if (this.props.kycDocReducer.KYCGetSaveData.data) {
    //       if (this.props.kycDocReducer.KYCGetSaveData.data.saveStatus == true) {
    //         this.setState({ kycTabChange: true });
    //       }
    //     }
    //   })
    //   .catch();
  }
  componentWillUpdate() {
    if (this.state.pathname !== window.location.pathname) {
      this.setState({ pathname: window.location.pathname });
    }
  }

  render() {
    console.log('sidebar state :', window.location.pathname);
    return (
      <div
        className={
          this.props.sidebar
            ? 'col-md-2 col-lg-2 p-0 sidebar active'
            : 'col-md-2 col-lg-2 p-0 sidebar d-none'
        }
        style={{width:'220px'}}
      >
        <div className="menu-container">
          <nav id="menu" className="" role="navigation">
            <ul  style={{width:'220px'}}>
              <li>
                <Link
                  to="/Overview"
                  className={
                    this.state.overview
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  onClick={() => this.sidebarActive('overview')}
                >
                  <span>
                    <img src={overview} alt="overview" />
                  </span>
                  Overview
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className={
                    this.state.custMng
                      ? 'd-flex align-items-center has_menu activeSidebarChild'
                      : 'd-flex align-items-center has_menu'
                  }
                  onClick={() => this.sidebarActive('custMng')}
                >
                  <span>
                    <img src={wallet} alt="wallet" />{' '}
                  </span>
                  Customer Management
                </Link>

                <ul>
                  <li>
                    <Link
                      to={'/BusinessKycCondition'}
                      onClick={() => this.sidebarActive('kyc')}
                      className={
                        this.state.custMng && this.state.kyc
                          ? 'd-flex align-items-center has_menu activeNestedSideBar'
                          : 'd-flex align-items-center has_menu activeNestedSideBar2'
                      }
                    >
                      <span>KYC/AML</span>
                    </Link>

                    <ul>
                      <li>
                        <Link
                          to={'/BusinessKycCondition'}
                          onClick={() => this.sidebarActive('applyKyc')}
                          className={
                            this.state.custMng && this.state.applyKyc
                              ? 'activeNestedSideBar'
                              : 'activeNestedSideBar2'
                          }
                        >
                          <span>Apply KYC/AML</span>
                        </Link>
                      </li>{' '}
                      <li>
                        <Link
                          to="#"
                          onClick={() => this.sidebarActive('kycEnquiry')}
                          className={
                            this.state.custMng && this.state.kycEnquiry
                              ? 'activeNestedSideBar'
                              : 'activeNestedSideBar2'
                          }
                        >
                          KYC/AML Enquiry
                        </Link>
                      </li>
                    </ul>
                  </li>{' '}
                  {localStorage.getItem('role') == 'business' ? (
                    <li>
                      <Link
                        onClick={() => this.sidebarActive('projects')}
                        className={
                          this.state.custMng && this.state.projects
                            ? 'd-flex align-items-center has_menu activeNestedSideBar'
                            : 'd-flex align-items-center has_menu activeNestedSideBar2'
                        }
                      >
                        Projects
                      </Link>

                      <ul>
                        <li>
                          <Link
                            to="/BusinessUserProject"
                            onClick={() => this.sidebarActive('ListProject')}
                            className={
                              this.state.custMng && this.state.ListProject
                                ? 'activeNestedSideBar'
                                : 'activeNestedSideBar2'
                            }
                          >
                            Listed Projects
                          </Link>
                        </li>{' '}
                        <li>
                          <Link
                            to="/ProjectStarted"
                            onClick={() => this.sidebarActive('ListNewProject')}
                            className={
                              this.state.custMng && this.state.ListNewProject
                                ? 'activeNestedSideBar'
                                : 'activeNestedSideBar2'
                            }
                          >
                            List New Project
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    ''
                  )}{' '}
                  <li>
                    <Link
                      to="#"
                      onClick={() => this.sidebarActive('NewWallet')}
                      className={
                        this.state.custMng && this.state.NewWallet
                          ? 'd-flex align-items-center activeNestedSideBar'
                          : 'd-flex align-items-center  activeNestedSideBar2'
                      }
                    >
                      <span>Wallet</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      onClick={() => this.sidebarActive('NewAssetListing')}
                      className={
                        this.state.custMng && this.state.NewAssetListing
                          ? 'd-flex align-items-center activeNestedSideBar'
                          : 'd-flex align-items-center  activeNestedSideBar2'
                      }
                    >
                      <span>New Asset Listing</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="#"
                  className={
                    this.state.SndReq
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  onClick={() => this.sidebarActive('SndReq')}
                >
                  <span>
                    <img src={send_request} alt="send-request" />
                  </span>
                  Send/Request
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className={
                    this.state.transaction
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  onClick={() => this.sidebarActive('transaction')}
                >
                  <span>
                    <img src={transaction} alt="transaction" />
                  </span>
                  Transaction
                </Link>
              </li>
              <li>
                <Link
                  className={
                    this.state.portfolio
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  to="#"
                  onClick={() => this.sidebarActive('portfolio')}
                >
                  <span>
                    <img src={portfolio} alt="portfolio" />
                  </span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className={
                    this.state.marketCap
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  to="#"
                  onClick={() => this.sidebarActive('marketCap')}
                >
                  <span>
                    <img src={market_cap} alt="market-cap" />
                  </span>
                  Market Cap
                </Link>
              </li>
              <li>
                <Link
                  className={
                    this.state.bank
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  to="#"
                  onClick={() => this.sidebarActive('bank')}
                >
                  <span>
                    <img src={bank} alt="bank" />
                  </span>
                  Bank
                </Link>
              </li>
              <li>
                <Link
                  className={
                    this.state.invoice
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  to="#"
                  onClick={() => this.sidebarActive('invoice')}
                >
                  <span>
                    <img src={invoice} alt="invoice" />
                  </span>
                  Invoice
                </Link>
              </li>
              <li>
                <Link
                  className={
                    this.state.setting
                      ? 'activeSidebar d-flex align-items-center has_menu'
                      : 'd-flex align-items-center has_menu'
                  }
                  to="#"
                  onClick={() => this.sidebarActive('setting')}
                >
                  <span>
                    <img src={setting} alt="setting" />
                  </span>
                  Setting
                </Link>
                <ul className={this.state.setting ? 'activeSidebar' : ''}>
                  <li>
                    <Link
                      className={
                        this.state.perProfile ? ' activeSidebarChild' : ''
                      }
                      to="/BusinessProfile"
                      onClick={() => this.sidebarActive('perProfile')}
                    >
                      Personal Profile
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={
                    this.state.support
                      ? 'activeSidebar d-flex align-items-center'
                      : 'd-flex align-items-center'
                  }
                  to="#"
                  onClick={() => this.sidebarActive('support')}
                >
                  <span>
                    <img src={support} alt="support" />
                  </span>
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});


export default connect(mapStateToProps, null)(Sidebar);
