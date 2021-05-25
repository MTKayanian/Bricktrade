import React, { Component } from 'react';
import "./Business_profile_overview.css";
import { Link } from 'react-router-dom';

import Pencil from '../../images/pencil.png';
import ProfilePhoto from '../../images/profile-photo.png';
import CyanCircle from '../../images/cyan-circle.png';
import Dots from '../../images/dots.png';





class Business_profile_overview extends  Component{
	constructor(props) {
		super(props);
		this.state = {

		};
	}

  render(){
     return(
        <>
        
        <div className="row bg-bp m-0">

            <div className="col-lg-10 col-md-10">
			   	<div className="row">
			   		<div className="col-lg-12">
			   			<div className="dashboard-main">
			   				<div>
			   					<ol className="breadcrumbs p-0">
			   						<li className="active-link"><Link to="/">KYC Business</Link></li>
			   						<li><Link to="/#">Get Started</Link></li>
			   					</ol>
			   				</div>
			   			</div>
			   		</div>
			  	</div>
			  	<div className="row ">
			  		<div className="col-lg-1"></div>
			  		<div className="col-lg-5 mt-4">
			   			<div className="profile-section h-100">
			   				<div className="clearfix pb-4">
		   						<div className="float-left"><h3 className="head-main">Business Profile</h3></div>
		   						<div className="edit-details float-right"><Link to="/Business_profile">EDIT</Link></div>
		   					</div>
		   					<div className="clearfix d-flex align-items-center">
		   						<div className="float-left position-relative">
		   							<img src={ProfilePhoto} id="blah" alt="Profile picture" width="100" height="100" />
		   							<div className="upload-btn-wrapper">
									  	<button className="upload-btn"><img src={ Pencil } alt="icon" /></button>
                                        <input type="file" onChange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])" />
									</div>
		   						</div>
		   						<div className="float-left pl-4">
		   							<h3 className="fs-20 m-0">Bricktrade</h3>
		   							<p className="fs-14 m-0">Joined in 2020</p>
		   						</div>
		   					</div>
			   			</div>
			   		</div>
			   		<div className="col-lg-5 mt-4">
			   			<div className="profile-section h-100">
			   				<div className="clearfix pb-2">
		   						<div className="float-left"><h3 className="head-main">Business Address</h3></div>
		   						<div className="edit-details float-right"><Link to="/">EDIT</Link></div>
		   					</div>
		   					<div>
		   						<p className="fs-14 mb-2">You have 1 address</p>
		   					</div>
		   					<div className="border1"></div>
		   					<div className="mt-2 mb-32">
		   						<h4 className="sub-head m-0">2 Hearbert Street, Newtown, NSW 2042 <br/> London, UK </h4>
		   					</div>
		   					<div>
		   						<p className="m-0">Primary Address, Billing Address</p>
		   					</div>
			   			</div>
			   		</div>
			   		<div className="col-lg-1"></div>
			  	</div>
			  	<div className="row">
			  		<div className="col-lg-1"></div>
			  		<div className="col-lg-5 mt-4">
			  			<div className="profile-section h-100 p-0 position-relative">
			   				<div className="clearfix pb-2 pt-3 pl-32 pr-3">
		   						<div className="float-left">
		   							<h3 className="head-main">Account Options</h3>
		   						</div>
		   						<div className="edit-details float-right">
		   							<img src={Dots} alt="setting icon" />
	   							</div>
		   					</div>
		   					<div className="pl-32">
		   						<p className="m-0">Timezone</p>
		   						<h3 className="mb-10 sub-head">GMT-08:00</h3>
		   						<p className="m-0">Nationality</p>
		   						<h3 className="mb-10 sub-head">United Kingdom</h3>
		   						<p className="m-0">Merchant ID</p>
		   						<h3 className="mb-10 sub-head">HU798784HGSNB</h3>
		   						<form>
		   							<div className="clearfix align-items-center d-flex pb-2">
		   								<div className="float-left inputFancy w-90">
		   									<fieldset>
											  	<label htmlFor="password-input">Passport</label>
											  	<input type="password" name="password" id="password-input" inputMode="numeric" minLength="6" maxLength="6" size="6" />
											</fieldset>
		   								</div>
			   							<div className="float-right w-10 mr-3">
			   								<Link to="/" className="edit-details">ADD</Link>
			   							</div>
		   							</div>
		   						</form>
		   					</div>
		   					<div className="red-msg">
				   				<Link to="/" className="red-text">Close Account</Link>
		   					</div>
			   			</div>
			  		</div>
			  		<div className="col-lg-5 mt-4">
			  			<div className="box">
			  				<div className="col-lg-12 p-0">
			  					<div className="profile-section">
			  						<div className="clearfix pb-3">
				   						<div className="float-left">
				   							<h3 className="head-main">Business Email Address</h3>
				   							<p className="sub-head">taz.king@bricktrade.co.uk</p>
				   						</div>
				   						<div className="edit-details float-right">
				   							<img src={Dots} alt="setting icon" />
			   							</div>
				   					</div>
				   					<div className="">
				   						<p className="fs-14 m-0 pb-2">Primary</p>
				   						<p className="sub-head">To update an email address, you must have at least 2 email address on the file</p>
				   					</div>
			  					</div>
			  				</div>
			  				<div className="col-lg-12 mt-4 p-0">
			  					<div className="profile-section">
			  						<div className="clearfix">
				   						<div className="float-left">
				   							<h3 className="head-main">Phone Number</h3>
				   							<p className="sub-head">+44 05*** ***56 <img src={CyanCircle} alt="icon" /></p>
				   							<p className="fs-14 m-0 pt-3">Mobile, Primary</p>
				   						</div>
				   						<div className="edit-details float-right">
				   							<img src={Dots} alt="setting icon" />
			   							</div>
				   					</div>
			  					</div>
			  				</div>
			  			</div>
			  		</div>
			  	</div>
			  	<div className="row mt-4 mb-5">
			  		<div className="col-lg-1"></div>
			  		<div className="col-lg-5">
			  			<div className="profile-section h-100 p-0 position-relative">
			   				<div className="clearfix pb-2 pt-3 pl-32 pr-3">
		   						<div className="float-left"><h3 className="head-main">Company Information</h3></div>
		   						<div className="edit-details float-right">
		   							<img src={Dots} alt="setting icon" />
	   							</div>
		   					</div>
		   					<div className="pl-32 pb-4">
		   						<p className="m-0">Company Name</p>
		   						<h3 className="mb-10 sub-head">Audley Estate</h3>
		   						<p className="m-0">Company Registration Number</p>
		   						<h3 className="sub-head">BR-87345278</h3>	
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

export default Business_profile_overview;
