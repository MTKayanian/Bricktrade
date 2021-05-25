import React, { Component } from 'react';
import "../ricktrade.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import chat from '../../images/chat.png'
import Shape from '../../images/Shape.png'



class Welcome extends  Component{

  render(){
     return(
        <>
            <div className="container-fluid">
               <div className="row flex-row-reverse">
                  <div className="col-lg-6 terms-bg-image">
                     <div className="txt-over">
                        <span><img src={Shape} alt="qoute" className="img-fluid"/></span>
                        <p>Investment in property via Bricktrade has been one of the best decision I ever made.</p>
                     </div>
                     <div className="comment-box">
                        <Link to=""><img src={chat} alt="icon" /></Link>
                     </div>
                  </div>
                  <div className="col-lg-6 m-top-58">
                     <div className="left-panel">
                        <div className="head-logo"><img src={logo} alt="logo" className="img-fluid"/></div>
                        <h2>Welcome to Bricktrade</h2>
                        <p>Join & discover a better way</p>
                        <div className="reg-btn">
                           <Link to="/SignIn" className="access-btn mr-3">SIGN IN</Link>
                           <Link to="/signup" className="access-btn">Become a MEMBER</Link>
                        </div>
                        <p>Join via social media</p>
                        <ul className="via-social">
                           <li><Link to="#" className="access-btn"><i className="fa fa-facebook mr-3"></i>FACEBOOK</Link></li>
                           <li><Link to="#" className="access-btn"><i className="fa fa-twitter mr-3"></i>TWITTER</Link></li>
                           <li><Link to="#" className="access-btn"><i className="fa fa-google-plus mr-3"></i>GOOGLE</Link></li>
                        </ul>
                        <div className="at-bottom">
                           <div className="bottom-menu text-left">
                              <ul className="p-0">
                                 <li><Link to="#">Help</Link></li>
                                 <li><Link to="#">Support</Link></li>
                                 <li><Link to="#">Contact</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>	
                  </div>			
               </div>						
            </div>
        </>

     )
  }

}

export default Welcome;
