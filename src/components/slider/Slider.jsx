import "./Slider.scss"

import React, { Component } from "react";

import Slider from "react-slick"
import "./slick.scss"; 
import "./slick-theme.scss";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div>
    <Slider {...settings}>
      <div>
         <img src="https://media.dominos.ua/slider/slide_image/2022/12/27/Kyivstar_Slider_PC_ENG.jpg" alt="" />
         <button className="btn">Details</button> 
      </div>
      <div>
      <img src="https://media.dominos.ua/slider/slide_image/2022/12/18/PotatoesMushroomSausages_Slider_PC_ENG.jpg" alt="" />
          <button className="btn">Order</button>
      </div>
      <div>
      <img src="https://media.dominos.ua/slider/slide_image/2022/12/13/SLIDER_GetWarmCola_Slider_PC_ENG.jpg" alt="" />
          <button className="btn">Details</button>
      </div>
      <div>
      <img src="https://media.dominos.ua/slider/slide_image/2022/11/16/Panasia_Slider_PC_ENG.jpg" alt="" />
          <button className="btn">Order</button>
      </div>
      <div>
    
      <img src="https://media.dominos.ua/slider/slide_image/2022/12/01/PizzaSizes_Slider_PC_ENG.jpg" alt="" />
          <button className="btn">Order</button>
      </div>
    </Slider>
  </div>
);
};
}

 