import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div>
        <blockquote>
          <p>
            <i className="fa fa-quote-left" />
            {this.props.children}
          </p>
        </blockquote>
        <div className="author margin-bottom-30">
          <h5>{this.props.author}</h5>
          <p>{this.props.authorCompany}</p>
        </div>
      </div>
    );
  }
}

export default Quote;
