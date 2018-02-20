import React, { Component } from 'react';

class NewWindow extends Component {
  render() {
    return (
      <a className={this.props.inheritColor ? 'inherit' : '' + this.props.classes} target="_blank" rel="noopener noreferrer" href={this.props.href}>{this.props.text}{this.props.children}</a>
    );
  }
}

export default NewWindow;
