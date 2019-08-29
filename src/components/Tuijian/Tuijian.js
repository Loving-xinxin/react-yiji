import React, { Component } from 'react';
import { connect } from 'react-redux';
import ZhanWen from './ZhanWen';
import '../static/iconfont.css';
import './tuijian.css';
class Tuijian extends Component {
  state = {};
  render() {
    return (
      <div className="tuijian">
        <header>
          <div>
            <img
              src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/logo.png"
              alt=""
            />
            <i className="iconfont icon-search1" />
          </div>
        </header>
        <section>
          <ZhanWen {...this.props.zhanwen} />
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    zhanwen: state.zhanwen
  };
};
export default connect(mapStateToProps)(Tuijian);
