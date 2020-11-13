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
              <a href="https://www.senate.gov/general/contact_information/senators_cfm.cfm">
                Senators of the 116th Congress
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
