import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../../../data/db.json";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// import img1 from "../../../images/bcd.png"; //      /static/media/bcd.0273e508.png
// import img2 from "../../../images/czatap_port.png"; //   /static/media/czatap_port.778ddc9f.png
// import img3 from "../../../images/Covid-19 Counter.png"; //   /static/media/Covid-19 Counter.824c69f5.png
// import img4 from "../../../images/rps.png"; //   /static/media/rps.3dda273a.png
// import img5 from "../../../images/Numerologia.png"; //   /static/media/Numerologia.8552b7d2.png
// import img6 from "../../../images/Picture_shop.png"; //    /static/media/Picture_shop.c7989b2d.png
// import img7 from "../../../images/local_weather.jpg"; //   /static/media/local_weather.69a3fe0a.jpg
// import img8 from "../../../images/panel_adm.png"; //   /static/media/panel_adm.70f98583.png
// import img9 from "../../../images/group_project.png"; //   /static/media/group_project.8bb51d45.png
// import img10 from "../../../images/toDoApp.png"; //   /static/media/toDoApp.44e348f3.png
// import img11 from "../../../images/new_wave.png"; //   /static/media/new_wave.3e094d60.png

import "./Carousel.scss";

const Carousel = () => {
  const DB = data.portfolioDB;
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
    // autoplay: true,
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

// const portfolioDB = {
//   projects: [
//     {
//       name: "picture shop",
//       img: img6,
//       code: "https://github.com/Zyar3k/picture_shop",
//       demo: "https://picture-shop.netlify.app/",
//       desc1:
//         "Strona z elementami portfolio fotografa. Działający koszyk i zwalidowany formularz wiadomości",
//       desc2: "Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "Betty Craft Designs",
//       img: img1,
//       code: "https://github.com/Zyar3k/online_shop_bcd",
//       demo: "https://online-shop-bcd.herokuapp.com/",
//       desc1: "Indywidualny projekt na zakończenie Bootcampu Web Developer Plus",
//       desc2:
//         "Tech stack: MERN - MongoDB, Express, React (Redux, Router), Node.js | Sass | CRA - webpack | npm | Yarn",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "Cz@-App",
//       img: img2,
//       code: "https://github.com/Zyar3k/your_chat_app/tree/master",
//       demo: "https://youthful-clarke-0b8301.netlify.app/",
//       desc1: "Aplikacja czatowa w czasie rzeczywistym",
//       desc2:
//         "Tech stack: HTML | Sass | RWD | React | Express | Node | Socket.IO | CRA- webpack | git | Yarn",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "statystyki CovID-19",
//       img: img3,
//       code: "https://github.com/Zyar3k/covid-19_counter",
//       demo: "https://covid-19-counter.netlify.app/",
//       desc1:
//         "Aplikacja pozwalająca śledzić na bieżąco statystyki dotyczące Covid-19",
//       desc2: "Tech stack: HTML | Sass | RWD | React | API | npm Scripts",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "kamień - papier - nożyce",
//       img: img4,
//       code: "https://github.com/Zyar3k/rock-paper-scissors",
//       demo: "https://zyar3k.github.io/rock-paper-scissors/",
//       desc1: "Pierwsza gra napisana w JavaScript wyświetlająca wynik rozgrywki",
//       desc2: "Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "numerologia",
//       img: img5,
//       code: "https://github.com/Zyar3k/numerology_4.0.0",
//       demo: "https://numerologia.netlify.app/",
//       desc1:
//         "Aplikacja pozwalająca poznać swoje specjalne liczby i sprawdzić wibracje numerologiczne na dwoolny dzień/miesiąc",
//       desc2: "Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },

//     {
//       name: "Aplikacja pogodowa",
//       img: img7,
//       code: "https://github.com/Zyar3k/local_weather_app",
//       demo: "https://agitated-aryabhata-cef99e.netlify.app/",
//       desc1:
//         "Aplikacja pogodowa z użyciem API - wyświetlająca aktualną pogodę w szukanym mieście",
//       desc2:
//         "Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | Yarn",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "panel administracyjny",
//       img: img8,
//       code: "https://github.com/Zyar3k/Solo-project",
//       demo: "https://zyar3k.github.io/Solo-project/#",
//       desc1:
//         "Pierwszy indywidualny projekt napisany podczas Bootcampu Web Developer Plus na podstawie pliku PSD od grafika",
//       desc2:
//         "Tech stack: HTML | Sass | RWD | JavaScript ES5 | Photoshop | npm Scripts",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "Projekt grupowy",
//       img: img9,
//       code: "https://github.com/Zyar3k/kodilla_group_project",
//       demo: "https://stupefied-lewin-977cb1.netlify.com/",
//       desc1:
//         "Projekt grupowy - symulacja pracy w grupie z innymi junior Front-end developerami. Każdy z uczestników wybierał/miał przydzielane zadania",
//       desc2:
//         "Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git | Jira | kanban | Yarn",
//     },
//     {
//       name: "Do zrobienia!",
//       img: img10,
//       code: "https://github.com/Zyar3k/todo_react_app",
//       demo: "https://dozrobienia-app.netlify.app/",
//       desc1:
//         "Aplikacja ToDo - aplikacja stworzona w React. Priorytety i ukończone zadania",
//       desc2:
//         "Tech stack: HTML | Sass | RWD | React | CRA- webpack | git | Yarn",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//     {
//       name: "New Wave festival",
//       img: img11,
//       code: "https://github.com/Zyar3k/newwavefestival-feb2020",
//       demo: "https://secure-woodland-63361.herokuapp.com/",
//       desc1:
//         "Projekt treningowy - praca skupiona na backendowej stronie projektu oraz połączenie front i backendu",
//       desc2:
//         "Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git | Yarn",
//       icon: "fab fa-github",
//       icon1: "fas fa-play-circle",
//     },
//   ],
// };
