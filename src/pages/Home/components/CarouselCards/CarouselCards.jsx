import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CarouselCards.scss';

export default class PauseOnHover extends Component {
  render() {
    var settingsSlider = {
      className: "center",
      focusOnSelect: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      initialSlide: 0,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="carouselCards">
        <Slider {...settingsSlider}>
            <div className="card">
                <span className="material-icons-outlined">savings</span>
                <h2>Ingresos</h2>
            </div>
            <div className="card">
                <span className="material-icons-outlined">currency_exchange</span>
                <h2>Traferencias</h2>
            </div>
            <div className="card">
                <span className="material-icons-outlined">shopping_bag</span>
                <h2>Consumos</h2>
            </div>
            <div className="card">
                <span className="material-icons-outlined">credit_score</span>
                <h2>Prestamos</h2>
            </div>
            <div className="card">
                <span className="material-icons-outlined">insights</span>
                <h2>Inversiones</h2>
            </div>
            <div className="card">
                <span className="material-icons-outlined">trending_up</span>
                <h2>Plazos Fijos</h2>
            </div>
        </Slider>
      </div>
    );
  }
}