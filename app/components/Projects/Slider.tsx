import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import PrevArrow from '../events/PreviewArrow';
import NextArrow from '../events/NextArrow';

let data = [
  {
    img: "images/aseesim/aff1.jpg",
    disc: "projet de fin d'étude intitulé: développement d'une application web de gestion d'évènements et manifestations culturelles avec J2E"
  },
  {
    img: "images/pokeman.jpeg",
    disc: "Application android développée avec react native pour afficher la liste des pokemans par section recuperés à partir d'un api."
  },
  {
    img: "images/tictac.png",
    disc: "projet javascript de réalisation du  jeu de morpion (tic tac toe)."
  },
  {
    img: "images/pharma.jpg",
    disc: "Projet react js pour la localisation des pharmacies de garde sur le map."
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><PrevArrow /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><NextArrow /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`