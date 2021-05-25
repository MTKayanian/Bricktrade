import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  
} from 'react-router-dom';
import axios from 'axios';
// import ReactGA from 'react-ga';
import GA from './utils/GoogleAnalytics';

import Welcome from './login_signup/welcome/welcome';
import Signup from './login_signup/signup/signup';
import SignupTerm from './login_signup/signup-term/signup-term';
import Mobverify from './login_signup/mob-verify/mob-verify';
// import FaceRecognition from "./login_signup/face-recognize/face-recognize";
// import AdjustFace from "./login_signup/adjust-face/adjust-face";
// import ErrorScan from "./login_signup/error-scan/error-scan";
// import PerfactFace from "./login_signup/perfact-face/perfact-face";
// import Emailverify from "./login_signup/email-verify/email-verify";
// import Thankyou from "./login_signup/thankyou/thankyou";
import SignIn from './login_signup/signin/signin';
import EmailcodeVerify from './login_signup/email-code-verify/email-code-verify';
import ResetEmailVerification from './login_signup/reset-email-verification/reset-email-verification';
import ResetPassword from './login_signup/reset-password/reset-password';
import ResetPasswordSuccessfull from './login_signup/reset-password-successfull/reset-password-successfull';

import DataSlider from './login_signup/data-slider/data-slider';

import Overview from './Overview/Overview';
import Business_profile from './Business_profile/Business_profile_dashboard/Business_profile';
import Business_KYC_Pending from './Business_profile/Business_KYC_Pending/Business_KYC_Pending';
import Business_profile_overview from './Business_profile/Business_profile_overview/Business_profile_overview';
import BusinessAccount from './BusinessKYC/BusinessAccount/BusinessAccount';
import BusinessKycCondition from './BusinessKYC/BusinessKycCondition/BusinessKycCondition'
import BusinessInfo from './BusinessKYC/BusinessAccount/BusinessInfo/BusinessInfo';
import AccountHolderinfo from './BusinessKYC/BusinessAccount/AccountHolderinfo/AccountHolderinfo';
import BusinessSolutionTab from './BusinessKYC/BusinessAccount/BusinessSolutionTab/BusinessSolutionTab';
import BusinessPaymentTab from './BusinessKYC/BusinessAccount/BusinessPaymentTab/BusinessPaymentTab';
import BankPopup from './BusinessKYC/BusinessAccount/BusinessPaymentTab/BankPopup';
import Incomeassets from './BusinessKYC/BusinessAccount/Incomeassets/Incomeassets';
import IncomeassetsTab from './BusinessKYC/BusinessAccount/IncomeassetsTab/IncomeassetsTab';
import IncomeassetsTab2 from './BusinessKYC/BusinessAccount/IncomeassetsTab2/IncomeassetsTab2';
import Banking_overview from './Banking/Banking_overview/Banking_overview';
import Funding_source from './Banking/Funding_source/Funding_source';
import Bankingsidebar from './Banking/Bankingsidebar/Bankingsidebar';
import AddCard from './Banking/AddCard/AddCard';
import AddBankAccount from './Banking/AddBankAccount/AddBankAccount';
import ConfirmBank from './Banking/ConfirmBank/ConfirmBank';
import BankStatus from './Banking/BankStatus/BankStatus';
import BankDetail from './Banking/BankDetail/BankDetail';
import PersonalUserOverview from './PersonalUserOverview/PersonalUserOverview';
import IndividualProfileDashboard from './IndividualKYC/Individual_profile_dashboard/Individual_profile_dashboard';
import Individual_KYC_Pending from './BusinessKYC/Individual_KYC_Pending/Individual_KYC_Pending';
import Individual_profile_overview from './IndividualKYC/Individual_profile_overview/Individual_profile_overview';
import BusinessKycStarted from './BusinessKYC/BusinessKycStarted/BusinessKycStarted';
import BusinessKycDocumentation from './BusinessKYC/BusinessKycDocumentation/BusinessKycDocumentation';
import BusinessProfile from './BusinessKYC/BusinessProfile/BusinessProfile';

import {
  userRoleAction,
  userDetailAction
} from './login_signup/auth-actions/auth.actions';

import { Base_Url } from './app.constant';

import { connect } from 'react-redux';

