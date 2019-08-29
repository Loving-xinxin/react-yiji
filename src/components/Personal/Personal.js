import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Yuanchuan from './Yuanchuan';
import Huancun from './Huancun';
import { Tabs } from 'element-react';
import './personal.css';
class Personal extends Component {
  state = {};
  render() {
    return (
      <div className="user">
        <header>
          <div className="top">
            {/* <img
              src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/Personal-top_03.png"
              alt=""
            /> */}
            <NavLink to="/personal/setting">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-top_06.png"
                alt=""
              />
            </NavLink>
          </div>
          <div className="content">
            <div className="avatar_name">
              <NavLink to="/userinfo">
                <img
                  src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User_03.png"
                  alt=""
                />
              </NavLink>
              <span>阴雨天</span>
            </div>
            <div className="bottom">
              <div className="focus">
                <span>关注</span>
                <span>11</span>
              </div>
              <div className="publish">
                <span>发布</span>
                <span>9</span>
              </div>
              <div className="visited">
                <span>访客</span>
                <span>49</span>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="nav">
            <span className="title">艺象云集</span>
            <div className="all">All</div>
          </div>
          <div className="pic">
            <div>
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-pic_11.png"
                alt=""
              />
              <span>订阅/11</span>
            </div>
            <div>
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-pic_13.png"
                alt=""
              />
              <span>订阅/9</span>
            </div>
            <div>
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/User-pic_15.png"
                alt=""
              />
              <span>订阅/49</span>
            </div>
          </div>
          <div className="picshow">
            <Tabs activeName="2">
              <Tabs.Pane label="原创" name="1">
                <Yuanchuan />
              </Tabs.Pane>
              <Tabs.Pane label="缓存" name="2">
                <Huancun />
              </Tabs.Pane>
            </Tabs>
          </div>
        </section>
      </div>
    );
  }
}

export default Personal;
