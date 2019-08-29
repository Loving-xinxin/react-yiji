import React, { Component } from 'react';
import '../static/iconfont.css';
import './publish.css';
class Public extends Component {
  state = {};
  render() {
    return (
      <div className="publish">
        <header>
          <div className="top">
            <span>上传照片</span>
            <i className="iconfont icon-fabu1" />
          </div>
        </header>
        <section>
          <textarea placeholder="说点什么......" />
          <div className="pic">
            <img
              src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/publish_03.png"
              alt=""
            />
            <img
              src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/publish_05.png"
              alt=""
            />
          </div>
          <i className="iconfont icon-photo" />
          <div className="location">
            <div>
              <i className="iconfont icon-weizhi" />
              <span>点击获取位置</span>
            </div>
            <div>
              <i className="iconfont icon-biaoqian1" />
              <span>添加标签</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Public;