//business user project
import BusinessUserProject from './business_user_project/Project/Project';
import ProjectStarted from './business_user_project/ProjectStarted/ProjectStarted';
import BusinessAccountDetails from './business_user_project/BusinessAccountDetails/BusinessAccountDetails';
import ProjectInfomation from './business_user_project/ProjectInfomation/ProjectInfomation';
import ProjectManager from './business_user_project/ProjectManager/ProjectManager';
import ProjectTokenDetails from './business_user_project/ProjectTokenDetails/ProjectTokenDetails';
import ProjectFundraisingDetails from './business_user_project/ProjectFundraisingDetails/ProjectFundraisingDetails';
import ProjectInvestmentDetails from './business_user_project/ProjectInvestmentDetails/ProjectInvestmentDetails';
import ProjectInvestmentBenefit from './business_user_project/ProjectInvestmentBenefit/ProjectInvestmentBenefit';
import ProjectDistributionWallet from './business_user_project/ProjectDistributionWallet/ProjectDistributionWallet';
import ProjectGalleryMarketing from './business_user_project/ProjectGalleryMarketing/ProjectGalleryMarketing';
import ProjectListingTokenSale from './business_user_project/ProjectListingTokenSale/ProjectListingTokenSale';
import ProjectCreation from './business_user_project/ProjectCreation/ProjectCreation';
import FundraisingUserDetails from './business_user_project/FundraisingUserDetails/FundraisingUserDetails';
import ProjectUserProgress from './business_user_project/ProjectUserProgress/ProjectUserProgress';


//Web Site Route
import Marketplace from './WebSite/containers/Marketplace/Marketplace';
import MarketplaceDetail from './WebSite/containers/Marketplace/MarketplaceDetail';
import TeamAdvisor from './WebSite/containers/TeamAdvisor/TeamAdvisor';
import EstateAgent from './WebSite/containers/EstateAgent/EstateAgent';
import AboutUs from './WebSite/containers/AboutUs/AboutUs';
import Platform from './WebSite/components/Platform/Platform';
import Partners from './WebSite/components/Partners/Partners';
import ContactUs from './WebSite/components/ContactUs/ContactUs';
import Home from './WebSite/containers/Home/Home';
import Blog from './WebSite/containers/Blog/Blog';
import Blog1 from './WebSite/containers/Blog/Blog1';
import Blog2 from './WebSite/containers/Blog/Blog2';
import Blog3 from './WebSite/containers/Blog/Blog3';
import Blog4 from './WebSite/containers/Blog/Blog4';
import RiskWarning from './WebSite/containers/RiskWarning/RiskWarning';


//Admin Dashboard Pages
import ActivityAdmin from './AdminDashboard/ActivityAdmin/ActivityAdmin';
import AllUsersDropdownAdmin from './AdminDashboard/AllUsersDropdownAdmin/AllUsersDropdownAdmin';
import OverviewAdmin from './AdminDashboard/OverviewAdmin/OverviewAdmin';
import Header from './header-sidebar/Header/Header';
import Sidebar from './header-sidebar/Sidebar/Sidebar';
import SidebarAdmin from './AdminDashboard/header-sidebar/Sidebar/Sidebar';
import Project from './AdminDashboard/Project/Project';
import Profile from './AdminDashboard/Profile/Profile';
import ProjectApproval from './AdminDashboard/Project/ProjectApproval/ProjectApproval';
import ProjectPreapproval from './AdminDashboard/Project/ProjectPreapproval/ProjectPreapproval';
import ProjectMakingLive from './AdminDashboard/Project/ProjectMakingLive/ProjectMakingLive';
import ProjectActive from './AdminDashboard/Project/ProjectActive/ProjectActive';
import FundraisingDetails from './AdminDashboard/Project/FundraisingDetails/FundraisingDetails';
// import createhistory from 'history/createBrowserHistory'
// const history = createhistory()
import history from "./utils/history.js";

