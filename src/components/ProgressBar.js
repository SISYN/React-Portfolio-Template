import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    return (
      <div className="skillbar"><div className="fill" style={{width: this.props.fill + '%'}}></div></div>
    );
  }
}

export default ProgressBar;
