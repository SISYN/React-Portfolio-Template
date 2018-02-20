import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Skill extends Component {
  render() {
    return (
      <li>
        <h4 className="sub-heading">{this.props.skill}</h4>
        <span>{this.props.experience}</span>
        <ProgressBar fill={this.props.ability} />
      </li>
    );
  }
}

export default Skill;
