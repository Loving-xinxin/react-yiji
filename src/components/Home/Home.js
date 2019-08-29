import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/iconfont.css';
import './home.css';
class Home extends Component {
  state = {};
  render() {
    const { pathname } = this.props.location;
    // console.log(pathname);
    return (
      <div className="home">
        <ul>
          <li>
            <Link to="/home">
              <span
                className={
                  pathname === '/home'
                    ? 'active iconfont icon-yinleyanzou'
                    : 'iconfont icon-yinleyanzou'
                }
              />
              <span className={pathname === '/home' ? 'active' : ''}>展讯</span>
            </Link>
          </li>
          <li>
            <Link
              to="/home/tuijian"
              className={pathname === '/home/tuijian' ? 'active' : ''}
            >
              <span
                className={
                  pathname === '/home/tuijian'
                    ? 'active iconfont icon-chanpinjieshao'
                    : 'iconfont icon-chanpinjieshao '
                }
              />
              <span className={pathname === '/home/tuijian' ? 'active' : ''}>
                推荐
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/home/publish"
              className={pathname === '/home/publish' ? 'active' : ''}
            >
              <span
                className={
                  pathname === '/home/publish'
                    ? 'iconfont icon-fabu1 active'
                    : 'iconfont icon-fabu1'
                }
              />
              <span className={pathname === '/home/publish' ? 'active' : ''}>
                发布
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/home/personal"
              className={pathname === '/home/personal' ? 'active' : ''}
            >
              <span
                className={
                  pathname === '/home/personal'
                    ? 'iconfont icon-geren1 active'
                    : 'iconfont icon-geren1'
                }
              />
              <span className={pathname === '/home/personal' ? 'active' : ''}>
                个人
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
