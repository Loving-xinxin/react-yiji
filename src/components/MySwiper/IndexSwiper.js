import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.css';
import './indexSwiper.css';
class IndexSwiper extends Component {
  state = {};
  componentDidMount() {
    new Swiper('.swiper-max', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
  render() {
    return (
      <div className="IndexSwiper">
        <div className="swiper-container swiper-max ">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/bannermin_08.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/banner2.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/banner1.png"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    );
  }
}

export default IndexSwiper;
