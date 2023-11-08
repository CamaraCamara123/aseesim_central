"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import './event.css';
import { SwiperClass, SwiperSlide } from "swiper/react";
import Swiper, { EffectCoverflow, Navigation, Pagination } from "swiper";
import NextArrow from "./NextArrow";
import PrevArrow from "./PreviewArrow";



const Cook = () => {
  // Event images array
  const events = [
    { imgSrc: "/images/events/brunch1.jpg", caption: "" },
    { imgSrc: "/images/events/brunch2.jpg", caption: "Caption 1" },
    { imgSrc: "/images/events/brunch3.jpg", caption: "Caption 1" },
    { imgSrc: "/images/events/brunch4.jpg", caption: "Caption 1" },
    { imgSrc: "/images/events/brunch5.jpg", caption: "Caption 1" },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: true,
    swipeToSlide: true,
    centerMode: true,
    autoplay: true,
    AnimationEffect: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="relative"
      id="cook-section"
      style={{
        backgroundImage: 'url("/images/static/main.png")',
        backgroundRepeat: "no-repeat",
        opacity:1.5
      }}
    >
      {/* Event section */}
      <div className="text-center mb-8">
        <Fade
          direction={"up"}
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
            EVENEMENTS
          </h3>
        </Fade>
        <Fade
          direction={"up"}
          delay={800}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
            Les évèments <br /> actuels.
          </p>
        </Fade>
      </div>

      {/* Event image slider */}
      <div className="justify-center items-center">
        <div className="space-x-1 justify-center items-center">
          <div className="slider-container">
            <Slider {...settings} className="container">
              {events.map((item, i) => (
                <div
                  key={i}
                  className="items-center w-full auto slider"
                >
                  <div className="items-center">
                    <Image
                      src={item.imgSrc}
                      alt="nothing"
                      width={800}
                      height={200}
                      className="img-slider"
                    />
                    <div className="caption">{item.caption}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="col-span-4 flex justify-right relative">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cook;
