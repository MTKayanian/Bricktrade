import React, {Component} from 'react';
import "./BusinessPaymentTab.css";


import {Link} from 'react-router-dom';
import alertclose from '../../../images/alert-close.png'


class BankPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
      
        this.closePopUp = this.closePopUp.bind(this);
        console.log('here');
    }

    closePopUp = (event) => {
        this.setState({ open: false });
    }

    render() {
        return (
            <>
                <div id="bankmodal" className={"modal sm-width-100 " + (this.state.open === true ? 'open' : '')}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="text-center modal-content modal-content2">
	  		    	            <span className="close text-right" data-dismiss="modal" onClick={this.closePopUp}>
	  				                 <img src={alertclose} alt="icon" data-dismiss="modal" /> 
	  			                </span>
                                 <h3 className="m-0 pt-3 pb-3 head-main">Comfirm your business name</h3>
                                    <p className="modal-desc mb-0 pb-2">You will need to fill-up the business profile form and
                                    submit KYC documents before you could launch a project.</p>
                                     <Link href="#" className="modal-link">SHOW EXAMPLE</Link>
                                <form className="pt-4">
                                    <p className="mb-1 sub-head text-left">Standard Version (11 char. max)</p>
                                    <div className="fancyInput mb-2">
                                        <input type="text" name="" placeholder="Name of your business" />
                                    </div>
                                    <p className="mb-1 sub-head text-left">Long Version (19 char. max)</p>
                                    <div className="fancyInput mb-2">
                                        <input type="text" name="" placeholder="Name of your business" />
                                    </div>
                                </form>
                            <div className="btnLightBlue mt-4">
                                <button type="submit" className="btn w-75 white-space" id="myBtn">CONFIRM BUSINESS
                                    NAME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                </>

        )
    }

}

export default BankPopup;
