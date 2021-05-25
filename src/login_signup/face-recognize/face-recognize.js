import React, {Component} from 'react';
import "../ricktrade.css";
import face from '../../images/face.png'
import {Link} from 'react-router-dom';

class FaceRecognition extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row d-flex custom-height" id="custom-height">
                        <div className="col-md-12 d-md-block">
                            <div className="face-recognition pt-0">
                                <div><img src={face} className="img-fluid" alt="user face"/></div>
                                <div className="face-btm">
                                    <h2 className="">facial Recognition</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation.</p>
                                    <p><Link to="/" className="continue-button">NEXT</Link></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>

        )
    }

}

export default FaceRecognition;
