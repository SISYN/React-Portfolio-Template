import React, { Component } from 'react';

class Job extends Component {
  render() {
    return (
      <li>
        <h4 className="sub-heading">{this.props.title} - <span>{this.props.company} ({this.props.year})</span></h4>
        <p>
          {this.props.children}
        </p>
      </li>
    );
  }
}

export default Job;
