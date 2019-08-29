import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexSwiper from '../MySwiper/IndexSwiper';
import IndexMinSwiper from '../MySwiper/IndexMinSwiper';
import '../static/iconfont.css';
import './index.css';
import Show from '../Index/Show';
class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="shouye">
          <header>
            <div>
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/logo.png"
                alt=""
              />
              <i className="iconfont icon-search1" />
            </div>
          </header>
          <section>
            <IndexSwiper />
            <IndexMinSwiper />
            <Show {...this.props.show} />
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    show: state.show
  };
};
export default connect(mapStateToProps)(Index);
