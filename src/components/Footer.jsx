import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section py-5">
      <div className="container text-center text-md-start">
        {/* College Info */}
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h5 className="footer-title fw-bold">Brilliant College of Education</h5>
            <p className="footer-info">
              (Affiliated to Tamil Nadu Teachers Education University)<br />
              Recognized by N.C.T.E, New Delhi<br />
              Thiruvarur road, Paruthichery, Thiruthuraipoondi, Thiruvarur - 614715
            </p>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-6 mb-4 text-md-end">
            <h6 className="footer-title fw-bold mb-3">Follow Us</h6>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 footer-copy">
              Copyright © 2026 Brilliant College of Education - All Rights Reserved.<br />
              Powered by Brilliant Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;