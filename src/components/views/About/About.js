import "./About.scss";

import imgLearn from "../../../images/learning.png";
import imgInf from "../../../images/infinitve.png";

const About = () => {
  return (
    <div className='viewContent aboutContent'>
      <section>
        <p>
          <img src={imgLearn} alt='learning' />
          nazywam się arkadiusz zygan. w 2019 roku postanowiłem usystematyzować
          wiedzę z zakresu kodowania i programowania. na przestrzeni lat
          interesowałem się nowymi technologiami, jednak nie uzyskałem pełnej
          wiedzy teoretycznej, jak i nie zrealizowałem praktycznych projektów.
          od tamtego czasu systematycznie uczę się programowania po stronie
          front-endu z elementami back-endu.
        </p>
      </section>
      <section>
        <p>
          ukończyłem intensywny 9-miesięczny kurs programowania pod opieką
          indywidualnego mentora – bootcamp web developer plus w kodilla.
          uczestniczyłem również w szkoleniach rozszerzających moje umiejętnośći
          na platformie udemy z zakresu javascript, react i data science. na
          bieżąco obserwuje zmiany w trendach, posiłkując się wieloma kanałami
          tematycznymi na youtube (m.in.
          <a href='https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q'>
            Dev Ed
          </a>
          - bardzo duża wiedza i zaraźliwy optymizm autora,
          <a href='https://www.youtube.com/c/WebDevSimplified/featured'>
            Web Dev Simplified
          </a>
          - "kopalnia" wiedzy,
          <a href='https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow'>
            DesignCourse
          </a>
          - fachowo i konkretnie na temat designu )
        </p>
      </section>
      <section>
        <p>
          /'praktyka czyni mistrza/' - każdy z nas to słyszał chociaż raz w
          swoim życiu. zgadzam się, ale uważam, że trzeba dodać 'świadome
          ćwiczenie' - termin ten wykuł anders erics­son. uważa on również, że
          aby osiągnąć wysoki poziom w dowolnej dziedzinie potrzeba nawet 10000
          godzin. zdaję sobię sprawę, że wciąż dużo pracy przede mną. ćwiczę i
          rozwijam swoje umiejętności w javascript, react, html5 oraz css/sass.
          wiem, że jestem na początku tej drogi, ale jestem zmotywowany, aby
          stawiać kolejne kroki.
          <img src={imgInf} alt='infinitive' />
        </p>
      </section>
    </div>
  );
};

export default About;
