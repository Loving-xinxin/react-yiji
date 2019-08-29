import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PersonalHead from './PersonalHead';
import './personalhead.css';
import './setting.css';
class Setting extends Component {
  state = {
    isRed: false,
    red: false
  };
  changeSwitch = () => {
    this.setState({
      isRed: !this.state.isRed
    });
  };
  changeRed = () => {
    this.setState({
      red: !this.state.red
    });
  };
  render() {
    const { isRed, red } = this.state;
    return (
      <div className="setting">
        <PersonalHead />
        <section>
          <ul>
            <li>
              <span>自动离线缓存</span>
              <span className="switch">
                <span
                  style={{ color: !isRed ? 'red' : 'black' }}
                  onClick={this.changeSwitch}
                >
                  开
                </span>
                &nbsp; /&nbsp;
                <span
                  style={{ color: !isRed ? 'black' : 'red' }}
                  onClick={this.changeSwitch}
                >
                  关
                </span>
              </span>
            </li>
            <li>
              <span>Wi-Fi状态下自动缓存高清作品</span>
            </li>
            <li>
              <span>使用流量状态下提醒</span>
              <span className="switch">
                <span
                  style={{ color: !red ? 'red' : 'black' }}
                  onClick={this.changeRed}
                >
                  开
                </span>
                &nbsp; /&nbsp;
                <span
                  style={{ color: !red ? 'black' : 'red' }}
                  onClick={this.changeRed}
                >
                  关
                </span>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span>消息推送</span>
            </li>
            <li>
              <span> 意见反馈</span>
            </li>
            <li>
              <span>当前版本</span>
            </li>
            <li>
              <span>关于艺集</span>
            </li>
          </ul>
          <div className="edition">
            <NavLink to="/">退出登录</NavLink>
            <div>当前版本 1.0.42</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Setting;
