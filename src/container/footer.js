import React from "react";

const Footer = (props) => {
  return (
    <footer className="page-footer font-small cyan darken-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="mb-5 text-center">
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fab fa-facebook-f fa-lg  mr-md-5 mr-3 fa-2x"></i>{" "}
              </a>
              <a href="https://twitter.com/?lang=vi" target="_blank">
                <i className="fab fa-twitter fa-lg  mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="https://www.google.com/" target="_blank">
                <i className="fab fa-google-plus-g fa-lg  mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <i className="fab fa-linkedin-in fa-lg  mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram fa-lg  mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="https://www.pinterest.com/" target="_blank">
                <i className="fab fa-pinterest fa-lg  fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
