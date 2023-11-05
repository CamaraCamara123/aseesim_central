"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "./section.css"
import NextArrow from "../events/NextArrow";
import PrevArrow from "../events/PreviewArrow";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/presidents/agadir.png",
    heading: "Aseesim Agadir",
    subheading: "Sed ut perspiciatis unde omnis iste",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/beni-melal.png",
    heading: "Aseesim Beni-Melal",
    subheading: "Sanogo Ibrahim",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Casablanca",
    subheading: "Sed ut perspiciatis unde omnis iste",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/eljadida1.png",
    heading: "Aseesim El jadida",
    subheading: "N'guessan Maria Louisa",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/fes.png",
    heading: "Aseesim Fes",
    subheading: "Narcisse Ettien",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Kenitra",
    subheading: "Diarra Likmane Moustapha Aziz",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Marrackech",
    subheading: "Sed ut perspiciatis unde omnis iste",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Meknes",
    subheading: "Soro Gnénéman Serge",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Mohammedia",
    subheading: "Konan Christ Désiré",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Oujda",
    subheading: "Koné Issouf",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/rabat.png",
    heading: "Aseesim Rabat",
    subheading: "Florine Huya-Kouadio",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/avatar.png",
    heading: "Aseesim Tanger",
    subheading: "Dominique Manassé Labi",
    link: "Voir plus",
  },
  {
    imgSrc: "/images/presidents/tetouan.png",
    heading: "Aseesim Tetouan",
    subheading: "Clovis Ebrottié",
    link: "Voir plus",
  },
];

const Work = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipeToSlide: true,
    centerMode: false,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div>
      <div className="mx-auto max-w-7xl py-40 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              sections
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
              Les Sections <br /> régionales.
            </p>
          </Fade>
        </div>

        <div className="section-slider">
          <Slider
            {...settings}
            className="flex flex-col justify-center items-center w-full auto"
          >
            {cardData.map((item, i) => (
              <div
                className="card p-4 relative container"
                key={i}
                style={{
                  backgroundImage: `url(${item.imgSrc})`
                }}
              >
                <div className="contain-card">
                  <Image src={item.imgSrc} alt="img" width={100} height={100} className="card-img" />
                  <h3 className="text-2xl font-semibold text-center mt-8">
                    {item.heading}
                  </h3>
                  <p className="text-lg font-normal text-center text-opacity-50 mt-2">
                    {item.subheading}
                  </p>
                  <div className="flex items-center justify-center">
                    <Link href="/">
                      <p className="text-center text-lg font-medium text-pink mt-2 hover-underline">
                        {item.link}
                        <ChevronRightIcon width={20} height={20} />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              // <div className="card bg-dark text-white section-elt container" >
              //     <Image className="card-img" src={item.imgSrc} width={150} height={100} alt="Card image"/>
              //   <div className="card-img-overlay">
              //     <h5 className="card-title">{item.heading}</h5>
              //     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              //     <p className="card-text">Last updated 3 mins ago</p>
              //   </div>
              // </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Work;
