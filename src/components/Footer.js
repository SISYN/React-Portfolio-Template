import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p className="copyright">
            Designed with <i className="fa fa-heart"></i>
            by <a href="http://themes.3rdwavemedia.com" rel="noopener noreferrer" target="_blank">Xiaoying Riley</a>
            <br />
            Reactified by
            <a href="http://mdlindsey.com" rel="noopener noreferrer" target="_blank">Dan Lindsey</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
