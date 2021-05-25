import React, { Component } from 'react';
import './Header.css';
import '../../ricktrade.css';

import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png';
import search_icon from '../../images/search-icon.png';
import main_logo from '../../images/main-logo.png';
import profile1 from '../../images/profile1.png';
import refresh from '../../images/refresh.png';
import share from '../../images/share.png';
import up_arow from '../../images/up-arow.png';
import inbox from '../../images/inbox.png';
import notificaion from '../../images/notificaion.png';
import user_img from '../../images/user-img.png';
import dropdown from '../../images/dropdown.png';
import $ from 'jquery';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Siderbar from '../Sidebar/Sidebar';
import { Img_Url } from '../../app.constant';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      notifyactive: false,
    };
  }
  logOut = () => {
    localStorage.clear();
    this.props.history.push('/');
  };

  profileHandler = () => {
    if (localStorage.getItem('toggleSidebar') == '1') {
      window.location.href = '/BusinessProfile';
    } else {
      window.location.href = '#';
    }
  };

  render() {
    console.log("this.props.userReducer.details.profile_photo",this.props.userReducer.details.profile_photo)
    return (
      <>
        <div className="container-fluid dashboard-content">
          <div className="">
            <header className="fixed-top">
              <div className="row mt-3 mb-3 m-reverse">
                <div className="col-md-1">
                  <div className="menu-wrap">
                    <Link
                      to="#"
                      className={
                        this.props.stateSidebar
                          ? 'menu-link active'
                          : 'menu-link'
                      }
                      onClick={this.props.onsidebar}
                      style={{ marginTop: '10px' }}
                    >
                      {' '}
                      <span>&#9776;</span>{' '}
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 p-0">
                  <div className="menu-left">
                    <Link to="#">
                      <img
                        src={main_logo}
                        alt="logo"
                        className="img-fluid header-logo-dashboard"
                      />
                    </Link>
                    {/* <div className="right-search">
                                <form className="search-form">
                                   <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Search by name or tag " />
                                         <button className="search-form-btn" type="Submit"><img
                                             src={search_icon} alt="search" /></button>
                                   </div>
                                </form>
                             </div> */}
                  </div>
                </div>
                <div className="col-md-3  d-md-block">
                  <div className="row justify-content-center r-custom-padd">
                    <div className="search">
                      <form className="search-form">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name or tag "
                          />
                          <button className="search-form-btn" type="Submit">
                            <img src={search_icon} alt="search" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <div className="row justify-content-end r-custom-padd menu-right">
                    {/* <div className="p-right-28">
                                <Link to="#"><img src={refresh} alt="refresh icon" /></Link>
                             </div>
                             <div className="p-left-28 p-right-28">
                                <Link to="#"><img src={share} alt="share icon" /></Link>
                             </div>
                             <div className="p-left-28 p-right-32 border-right">
                                <Link to="#"><img src={up_arow} alt="up-arow icon" /></Link>
                             </div> */}
                    <div className="p-left-32 p-right-32 position-relative border-left">
                      <Link to="#" className="popup">
                        <img src={inbox} alt="inbox" />
                      </Link>
                    </div>
                    <div className="p-right-32 position-relative">
                      <Link to="#" className="popup">
                        <img src={notificaion} alt="notificaion" />
                        <span className="notificaion-spn">4</span>
                      </Link>
                    </div>
                    <div className="position-relative mr-2">
                      <div className="user-img">
                        <img
                          src= {
                            localStorage.getItem('toggleSidebar') == '1'
                              ? this.props.userReducer.details.profile_photo != undefined
                                ? Img_Url + this.props.userReducer.details.profile_photo
                                : profile1
                              : profile1
                          }
                          alt="user image"
                          className="img-fluid"
                          style={{ width: '40px', height: '40px' }}
                        />
                      </div>
                    </div>
                    <div
                      className="account-d dropdown"
                      onClick={() => {
                        this.setState({ toggleMenu: !this.state.toggleMenu });
                      }}
                    >
                      <div className="dropdown-buttn1">
                        <span
                          className="popup"
                          style={{
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                          }}
                        >
                          {localStorage.getItem('toggleSidebar') === '2'
                            ? 'Admin'
                            : this.props.userReducer.details.first_name
                            ? `${this.props.userReducer.details.first_name} ${this.props.userReducer.details.last_name}`
                            : 'Bricktrade'}

                          <img
                            src={dropdown}
                            style={{ paddingLeft: '10px' }}
                            alt="destination"
                          />
                        </span>
                        <div
                          className={
                            'popupbox dropdown-menu ' +
                            (this.state.toggleMenu ? 'show' : 'd-none')
                          }
                          id="myPopup"
                        >
                          <ul className="account">
                            <li
                              onClick={this.profileHandler}
                              style={{ cursor: 'pointer' }}
                            >
                              <Link> My Profile</Link>
                            </li>

                            <li
                              onClick={this.logOut}
                              style={{ cursor: 'pointer' }}
                            >
                              <Link to="/SignIn">Logout</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default compose(withRouter, connect(mapStateToProps))(Header);
