import { Link } from "react-router-dom";

import data from "../../../data/db.json";

import "./Footer.scss";

const Footer = () => {
  const DB = data.footerDB[0];

  const socialElem = DB.social.map((item, index) => (
    <a href={item.link} key={index} target='_blank' rel='noopener noreferrer'>
      <i className={item.icon} />
    </a>
  ));
  const footMenu = DB.footMenu.map((item, index) => (
    <Link key={index} to={item.link} className='footLinks'>
      {item.name}
    </Link>
  ));

  return (
    <footer>
      <div className='footer'>
        <div>
          {DB.text1}
          <span>{DB.text2}</span>
          <span>{DB.text3}</span>
        </div>
        <div className='socialWrapper'>{socialElem}</div>
        <div className='footerLinks'>{footMenu}</div>
      </div>
    </footer>
  );
};

export default Footer;
