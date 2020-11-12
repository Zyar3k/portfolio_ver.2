import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import img1 from "../../../images/bcd.png";
import img2 from "../../../images/czatap_port.png";
import img3 from "../../../images/Covid-19 Counter.png";
import img4 from "../../../images/rps.png";
import img5 from "../../../images/Numerologia.png";
import img6 from "../../../images/Picture_shop.png";
import img7 from "../../../images/local_weather.jpg";
import img8 from "../../../images/panel_adm.png";
import img9 from "../../../images/group_project.png";
import img10 from "../../../images/toDoApp.png";
import img11 from "../../../images/new_wave.png";

import "./Carousel.scss";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider className='carousel' {...settings}>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img11} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/newwavefestival-feb2020'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://secure-woodland-63361.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Projekt treningowy - praca skupiona na backendowej stronie
                projektu oraz połączenie front i backendu
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git
                | Yarn
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img1} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/online_shop_bcd'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://online-shop-bcd.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                indywidualny projekt na zakończenie bootcampu web developer
                plus.
              </h4>
              <h5>
                tech stack: mern - mongodb, express, react (redux, router),
                node.js | sass | cra - webpack | npm | yarn.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img2} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/your_chat_app/tree/master'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://youthful-clarke-0b8301.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>Aplikacja czatowa w czasie rzeczywistym</h4>
              <h5>
                Tech stack: HTML | Sass | RWD | React | Express | Node |
                Socket.IO | CRA- webpack | git | Yarn
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img3} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/covid-19_counter'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://covid-19-counter.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Aplikacja pozwalająca śledzić na bieżąco statystyki dotyczące
                Covid-19
              </h4>
              <h5>Tech stack: HTML | Sass | RWD | React | API | npm Scripts</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img4} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/rock-paper-scissors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://zyar3k.github.io/rock-paper-scissors/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Pierwsza gra napisana w JavaScript wyświetlająca wynik rozgrywki
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img5} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/numerology_4.0.0'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://numerologia.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Aplikacja pozwalająca poznać swoje specjalne liczby i sprawdzić
                wibracje numerologiczne na dwoolny dzień/miesiąc
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img6} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/picture_shop'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://picture-shop.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Strona z elementami portfolio fotografa. Działający koszyk i
                zwalidowany formularz wiadomości
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img7} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/local_weather_app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://agitated-aryabhata-cef99e.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Aplikacja pogodowa z użyciem API - wyświetlająca aktualną pogodę
                w szukanym mieście
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | React | API | CRA- webpack |
                Yarn
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img8} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/Solo-project'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://zyar3k.github.io/Solo-project/#'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Pierwszy indywidualny projekt napisany podczas Bootcampu Web
                Developer Plus na podstawie pliku PSD od grafika
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | Photoshop | npm
                Scripts
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img9} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/kodilla_group_project'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://stupefied-lewin-977cb1.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Projekt grupowy - symulacja pracy w grupie z innymi junior
                Front-end developerami. Każdy z uczestników wybierał/miał
                przydzielane zadania
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git
                | Jira | kanban | Yarn
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={img10} alt='img' />
          </div>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/Zyar3k/todo_react_app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://dozrobienia-app.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon className='socIco' icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <div className='details'>
            <div className='projDesc'>
              <h4>
                Aplikacja ToDo - aplikacja stworzona w React. Priorytety i
                ukończone zadania
              </h4>
              <h5>
                Tech stack: HTML | Sass | RWD | React | CRA- webpack | git |
                Yarn
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
