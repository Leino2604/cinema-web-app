import React from "react";
import "./Footer.css";
import GooglePlay from "../assets/img/Google Play x4.png";
import AppStore from "../assets/img/App Store x4.png";
import Logo from "../assets/img/logo.png";

import Facebook from "../assets/img/facebook.png";
import Instagram from "../assets/img/instagram.png";
import Twitter from "../assets/img/twitter.png";
import Youtube from "../assets/img/youtube.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="section-padding">
          <div className="footer-links">
            <div className="footer-links-div">
              <h4>Company</h4>
              <a href="#">
                <p>Contact Us</p>
              </a>
              <a href="#">
                <p>Sponsors</p>
              </a>
              <a href="#">
                <p>Partners</p>
              </a>
            </div>

            <div className="footer-links-div">
              <h4>About</h4>
              <a href="#">
                <p>News</p>
              </a>
              <a href="#">
                <p>Cinema</p>
              </a>
              <a href="#">
                <p>My Tickets</p>
              </a>
              <a href="#">
                <p>Payment</p>
              </a>
              <a href="#">
                <p>Install</p>
              </a>
            </div>

            <div className="footer-links-div">
              <h4>Support</h4>
              <a href="#">
                <p>FAQ</p>
              </a>
              <a href="#">
                <p>Help Center</p>
              </a>
              <a href="#">
                <p>Privacy Policy</p>
              </a>
              <a href="#">
                <p>Terms and Conditions</p>
              </a>
              <a href="#">
                <p>Update Covid-19</p>
              </a>
            </div>

            <div className="footer-links-div">
              <h4>Follow on</h4>
              <div className="social-media">
                <a href="#">
                  <img src={Facebook} />
                </a>
                <a href="#">
                  <img src={Instagram} />
                </a>
                <a href="#">
                  <img src={Twitter} />
                </a>
                <a href="#">
                  <img src={Youtube} />
                </a>
              </div>

              <br />

              <h4>Download on</h4>
              <div className="download-app">
                <a href="#">
                  <img src={GooglePlay} alt="Google Play" />
                </a>
                <a href="#">
                  <img src={AppStore} alt="App Store" />
                </a>
              </div>
            </div>
          </div>

          <hr />

          <div className="footer-below">
            <div className="footer-copyright">
              <p>
                @{new Date().getFullYear()} TIX ID Cinema. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
