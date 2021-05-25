import React, {Component} from 'react';
import face_detection from '../../images/face-detection.png'
import {Link} from 'react-router-dom';

class AdjustFace extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row d-flex custom-height" id="custom-height">
                        <div className="col-md-12 d-md-block">
                            <div className="face-recognition">
                                <div className="recg-img"><img src={face_detection} className="img-fluid"
                                                               alt="user face"/></div>
                                <h2 className="">ADJUST THE LIGHT for your perfect Photo</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation.</p>
                                <p><Link to="/ErrorScan" className="continue-button">CAPTURE</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        )
    }

}

export default AdjustFace;
