import React, { Component } from 'react';
import NewWindow from './NewWindow';

class FeaturedProject extends Component {
  render() {
    return (
      <div>
        <h4 className="sub-heading font-size-20 text-center margin-bottom-5">{this.props.title}</h4>
        <p className="text-muted text-center margin-top-0">{this.props.subtitle}</p>
        <div className="position-relative text-center">
          <div className="ribbon">
            <span>{this.props.ribbonText == undefined ? 'asdfadsf' : this.props.ribbonText}</span>
          </div>
          <NewWindow href="">
            <img src={this.props.img} alt="" />
          </NewWindow>
          {this.props.children}
          <a className="btn btn-cta-secondary margin-top-30" href="http://themes.3rdwavemedia.com" target="_blank">
            <i className="far fa-thumbs-up margin-right-5"></i>
            Back my project
          </a>
        </div>
      </div>
    );
  }
}

export default FeaturedProject;
