import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faAngleDoubleUp,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import pl from "../../../images/pin_pl.png";
import uk from "../../../images/pin_uk.png";

import "./Contact.scss";

const Contact = () => {
  const contactSections = contactDB.map((item, index) => (
    <section className='quarter'>
      <div className={`box ${item.class}`}>
        <div className='boxTitle'>
          <FontAwesomeIcon className='icon' icon={item.mainIcon} />
          <h3>{item.title}</h3>
        </div>
        {item.img1 ? (
          <span>
            <a
              href='https://drive.google.com/file/d/1d2C9pub8Kvj9UCHmJDoG0_JCUtyKupmu/view'
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn cvBtn'
            >
              <img src={pl} alt='plFlag' />
            </a>
            <a
              href='https://drive.google.com/open?id=1sixNne4mGrT94aVRdj6vGBRf9OMkvZHp'
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn cvBtn'
            >
              <img src={uk} alt='ukFlag' />
            </a>
          </span>
        ) : (
          <a
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='checkBtn'
          >
            <FontAwesomeIcon className='icoBtn' icon={item.btnIcon} />
            <FontAwesomeIcon className='icoBtn' icon={item.btnIcon} />
            <FontAwesomeIcon className='icoBtn' icon={item.btnIcon} />
            <FontAwesomeIcon className='icoBtnMob' icon={item.mobIcon} />
          </a>
        )}
      </div>
    </section>
  ));

  return (
    <>
      <div className='viewContent contactContent'>{contactSections}</div>
    </>
  );
};

export default Contact;

const contactDB = [
  {
    class: "box1",
    mainIcon: faFilePdf,
    title: "CURRICULUM VITAE",
    link:
      "https://drive.google.com/file/d/1d2C9pub8Kvj9UCHmJDoG0_JCUtyKupmu/view",
    link2: "https://drive.google.com/open?id=1sixNne4mGrT94aVRdj6vGBRf9OMkvZHp",
    img1: pl,
    img2: uk,
    classBtn: "cvBtn",
    btnIcon: faAngleDoubleUp,
    mobIcon: faSignInAlt,
  },

  {
    class: "box2",
    mainIcon: faLinkedin,
    title: "LINKEDIN",
    link: "https://www.linkedin.com/in/arkadiusz-zygan/",
    btnIcon: faAngleDoubleUp,
    mobIcon: faSignInAlt,
  },
  {
    class: "box3",
    mainIcon: faGithub,
    title: "GITHUB",
    link: "https://github.com/Zyar3k",
    btnIcon: faAngleDoubleUp,
    mobIcon: faSignInAlt,
  },
  {
    class: "box4",
    mainIcon: faEnvelope,
    title: "GMAIL",
    link: "mailto:a.zygan@gmail.com",
    btnIcon: faAngleDoubleUp,
    mobIcon: faSignInAlt,
  },
];
