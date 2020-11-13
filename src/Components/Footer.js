import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="copyright">
              <li>&copy; Copyright 2017 Nordic Giant</li>
              <li>
                Design by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
              <li>Researched and compiled with love by Jack Margeson</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
