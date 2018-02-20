import React, { Component } from 'react';
import NewWindow from './NewWindow';

class OtherProject extends Component {
  openSourceTag() {
    if ( this.props.openSource != undefined )
      return <span ref="open-source" className="sub-heading-label">Open Source</span>;
    return '';
  }
  render() {
    return (
      <div>
        <h4 className="sub-heading">{this.props.title} {this.openSourceTag()}</h4>
        <p>
          {this.props.children}
        </p>
        <p>
          <NewWindow href={this.props.href}>
            <i className="fas fa-external-link-alt margin-right-5" />
            Find out more
          </NewWindow>
        </p>
      </div>
    );
  }
}

export default OtherProject;
