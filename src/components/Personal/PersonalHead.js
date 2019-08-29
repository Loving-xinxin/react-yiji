import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class PersonalHead extends Component {
  state = {};
  render() {
    return (
      <div className="personalhead">
        <header>
          <div className="pic">
            <NavLink to="/home/personal">
              <img
                className="pre"
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/user-info-pre_03.png"
                alt=""
              />
            </NavLink>
            <img
              className="logo"
              src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/logo.png"
              alt=""
            />
          </div>
        </header>
      </div>
    );
  }
}

export default PersonalHead;
