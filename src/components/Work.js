import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className="block">
        <h3 className="heading">Work Experience</h3>
        <ul className="work-experience">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default Work;
