import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './showcontent.css';
import '../static/iconfont.css';
import { addComment } from '../../store/action';
class ShowContent extends Component {
  state = {
    isRed: false,
    isMap: false,
    isShare: false,
    isCommnet: false,
    val: 'xxx'
  };
  changeColor = () => {
    this.setState({
      isRed: !this.state.isRed
    });
  };
  changeMap = () => {
    this.setState({
      isMap: !this.state.isMap
    });
  };
  changeShare = () => {
    this.setState({
      isShare: !this.state.isShare
    });
  };
  changeComment = () => {
    this.setState({
      isCommnet: !this.state.isCommnet
    });
  };
  addComment = e => {
    const { val } = this.state;
    const userId = this.props.match.params.id;
    if (e.keyCode === 13) {
      this.props.addComment({
        userId: userId,
        id: new Date().getTime(),
        author: '阿新',
        time: '2016.8.21',
        content: val,
        avater:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png'
      });
      console.log(userId);
    }
  };
  render() {
    console.log(this.props.match.params);
    const { isRed, isMap, isShare, isCommnet } = this.state;
    const { id } = this.props.match.params;
    const { show } = this.props;
    // console.log(this.props);
    const ShowContent = show.find(item => item.id === id);
    return (
      <div className="personal-wrapper">
        <div
          className="showPersonal"
          style={{ display: isMap || isCommnet ? 'none' : 'block' }}
        >
          <div className="top">
            <img src={ShowContent.info.img} alt="" />
            <Link to="/home">
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
              <div className="comment-Content">
                <ul>
                  {ShowContent.info.comment.map(ele => (
                    <li key={ele.id}>
                      <img src={ele.avater} alt="" />
                      <div>
                        <span>{ele.author}</span>
                        <span>{ele.time}</span>
                        <p>{ele.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <footer>
            <div className="bottom">
              <div>
                <span
                  className="iconfont icon-dianzhongdeaixin"
                  style={{ color: isRed ? 'red' : '' }}
                  onClick={this.changeColor}
                />
                <span>关注</span>
              </div>
              <div>
                <span
                  className="iconfont icon-luxian"
                  onClick={this.changeMap}
                />
                <span>到这</span>
              </div>
              <div onClick={this.changeShare}>
                <span className="iconfont icon-zhuanfa1" />
                <span>分享</span>
              </div>
              <div onClick={this.changeComment}>
                <span className="iconfont icon-xinxi1" />
                <span>评论</span>
              </div>
            </div>
          </footer>
        </div>
        <div className="showMap" style={{ display: isMap ? 'block' : 'none' }}>
          <span className="iconfont icon-prev" onClick={this.changeMap}></span>
          <img
            className="map"
            src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/ditu.png"
            alt=""
          />
        </div>
        <div
          className="showShare"
          style={{ display: isShare ? 'block' : 'none' }}
        >
          <div className="share-wrapper">
            <div className="share">分享到</div>
            <div className="pic">
              <div>
                <img
                  src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/share_03.png"
                  alt=""
                />
                <span>艺集</span>
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/share_05.png"
                  alt=""
                />
                <span>微信</span>
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/share_07.png"
                  alt=""
                />
                <span>微博</span>
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/share_09.png"
                  alt=""
                />
                <span>QQ</span>
              </div>
            </div>
            <div className="cancel" onClick={this.changeShare}>
              取消
            </div>
          </div>
        </div>
        <div
          className="comment-wrapper"
          style={{ display: isCommnet ? 'block' : 'none' }}
        >
          <div className="comment">
            <header>
              <div className="top">
                <i
                  className="iconfont icon-prev"
                  onClick={this.changeComment}
                ></i>
                <span>评论</span>
                <i className="iconfont icon-fabu1" />
              </div>
            </header>
            <section>
              <textarea
                placeholder="说点什么......"
                onKeyDown={event => {
                  this.addComment(event);
                }}
                onChange={event => {
                  this.setState({
                    val: event.target.value
                  });
                }}
              />
              <div className="pic">
                <img
                  src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/publish_03.png"
                  alt=""
                />
              </div>
              <div className="location">
                <i className="iconfont icon-tupian" />
                <i className="iconfont icon-photo" />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.show.show
  };
};
export default connect(
  mapStateToProps,
  { addComment }
)(ShowContent);
