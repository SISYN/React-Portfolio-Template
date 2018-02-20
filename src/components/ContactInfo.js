import React, { Component } from 'react';
import Mailto from './Mailto';
import NewWindow from './NewWindow';

class ContactInfo extends Component {
  render() {
    return (
      <div className="block contact-details">
        <ul>
          <li>
            <i className="text-light fa fa-map-marker-alt"></i>
            {this.props.location}
          </li>
          <li>
            <i className="text-light far fa-envelope"></i>
            <Mailto email={this.props.email} />
          </li>
          <li>
            <i className="text-light fa fa-link fa-flip-horizontal"></i>
            <NewWindow href={this.props.website} text={this.props.website} />
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactInfo;
