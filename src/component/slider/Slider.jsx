import scss from "./Slider.module.scss"
import React, { Component } from "react";
import Slider from "react-slick"
import "./slick.scss";
import "./slick-theme.scss";
import { sliderCard } from "./SlideData";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
      <div>
        <Slider {...settings}>
          {
            sliderCard.map((item) => <div key={item.id}>
              <div className={scss.slide}>
                <img className={scss.image} src={item.image} alt="slider_ima  ge" />
                <img className={scss.imageAdaptive} src={item.imgAdaptive} alt="slider_adaptive_image" />
                <button className={scss.btn}>{item.btn}</button>
              </div>
            </div>)
          }
        </Slider>
      </div>
    );
  };
}

