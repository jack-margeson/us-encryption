import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
          <div className="ten columns">
            <p className="lead">
              Here are some helpful links in finding your representitives:
            </p>
            <li className="lead">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.congress.gov/bill/116th-congress/senate-bill/4051"
              >
                S.4051 - Lawful Access to Encrypted Data Act
              </a>
            </li>
            <li className="lead">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.senate.gov/general/contact_information/senators_cfm.cfm"
              >
                Senators of the 116th Congress
              </a>
            </li>
            <li className="lead">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.senate.gov/senators/How_to_correspond_senators.htm"
              >
                How to Contact U.S. Senators
              </a>
            </li>
            <li className="lead">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham"
              >
                Email Senator Graham
              </a>
            </li>
          </div>
        </div>

        <div></div>
      </section>
    );
  }
}

export default Contact;
