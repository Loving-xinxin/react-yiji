import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Loading/Login';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.css';
import './loading.css';
class Lead extends Component {
  state = {};
  componentDidMount() {
    new Swiper('.swiper-container');
  }
  render() {
    return (
      <div className="MySwiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/loading1.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/loading2.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/loading3.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/loading4.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/u10.jpg"
                alt=""
              />
              <Link to="/login"></Link>
            </div>
            <div className="swiper-slide login">
              <Login />
              {/* <div className="top" />
              <div className="content">
                <input type="text" placeholder="点击输入手机号/Email登录" />
                <input type="text" placeholder="输入密码" />
                <div className="user">
                  <div>
                    <NavLink to="/home">登录</NavLink>
                  </div>
                  <div>
                    <NavLink to="/home">注册</NavLink>
                  </div>
                </div>
              </div>
              <div className="foot">
                <div className="foot-up">
                  <span className="gou">√</span>
                  <span>
                    登录或注册即同意艺集
                    <span className="white">用户服务协议</span>
                  </span>
                </div>
                <div className="foot-bottom">
                  <div>
                    <img
                      src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/user-login_09.png"
                      alt=""
                    />
                    <span>微博</span>
                  </div>
                  <div>
                    <img
                      src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/user-login_06.png"
                      alt=""
                    />
                    <span>微信</span>
                  </div>
                  <div>
                    <img
                      src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/user-login_03.png"
                      alt=""
                    />
                    <span>QQ</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Lead;
