import React, {Component} from 'react';
import "../ricktrade.css";
import user from '../../images/user-img2.png'
import {Link} from 'react-router-dom';


class PerfactFace extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row d-flex custom-height" id="custom-height">
                        <div className="col-md-12 d-md-block">
                            <div className="face-recognition">
                                <div><img src={user} className="img-fluid rounded-circle" alt="user face"/></div>
                                <h2 className="dark-gray mt-5">PERFECT</h2>
                                <p className="dark-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation.</p>
                                <p><Link to="perfect-face.html" className="continue-button">NEXT</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        )
    }

}

export default PerfactFace;
