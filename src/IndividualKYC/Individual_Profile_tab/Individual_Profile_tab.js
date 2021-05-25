import React, {Component} from 'react';
import "./Individual_Profile_tab.css";
import {Link} from 'react-router-dom';
import calander from '../../images/calendar.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import Business_sidebar from '../Business_sidebar/Business_sidebar'


class IndividualContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'first-phase',
            docActive: 'idcards',
            startDate: new Date(),
            datePickerIsOpen: false,
            email: '',
            email2: '',
            startDate: null,
            setStartDate: null

        };

        this.onChangeTab = this.onChangeTab.bind(this);
        this.tabfunction = this.tabfunction.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openDatePicker = this.openDatePicker.bind(this);


    }

    onChangeTab(e) {
        this.setState({
            activeTab: 'second-phase'
        });
        console.log(this.state.activeTab);
    }

    tabfunction = (event) => {
        this.setState({docActive: event.currentTarget.className});
    }

    state = {
        startDate: new Date()
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleChangeDate = (date) => {
        this.setState({
            startDate: date,
        });
    };

    openDatePicker() {
        this.setState({
            datePickerIsOpen: !this.state.datePickerIsOpen,
        });
    };

    render() {
        const [startDate, setStartDate] = "null";
        return (
            <>
                <div className="col-lg-12 col-md-12 mb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-main">
                                <div>
                                    <ol className="breadcrumbs m-0 p-0">
                                        <li className="active-link"><Link to="/">KYC Business</Link></li>
                                        <li><Link to="#">Get Started</Link></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">

                            <div className="row">

                                <div className="col-lg-3 col-md-3 mb-4">
                                    <div className="profile-section business-main">
                                        <div
                                            className={" d-flex align-items-center pb-40 " + (this.state.activeTab === 'second-phase' ? "is-complete" : "")}
                                            id="step1">

                                            <div className="clearfix w-100 position-relative">
                                                <div className="d-flex align-items-center w-20">
                                                <span className="first-step blue-back">1
                                                </span>
                                                    <span className="first-step blueBg">
                                                    <i className="fa fa-check white" aria-hidden="true"></i>
                                                </span>
                                                    <span className="acc-head">Individual Profile</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={" d-flex align-items-center pb-40 " + (this.state.activeTab === 'second-phase' ? "current_side" : "") + (this.state.step === 'second-phase' ? "is-complete" : "")}
                                            id="step2">
                                            <div className="clearfix w-100 position-relative">
                                                <div className="w-20 align-items-center d-flex">
                                                    <span
                                                        className={`first-step ${this.state.activeTab === 'second-phase' ? "gray-blue" : "gray-back"}`}>2</span>
                                                    <span className="first-step blueBg">
                                                    <i className="fa fa-check  white" aria-hidden="true"></i>
                                                </span>
                                                    <span className="acc-head d-inline-block">Documentataion</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9 col-md-9">
                                    <div id="first-phase"
                                         className={"" + (this.state.activeTab === 'second-phase' ? 'd-none' : '')}>
                                        {/* <ul className="progressbar">
                                            <li className="active">Business Profile</li>
                                            <li>Documentataion</li>
                                        </ul> */}
                                        <div className="business-profile sm-width-100">
                                            <div className="profile-form">
                                                <div className="clearfix">
                                                    <div className="float-left"><h3 className="head-main">Individual
                                                        Profile</h3>
                                                    </div>
                                                    <div className="edit-details float-right"><Link to="#">EDIT</Link>
                                                    </div>
                                                </div>
                                                <form>
                                                    <div className="font-control">
                                                        <div className="pt-3 pb-3"><h4 className="sub-head">Personal
                                                            Info </h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="fancyInput">
                                                                    <input type="text" name="email"
                                                                           placeholder=""
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="fancyInput">
                                                                    <input type="text" name="email2"
                                                                           placeholder=""
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="fancyInput">
                                                                    <input type="text" name="" placeholder="Taz"
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="fancyInput">
                                                                    <input type="text" name="" placeholder="Kingston"
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="font-control">
                                                        <div className="pt-2 pb-3"><h4 className="sub-head">Address</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="fancyInput">
                                                                    <input type="text" name=""
                                                                           placeholder="2 Hearbert Street, Newtown"
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="fancyInput">
                                                                    <input type="text" name="" placeholder="NSW 2042"
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="fancyInput">
                                                                    <input type="text" name=""
                                                                           placeholder="2 Hearbert Street, Newtown"
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="fancyInput">
                                                                    <input type="text" name="" placeholder="NSW 2042"
                                                                           onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="font-control">
                                                        <div className="pt-2 pb-3"><h4 className="sub-head">Date of
                                                            Birth</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="fancyInput position-relative">
                                                                    <DatePicker placeholderText="Date of Birth"
                                                                                selected={this.state.startDate}
                                                                                onChange={this.handleChangeDate}
                                                                    />
                                                                    {/*<button alt="icon" className="cal-icon"*/}
                                                                    {/*        onClick={this.openDatePicker}><img*/}
                                                                    {/*    src={calander} alt="datepicker"/></button>*/}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-2">
                                                        <label className="check_container m-0">I agree to the Bricktrade
                                                            User
                                                            Agreement, Privacy Policy, Cookie Policy and E-Sign Consent.
                                                            <input type="checkbox" id="termsChkbx "
                                                                   onChange={this.handleChange}/>
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="pt-4">
                                                        <div className="btnLightBlue">
                                                            <input type="button" name="submit" value="CONTINUE"
                                                                   id="sub1"
                                                                   className="btn" onClick={this.onChangeTab}/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="second-phase"
                                         className={"" + (this.state.activeTab === 'first-phase' ? 'd-none' : '')}>
                                        {/* <div className="progress-step text-center">
                                            <div className="position-relative d-inline-block pr-4">
                                            <span className="style-blue black-back"><i className="fa fa-check pt-2 white"
                                                                                    aria-hidden="true"></i></span>
                                                <span className="correct"></span>
                                                <p className="fw-bold fs-14 color-black padd-5">Business Profile</p>
                                            </div>
                                            <div className="position-relative d-inline-block">
                                                <span className="is-active content-none"></span>
                                                <span className="step left-59">2</span>
                                                <p className="fw-bold fs-14 color-blue">Documentataion</p>
                                            </div>
                                        </div> */}
                                        <div className="business-profile sm-width-100">
                                            <div className="profile-form">
                                                <div className="clearfix pb-3">
                                                    <div className="float-left"><h3 className="head-main">1. Required
                                                        Documents</h3>
                                                    </div>
                                                    <div className="edit-details float-right"><Link to="#">EDIT</Link>
                                                    </div>
                                                </div>
                                                <div className="row pt-3">
                                                    <div className="col-lg-12">
                                                        <div className="tab">
                                                            <ul className="nav document-tab w-100">
                                                                <li className="nav-item">
                                                                    <Link to="#"
                                                                          className={"nav-link tablinks " + (this.state.docActive === 'idcards' ? 'active' : '')}><span
                                                                        onClick={this.tabfunction}
                                                                        className="idcards">ID CARDS</span></Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#"
                                                                          className={"nav-link tablinks " + (this.state.docActive === 'passport' ? 'active' : '')}><span
                                                                        onClick={this.tabfunction}
                                                                        className="passport">PASSPORT</span></Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#"
                                                                          className={"nav-link tablinks " + (this.state.docActive === 'license' ? 'active' : '')}><span
                                                                        onClick={this.tabfunction} className="license">DRIVING LICENSE</span></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={"row tabcontent pt-4 " + (this.state.docActive === 'idcards' ? '' : 'd-none')}
                                                    id="idcards">
                                                    <div className="col-lg-3">
                                                        <div className="fancyInput">
                                                            <input type="text" name="" placeholder="ID Card Number"
                                                                   onChange={this.handleChange}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="fancyInput position-relative">
                                                            <DatePicker placeholderText="Expiration Date"
                                                                        selected={this.state.startDate}
                                                                        onChange={this.handleChangeDate}
                                                            />
                                                            {/*<button alt="icon" className="cal-icon"*/}
                                                            {/*        onClick={this.openDatePicker}><img src={calander}*/}
                                                            {/*                                           alt="datepicker"/>*/}
                                                            {/*</button>*/}

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="pt-2 pb-3"><h4 className="sub-head">Upload
                                                            Documents</h4>
                                                        </div>
                                                        <div><p className="fs-14 m-0">We require both sides of your
                                                            documents</p>
                                                        </div>
                                                        <form>
                                                            <div className="drag-file mt-3 mb-2">
                                                                <label>Drag your file to upload or Browse
                                                                    <input type="file" size="60"/>
                                                                </label>
                                                            </div>
                                                            <p className="m-0 fs-12">Maximum size of image 8MB. PDF,
                                                                JPG,
                                                                PNG</p>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <h3 className="m-0 head-main pt-4">2. Proof of Address </h3>
                                                        <p className="m-0 fs-14 pt-3">Proof of address document can be
                                                            one of
                                                            the
                                                            following: Bank/credit card statment or a utility bill .
                                                            More </p>
                                                        <form>
                                                            <div className="drag-file mt-3 mb-2">
                                                                <label>Drag your file to upload or Browse
                                                                    <input type="file" size="60"/>
                                                                </label>
                                                            </div>
                                                            <p className="m-0 fs-12">Maximum size of image 8MB. PDF,
                                                                JPG,
                                                                PNG</p>
                                                        </form>
                                                        <div className="pt-4">
                                                            <div className="btnLightBlue">
                                                                <Link to="/IndividualKYCPending" className="btn"
                                                                      id="myBtn">SUBMIT</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={"row tabcontent " + (this.state.docActive === 'passport' ? '' : 'd-none')}
                                                    id="passport">PASSPORT
                                                </div>
                                                <div
                                                    className={"row tabcontent " + (this.state.docActive === 'license' ? '' : 'd-none')}
                                                    id="license">DRIVING LICENSE
                                                </div>
                                            </div>
                                        </div>
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

export default IndividualContent;
