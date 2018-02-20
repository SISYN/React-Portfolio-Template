import React, { Component } from 'react';

class Mailto extends Component {
  spawnMailto(e) {
    e.preventDefault();
    window.location.href = 'mailto:' + this.props.email;
  }
  render() {
    return (
      <a onClick={this.spawnMailto.bind(this)} href="#email-me">{this.props.email}</a>
    );
  }
}

export default Mailto;
