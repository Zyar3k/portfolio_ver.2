import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div>
          zygan<span>arkadiusz</span>
          <span>2020</span>
        </div>
        <div className='socialWrapper'>
          <a
            href='https://www.linkedin.com/in/arkadiusz-zygan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href='https://github.com/Zyar3k'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href='mailto:a.zygan@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className='footerLinks'>
          <Link to='/portfolio' className='footLinks'>
            portfolio
          </Link>
          <Link to='/contact' className='footLinks'>
            contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
