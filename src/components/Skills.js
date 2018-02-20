import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="block">
        <h3 className="heading">{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Skills;
