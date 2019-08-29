import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './zhanwencontent.css';
import '../static/iconfont.css';
class ShowContent extends Component {
  state = {};
  render() {
    const { id } = this.props.match.params;
    const { show } = this.props;
    const ShowContent = show.find(item => item.id === id);
    console.log(id);
    return (
      <div className="showPersonal">
        <div className="top">
          <img src={ShowContent.info.img} alt="" />
          <Link to="/home/tuijian">
            <span className="iconfont icon-prev"></span>
          </Link>
        </div>
        <section>
          <div className="introduce">
            <span className="title">展览内容</span>
            <p>{ShowContent.info.content}</p>
          </div>
          <div className="author">
            <span className="title">作者介绍</span>
            <img src={ShowContent.info.authorImg} alt="" />
            <p>{ShowContent.info.authorDetail}</p>
          </div>
          <div className="shows">
            <span className="title">作品展示</span>
            {ShowContent.info.pics.map((pic, index) => (
              <img key={index} src={pic} alt="" />
            ))}
          </div>
          <div className="comments">
            <span className="title">展览评论</span>
          </div>
        </section>
        <footer>
          <div className="bottom">
            <div>
              <span className="iconfont icon-aixin" />
              <span>关注</span>
            </div>
            <div>
              <span className="iconfont icon-luxian" />
              <span>到这</span>
            </div>
            <div>
              <span className="iconfont icon-zhuanfa1" />
              <span>分享</span>
            </div>
            <div>
              <span className="iconfont icon-xinxi1" />
              <span>评论</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.show.show
  };
};
export default connect(mapStateToProps)(ShowContent);
