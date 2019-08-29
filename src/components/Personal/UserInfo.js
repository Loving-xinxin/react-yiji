import React, { Component } from 'react';
import './userinfo.css';
import PersonalHead from './PersonalHead';
import './personalhead.css';
class UserInfon extends Component {
  state = {
    isAvater: false
  };
  changeAvater = () => {
    this.setState({
      isAvater: !this.state.isAvater
    });
  };
  render() {
    const { isAvater } = this.state;
    return (
      <div className="userinfo-wrapper">
        <div className="userinfo">
          <PersonalHead />
          <section>
            <ul>
              <li>
                <div>
                  <span>头像</span>
                  <img
                    onClick={this.changeAvater}
                    className="avater"
                    src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-info_01%20(2).png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <span>背景</span>
                  <span className="word">更换</span>
                </div>
              </li>
              <li>
                <div>
                  <span>名字</span>
                  <span className="word">阴雨天</span>
                </div>
              </li>
              <li>
                <div>
                  <span>我的二维码</span>
                  <img
                    className="avater"
                    src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-info_07.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <span>我的地址</span>
                  <span className="word">北京市&nbsp;&nbsp;海淀区</span>
                </div>
              </li>
              <li>
                <div>
                  <span>隐私</span>
                  <img
                    className="dangerous"
                    src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/!!!_11.png"
                    alt=""
                  />
                </div>
              </li>
            </ul>
            <div className="bottom">
              <div>为保护用户隐私，请您尽量选择默认设置。</div>
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-info-bg_02.png"
                alt=""
              />
            </div>
          </section>
        </div>
        <div
          className="isAvater"
          style={{ display: isAvater ? 'block' : 'none' }}
        >
          <ul>
            <li>进入相册选择</li>
            <li>拍一张</li>
            <li onClick={this.changeAvater}>取消</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserInfon;
