import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.css';
import './indexMinSwiper.css';
class IndexSwiper extends Component {
  state = {};
  componentDidMount() {
    new Swiper('.swiper-min ', {});
  }
  render() {
    return (
      <div className="IndexMinSwiper">
        <div className="swiper-container swiper-min">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                className="one"
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin_10.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin_13.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin01_02.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin01_04.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin02_03.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin02_05.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexSwiper;
