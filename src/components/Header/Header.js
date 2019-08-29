import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="pic">
          <img
            className="img"
            src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/logo.png"
            alt=""
          />
          <i className="iconfont icon-search1" />
        </div>
      </header>
    );
  }
}

export default Header;
