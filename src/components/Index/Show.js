import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/iconfont.css';
import './show.css';
class Show extends Component {
  state = {
    marginLeft: '0'
  };
  toNow = () => {
    this.setState({
      marginLeft: '0'
    });
  };
  toWill = () => {
    this.setState({
      marginLeft: '-100vw'
    });
  };
  render() {
    const { show } = this.props;
    const showNowList = show
      .filter(item => item.type === 'now')
      .map(ele => (
        <div className="showing-wrap" key={ele.id}>
          <Link to={`/show/${ele.id}`}>
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
    const showWillList = show
      .filter(item => item.type === 'will')
      .map(ele => (
        <div className="showing-wrap" key={ele.id}>
          <Link to={`/show/${ele.id}`}>
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
            <div className="now">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/u124.jpg"
                alt=""
              />
              <span className="to-will" onClick={this.toWill}></span>
              <div>{showNowList}</div>
            </div>
            <div className="will">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/u127.jpg"
                alt=""
              />
              <span className="to-now" onClick={this.toNow}></span>
              <div>{showWillList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
