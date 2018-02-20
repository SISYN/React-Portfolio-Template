import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <img className="profile-photo" src="/danlindsey.jpg" alt="Dan Lindsey : Full Stack Engineer" />
            </div>
            <div className="col-sm-12 col-md-7 header-details">
              <h1>Full name</h1>
              <h2>Full Job Title (Company Optional)</h2>
              <ul className="social-icons">
                <li><a href="https://example.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://example.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://example.com"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://example.com"><i className="fab fa-github-alt"></i></a></li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 profile-action-container">
              <a className="profile-action-button btn" target="_blank" rel="noopener noreferrer"
                 href="https://example.com"><i className="fa fa-paper-plane"></i> Contact Me</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