class App extends Component {
  state = {
    sidebar: false
  };
  componentDidMount() {
    // ReactGA.initialize('UA-149393536-2');
    // // To Report Page View 
    // ReactGA.pageview(window.location.pathname + window.location.search);

    console.log('Our new URL is :', window.history.pathname);
    this.props.userRoleAction(localStorage.getItem('role'));
    console.log('after : ', this.props);
    if (localStorage.getItem('accessToken')) {
      axios({
        method: 'GET',
        url: `${Base_Url}/user/getUser`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('accessToken')
        }
      })
        .then(response => {
          console.log('response from routes', response);
          if (response.data.statusCode === 200) {
            this.props.userDetailAction(response.data.data);
          }
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  }

  onSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
    console.log('router ', this.state.sidebar);
  };
  render() {
    console.log('Our new URL is :', window.history.pathname);
    console.log('router ', this.state.sidebar);
    return (
      <>
        <Router history={history}>
          <div className="loading-container">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          { GA.init() && <GA.RouteTracker /> }
          <Switch>
            {/* <Route exact path={`/`} component={Welcome} /> */}
            <Route path={`/Signup`} component={Signup} />
            <Route path={`/Signupterm`} component={SignupTerm} />
            <Route path={`/Mobverify`} component={Mobverify} />
            {/*<Route  path={`/FaceRecognition`} component={FaceRecognition} />*/}
            {/*<Route  path={`/AdjustFace`} component={AdjustFace} />*/}
            {/*<Route  path={`/ErrorScan`} component={ErrorScan} />*/}
            {/*<Route  path={`/PerfactFace`} component={PerfactFace} />*/}
            {/*<Route  path={`/Emailverify`} component={Emailverify} />*/}
            {/*<Route  path={`/Thankyou`} component={Thankyou} />*/}
            <Route path={`/SignIn`} component={SignIn} />
            <Route path={`/EmailcodeVerify`} component={EmailcodeVerify} />
            <Route path={`/ResetEmailVerification`} component={ResetEmailVerification} />
            <Route path={`/ResetPassword`} component={ResetPassword} />
            <Route path={`/ResetPasswordSuccessfull`} component={ResetPasswordSuccessfull} />

            
            
            <Route path={`/DataSlider`} component={DataSlider} />

            {/* Web site Routing Start   */}

            <Route exact path="/team-advisor" component={TeamAdvisor} />
            <Route exact path="/estate-agent" component={EstateAgent} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/platform" component={Platform} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog1" component={Blog1} />
            <Route exact path="/blog2" component={Blog2} />
            <Route exact path="/blog3" component={Blog3} />
            <Route exact path="/blog4" component={Blog4} />
            <Route exact path="/risk-warning" component={RiskWarning} />
            
            <Route exact path="/" component={Home} />

            <Route exact path="/marketplace" component={Marketplace} />
            <Route
              exact
              path="/marketplace-detail/:id"
              component={MarketplaceDetail}
            />
            <Route
              exact
              path="/NotFound"
              component={() => <h1>Not Found</h1>}
            />

            {/* Web Site Routing End */}

            {/*
              
              
              Header and sidebar 
              
              
              



              {/* -------------------------- */}
            {localStorage.getItem('accessToken') == null && <Redirect to="/" />}

            <div>
              {localStorage.getItem('toggleSidebar') === '1' ? (
                <div>
                  <Header
                    onsidebar={this.onSidebar}
                    stateSidebar={this.state.sidebar}
                  />
                  <Sidebar sidebar={this.state.sidebar} />
                  {/* <Route
                    path={`/Business_profile`}
                    component={Business_profile}
                  /> */}
                  <Route path={`/Overview`} component={Overview} />
                  {/* <Route
                    path={`/Business_KYC_Pending`}
                    component={Business_KYC_Pending}
                  /> */}
                  {/* <Route
                    path={`/Business_profile_overview`}
                    component={Business_profile_overview}
                  /> */}
                  <Route
                    path={`/BusinessAccount`}
                    component={BusinessAccount}
                  />
                  <Route
                    path={`/BusinessKycCondition`}
                    component={BusinessKycCondition}
                  />
                  
                  <Route path={`/BusinessInfo`} component={BusinessInfo} />
                  <Route
                    path={`/AccountHolderinfo`}
                    component={AccountHolderinfo}
                  />
                  <Route
                    path={`/BusinessSolutionTab`}
                    component={BusinessSolutionTab}
                  />
                  <Route
                    path={`/BusinessPaymentTab`}
                    component={BusinessPaymentTab}
                  />
                  <Route path={`/BankPopup`} component={BankPopup} />
                  <Route path={`/Incomeassets`} component={Incomeassets} />
                  <Route
                    path={`/IncomeassetsTab`}
                    component={IncomeassetsTab}
                  />
                  <Route
                    path={`/IncomeassetsTab2`}
                    component={IncomeassetsTab2}
                  />
                  <Route
                    path={`/Banking_overview`}
                    component={Banking_overview}
                  />
                  <Route path={`/Funding_source`} component={Funding_source} />
                  <Route path={`/Bankingsidebar`} component={Bankingsidebar} />
                  <Route path={`/AddCard`} component={AddCard} />
                  <Route path={`/AddBankAccount`} component={AddBankAccount} />
                  <Route path="/ConfirmBank" component={ConfirmBank} />
                  <Route path="/BankStatus" component={BankStatus} />
                  <Route path="/BankDetail" component={BankDetail} />
                  {/* <Route
                    path="/individual-profile"
                    component={IndividualProfileDashboard}
                  /> */}
                  <Route
                    path="/kycPending"
                    component={Individual_KYC_Pending}
                  />
                  {/* <Route
                    path="/IndividualProfileOverview"
                    component={Individual_profile_overview}
                  /> */}
                  {/* <Route
                    path="/PersonalUserOverview"
                    component={PersonalUserOverview}
                  /> */}
                  <Route path="/KycStarted" component={BusinessKycStarted} />
                  <Route
                    path="/KycDocumentation"
                    component={BusinessKycDocumentation}
                  />
                  <Route path="/BusinessProfile" component={BusinessProfile} />
                  <Route
                    path="/BusinessUserProject"
                    component={BusinessUserProject}
                    exact
                  />
                  <Route
                    path="/ProjectStarted"
                    component={ProjectStarted}
                    exact
                  />
                  <Route
                    path="/BusinessAccountDetails"
                    component={BusinessAccountDetails}
                    exact
                  />
                  <Route
                    path="/ProjectInfomation"
                    component={ProjectInfomation}
                    exact
                  />{' '}
                  <Route
                    path="/ProjectManager"
                    component={ProjectManager}
                    exact
                  />
                  <Route
                    path="/ProjectTokenDetails"
                    component={ProjectTokenDetails}
                    exact
                  />
                  <Route
                    path="/ProjectFundraisingDetails"
                    component={ProjectFundraisingDetails}
                    exact
                  />
                  <Route
                    path="/ProjectInvestmentDetails"
                    component={ProjectInvestmentDetails}
                    exact
                  />
                  <Route
                    path="/ProjectInvestmentBenefit"
                    component={ProjectInvestmentBenefit}
                    exact
                  />
                  <Route
                    path="/ProjectDistributionWallet"
                    component={ProjectDistributionWallet}
                    exact
                  />
                  <Route
                    path="/ProjectGalleryMarketing"
                    component={ProjectGalleryMarketing}
                    exact
                  />
                  <Route
                    path="/ProjectListingTokenSale"
                    component={ProjectListingTokenSale}
                    exact
                  />
                  <Route
                    path="/ProjectCreation"
                    component={ProjectCreation}
                    exact
                  />
                  <Route           
                    path="/FundraisingUserDetails/:pId"
                    component={FundraisingUserDetails}
                    exact
                  />
                  <Route
                    path="/project-user-progress/:id"
                    component={ProjectUserProgress}
                    exact
                  />
                  {/* <Redirect to="/NotFound" /> */}
                </div>
              ) : (
                <div>
                  <Header onsidebar={this.onSidebar} />
                    
                     <SidebarAdmin sidebar={this.state.sidebar} />

                  {/* Admin side Routing Start */}
                  <Route
                    path="/ActivityAdmin"
                    component={ActivityAdmin}
                    exact
                  />
                  <Route
                    path="/AllUsersDropdownAdmin"
                    component={AllUsersDropdownAdmin}
                    exact
                  />
                  <Route
                    path="/dashboardAdmin"
                    component={OverviewAdmin}
                    exact
                  />
                  <Route path="/Project" component={Project} exact />
                  <Route
                    path="/Project-Approval:id"
                    component={ProjectApproval}
                    exact
                  />
                  <Route
                    path="/Project-Preapproval:id"
                    component={ProjectPreapproval}
                    exact
                  />
                  <Route
                    path="/Project-Makinglive:id"
                    component={ProjectMakingLive}
                    exact
                  />

                  <Route
                    path="/Project-Active"
                    component={ProjectActive}
                    exact
                  />
                  <Route
                    path="/Fundraising-Details:id"
                    component={FundraisingDetails}
                    exact
                  />
                  <Route path="/Profile/:id" component={Profile} exact />

                  {/* Admin side Routing End */}
                </div>
              )}
            </div>
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  userRoleAction: payload => dispatch(userRoleAction(payload)),
  userDetailAction: payload => dispatch(userDetailAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
