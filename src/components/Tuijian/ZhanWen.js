import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/iconfont.css';
import './zhanwen.css';
class ZhanWen extends Component {
  state = {
    marginLeft: '0'
  };
  toZhan = () => {
    this.setState({
      marginLeft: '0'
    });
  };
  toWen = () => {
    this.setState({
      marginLeft: '-100vw'
    });
  };
  render() {
    const { zhanwen } = this.props;
    const showZhanList = zhanwen
      .filter(item => item.type === 'zhan')
      .map(ele => (
        <div className="showing-wrap" key={ele.id}>
          <Link to={`/zhanwen/${ele.id}`}>
            <img src={ele.img} alt="" />
          </Link>
          <div className="sidebar">
            <span className="last_day">剩余{ele.last_day}天</span>
            <div>
              <span className="iconfont icon-zhuanfa1" />
              <span className="iconfont icon-aixin" />
              <span>{ele.liked}</span>
              <span className="iconfont icon-liulan1" />
              <span>{ele.visited}</span>
              <span className="iconfont icon-xinxi1" />
              <span>{ele.news}</span>
            </div>
          </div>
        </div>
      ));
    const showWenList = zhanwen
      .filter(item => item.type === 'wen')
      .map(ele => (
        <div className="showing-wrap" key={ele.id}>
          <Link to={`/zhanwen/${ele.id}`}>
            <img src={ele.img} alt="" />
          </Link>
          <div className="sidebar">
            <span className="last_day">剩余{ele.last_day}天</span>
            <div>
              <span className="iconfont icon-zhuanfa1" />
              <span className="iconfont icon-aixin" />
              <span>{ele.liked}</span>
              <span className="iconfont icon-liulan1" />
              <span>{ele.visited}</span>
              <span className="iconfont icon-xinxi1" />
              <span>{ele.news}</span>
            </div>
          </div>
        </div>
      ));
    return (
      <div className="showing">
        <div className="show-contain">
          <div
            className="show-wrapper"
            style={{ marginLeft: this.state.marginLeft }}
          >
            <div className="zhan">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/zhanwentabs-bg_02.png"
                alt=""
              />
              <span className="to-will" onClick={this.toWen}></span>
              <div>{showZhanList}</div>
            </div>
            <div className="wen">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/zhanwentabs-bg_02_03.png"
                alt=""
              />
              <span className="to-now" onClick={this.toZhan}></span>
              <div>{showWenList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZhanWen;
