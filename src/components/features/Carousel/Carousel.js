import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../../../data/db.json";

import "./Carousel.scss";

const Carousel = () => {
  const DB = data.portfolio;
  const carouselElements = DB.map((card, index) => (
    <div key={index} className='card-wrapper'>
      <div className='card'>
        <div className='card-name'>
          <p>{card.name}</p>
        </div>
        <div className='card-image'>
          <img src={card.img} alt='img' />
        </div>
        <ul className='social-icons'>
          <li>
            <a href={card.code} target='_blank' rel='noopener noreferrer'>
              <i className={`socIco ${card.icon}`} />
            </a>
          </li>
          <li>
            <a href={card.demo} target='_blank' rel='noopener noreferrer'>
              <i className={`socIco ${card.icon1}`} />
            </a>
          </li>
        </ul>
        <div className='details'>
          <div className='projDesc'>
            <h4>{card.desc1}</h4>
            <h5>{card.desc2}</h5>
          </div>
        </div>
      </div>
    </div>
  ));
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    initialSlide: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider className='carousel' {...settings}>
      {carouselElements}
    </Slider>
  );
};

export default Carousel;
