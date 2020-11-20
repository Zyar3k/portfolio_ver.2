// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import data from "../../../data/db.json";

import "./About.scss";

// import imgLearn from "../../../images/learning.png";
// import imgInf from "../../../images/infinitve.png";

const About = () => {
  const DB = data.aboutDB;
  const aboutSections = DB.map((item, index) => (
    <section key={index}>
      {item.img ? <img src={item.img} alt='learning' /> : null}
      <p>{item.text}</p>
      {!item.img ? (
        <div className='links'>
          <a href={item.link1} target='_blank' rel='noopener noreferrer'>
            <i className={`icoBtn ${item.icon}`} />
            {item.name1}
          </a>
          <a href={item.link2} target='_blank' rel='noopener noreferrer'>
            <i className={`icoBtn ${item.icon}`} />
            {item.name2}
          </a>
          <a href={item.link3} target='_blank' rel='noopener noreferrer'>
            <i className={`icoBtn ${item.icon}`} />
            {item.name3}
          </a>
        </div>
      ) : null}
    </section>
  ));

  return <div className='viewContent aboutContent'>{aboutSections}</div>;
};

export default About;
