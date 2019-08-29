import React, { Component } from 'react';
import '../static/iconfont.css';
import './tabs.css';
class TabsNow extends Component {
  state = {};
  render() {
    const { tabsprepare } = this.props;
    console.log(tabsprepare);
    const preShowing = tabsprepare.length ? (
      <div className="showing-contain">
        {tabsprepare.map(ele => {
          return (
            <div className="showing-wrap" key={ele.id}>
              <img src={ele.img} alt="" />
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
          );
        })}
      </div>
    ) : (
      <div>请稍等。。。</div>
    );
    return <div className="showing">{preShowing}</div>;
  }
}

export default TabsNow;
