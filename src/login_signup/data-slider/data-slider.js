import React, { Component } from 'react';
import '../ricktrade.css';
import './data-slider.css';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import chat from '../../images/chat.png';
// import email_verify_bg from '../../images/email_verify_bg.png'
import email_verify_bg from '../../images/email_verify_bg.png';
import slide3 from '../../images/slider-img3.jpg';
import slide4 from '../../images/slider-img4.jpg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Redirect } from 'react-router-dom';

class DataSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 0,
    };
    this.next = this.next.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
  }

  componentDidMount() {}

  plusSlides = (slideNumber) => {
    console.log(slideNumber);
  };

  next() {
    if (this.state.slideCount < 3) {
      this.setState({ slideCount: this.state.slideCount + 1 });
      this.slider.slickNext();
    } else {
      if (
        localStorage.getItem('userRole') == 'USER' &&
        localStorage.getItem('verified') == 'true'
      ) {
        this.props.history.push('/Overview');
      }
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="container-fluid data-slider m-0 p-0">
          <div className="slideshow-container">
            <div className="abs-head-logo m-top-58 m-0 p-0">
              <img
                src="images/main-logo.png"
                alt="logo"
                className="img-fluid mt-5"
              />
            </div>

            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div className="mySlides">
                <div className="row">
                  <div className="col-lg-6 m-top-58 col-md-6">
                    <div className="left-panel">
                      <div className="mid-sect slider-txt">
                        <h2>PROTECT YOUR DATA</h2>
                        <p>
                          To the most trusted place to buy and sell digital
                          currency, we protect your personal data and comply
                          with the EU’s General Data Regulation(GDPR).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 position-relative col-md-6 m-0 p-0">
                    <img
                      src={email_verify_bg}
                      alt="slide-img"
                      className="img-fluid slide-img w-100"
                    />
                    <div className="comment-box">
                      <Link to="#">
                        <img src={chat} alt="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mySlides">
                <div className="row">
                  <div className="col-lg-6 m-top-58 col-md-6 m-0 p-0">
                    <div className="left-panel">
                      <div className="mid-sect slider-txt">
                        <h2>PROTECT EXTRA GDPR</h2>
                        <div className="scrl-sect">
                          <p>A few words on your privacy</p>
                          <p>
                            Bricktrade is fully is fully compliant with GDPR.
                            Also all third party service providers that we
                            cooperate with are fully compliant. Here are the
                            main points:
                          </p>
                          <p>RIGHT TO ACCESS</p>
                          <p>
                            We only collect data that is essential to providing
                            the service to you: email address and name to
                            authenticate you, invoice details to meet UK law and
                            some key usage data like error logs to fix
                          </p>
                          <div className="signup-checkbox mt-4">
                            <label className="check_container">
                              I have read and acknowledge
                              <input type="checkbox" />
                              <span className="checkmark mt-1"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 position-relative col-md-6 m-0 p-0">
                    <img
                      src={email_verify_bg}
                      alt="slide-img"
                      className="img-fluid slide-img w-100"
                    />
                    <div className="comment-box">
                      <Link to="#">
                        <img src={chat} alt="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mySlides">
                <div className="row">
                  <div className="col-lg-6 m-top-58 col-md-6">
                    <div className="left-panel">
                      <div className="mid-sect slider-txt">
                        <h2>Do you want</h2>
                        <p>
                          Updates about the best property investments,
                          fundraising and special offers based on your interest
                          and usage? Send me latest news, updates and promotions{' '}
                        </p>
                        <div className="signup-checkbox">
                          <label className="check_container">
                            Send me 'latesst' news, updates and promotions
                            <input type="checkbox" />
                            <span className="checkmark mt-1"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 position-relative col-md-6 m-0 p-0">
                    <img
                      src={slide3}
                      alt="slide-img"
                      className="img-fluid slide-img w-100"
                    />
                    <div className="comment-box">
                      <Link to="#">
                        <img src={chat} alt="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mySlides">
                <div className="row">
                  <div className="col-lg-6 m-top-58 col-md-6">
                    <div className="left-panel">
                      <div className="mid-sect slider-txt">
                        <h2>INVESTMENT & SAVINGS</h2>
                        <p>
                          Insurers do not provide mortgage insurance for
                          investment properties, and as a result, borrowers need
                          to have at least 20% down to secure bank financing for
                          investment properties.{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 position-relative col-md-6 m-0 p-0">
                    <img
                      src={email_verify_bg}
                      alt="slide-img"
                      className="img-fluid slide-img w-100"
                    />
                    <div className="comment-box">
                      <Link to="#">
                        <img src={chat} alt="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            {/* <div className="pagi-dots">
                     <span className="dot" onClick="currentSlide(1)"></span> 
                     <span className="dot" onClick="currentSlide(2)"></span>
                     <span className="dot" onClick="currentSlide(3)"></span>
                     <span className="dot" onClick="currentSlide(4)"></span>	
                  </div>	 */}
            <div className="paginate">
              <Link className="next nxt-button" onClick={this.next}>
                Next
              </Link>
            </div>
            <div className="abs-bottom">
              <div className="bottom-menu text-left">
                <ul className="p-0">
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                  <li>
                    <Link to="#">Support</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DataSlider;
