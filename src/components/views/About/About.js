import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./About.scss";

import imgLearn from "../../../images/learning.png";
import imgInf from "../../../images/infinitve.png";

const About = () => {
  const aboutSections = aboutDB.data.map((item, index) => (
    <section key={index}>
      {item.img ? <img src={imgLearn} alt='learning' /> : null}
      <p>{item.text}</p>
      {!item.img ? (
        <div className='links'>
          <a href={item.link1} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='icoBtn' icon={item.icon} /> {item.name1}
          </a>
          <a href={item.link2} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='icoBtn' icon={item.icon} /> {item.name2}
          </a>
          <a href={item.link3} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='icoBtn' icon={item.icon} /> {item.name3}
          </a>
        </div>
      ) : null}
    </section>
  ));

  return <div className='viewContent aboutContent'>{aboutSections}</div>;
};

export default About;

const aboutDB = {
  links: [
    {
      link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
      name: "Dev Ed",
      icon: faYoutube,
    },
    {
      link: "https://www.youtube.com/c/WebDevSimplified/featured",
      name: "Web Dev Simplified",
      icon: faYoutube,
    },
    {
      link: "https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow",
      name: "DesignCourse",
      icon: faYoutube,
    },
  ],
  data: [
    {
      img: imgLearn,
      text:
        "Nazywam się Arkadiusz Zygan. W 2019 roku postanowiłem usystematyzować wiedzę z zakresu kodowania i programowania. Na przestrzeni lat interesowałem się nowymi technologiami, jednak nie uzyskałem pełnej wiedzy teoretycznej, jak i nie zrealizowałem praktycznych projektów. Od tamtego czasu systematycznie uczę się programowania po stronie front-endu z elementami back-endu.",
    },
    {
      text:
        'Ukończyłem intensywny 9-miesięczny kurs programowania pod opieką indywidualnego mentora – bootcamp web developer plus w Kodilla. Uczestniczyłem również w szkoleniach rozszerzających moje umiejętności na platformie udemy z zakresu javascript, react i data science. Na bieżąco obserwuje zmiany w trendach, posiłkując się wieloma kanałami tematycznymi na youtube (m.in. Dev Ed - bardzo duża wiedza i zaraźliwy optymizm autora, Web Dev Simplified - "kopalnia" wiedzy, DesignCourse - fachowo i konkretnie na temat designu).',
      link1: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
      name1: "Dev Ed",
      link2: "https://www.youtube.com/c/WebDevSimplified/featured",
      name2: "Web Dev Simplified",
      link3: "https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow",
      name3: "DesignCourse",
      icon: faYoutube,
    },
    {
      img: imgInf,
      text:
        '"praktyka czyni mistrza" - każdy z nas to słyszał chociaż raz w swoim życiu. Zgadzam się, ale uważam, że trzeba dodać "świadome ćwiczenie" - termin ten wykuł anders erics­son. Uważa on również, że aby osiągnąć wysoki poziom w dowolnej dziedzinie potrzeba nawet 10000 godzin. Zdaję sobię sprawę, że wciąż dużo pracy przede mną. Ćwiczę i rozwijam swoje umiejętności w javascript, react, html5 oraz css/sass. Wiem, że jestem na początku tej drogi, ale jestem zmotywowany, aby stawiać kolejne kroki.',
    },
  ],
};
