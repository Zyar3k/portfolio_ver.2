import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import ImgComp from "./ImgComp";
import "./Carousel1.scss";

import img1 from "../../../images/bcd.png";
import img2 from "../../../images/czatap_port.png";
import img3 from "../../../images/Covid-19 Counter.png";
import img4 from "../../../images/rps.png";
import img5 from "../../../images/Numerologia.png";

const Carousel = () => {
  let sliderArr = [
    <ImgComp src={img1} />,
    <ImgComp src={img2} />,
    <ImgComp src={img3} />,
    <ImgComp src={img4} />,
    <ImgComp src={img5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className='slider'>
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id='goLeft' onClick={goLeft}>
        <FontAwesomeIcon className='icon' icon={faChevronCircleLeft} />
      </button>
      <button id='goRight' onClick={goRight}>
        <FontAwesomeIcon className='icon' icon={faChevronCircleRight} />
      </button>
    </div>
  );
};

export default Carousel;
