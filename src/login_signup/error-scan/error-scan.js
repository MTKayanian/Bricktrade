import React, {Component} from 'react';
import error from '../../images/error.svg'
import {Link} from 'react-router-dom';

class ErrorScan extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row d-flex custom-height" id="custom-height">
                        <div className="col-md-12 d-md-block">
                            <div className="face-recognition">
                                <div className="recg-img"><img src={error} className="img-fluid" alt="user face"/></div>
                                <h2 className="">ADJUST THE LIGHT for your perfect Photo</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation.</p>
                                <p><Link to="perfect-face.html" className="continue-button">TRY AGAIN</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        )
    }

}

export default ErrorScan;
