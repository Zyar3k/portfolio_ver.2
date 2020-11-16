import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faAngleDoubleUp,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import pl from "../../../images/pin_pl.png";
import uk from "../../../images/pin_uk.png";

import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className='viewContent contactContent'>
        <section className='quarter'>
          <div className='box box1'>
            <div className='boxTitle'>
              <FontAwesomeIcon className='icon' icon={faFilePdf} />
              <h3>CURRICULUM VITAE</h3>
            </div>
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
          </div>
        </section>
        <section className='quarter'>
          <div className='box box2'>
            <div className='boxTitle'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
              <h3>LINKEDIN</h3>
            </div>
            <a
              href='https://www.linkedin.com/in/arkadiusz-zygan/'
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn'
            >
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleLeft} />
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleUp} />
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleRight} />
              <FontAwesomeIcon className='icoBtnMob' icon={faSignInAlt} />
            </a>
          </div>
        </section>
        <section className='quarter'>
          <div className='box box3'>
            <div className='boxTitle'>
              <FontAwesomeIcon className='icon' icon={faGithub} />
              <h3>GITHUB</h3>
            </div>
            <a
              href='https://github.com/Zyar3k'
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn'
            >
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleLeft} />
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleUp} />
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleRight} />
              <FontAwesomeIcon className='icoBtnMob' icon={faSignInAlt} />
            </a>
          </div>
        </section>

        <section className='quarter'>
          <div className='box box4'>
            <div className='boxTitle'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <h3>GMAIL</h3>
            </div>
            <a
              href='mailto:a.zygan@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn'
            >
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleLeft} />
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleUp} />
              <FontAwesomeIcon className='icoBtn' icon={faAngleDoubleRight} />
              <FontAwesomeIcon className='icoBtnMob' icon={faSignInAlt} />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
