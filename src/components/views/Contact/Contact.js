import data from "../../../data/db.json";

import pl from "../../../images/pin_pl.png";
import uk from "../../../images/pin_uk.png";

import "./Contact.scss";

const Contact = () => {
  const DB = data.contactDB;

  const contactSections = DB.map((item, index) => (
    <section key={index} className='quarter'>
      <div className={`box ${item.class}`}>
        <div className='boxTitle'>
          <i className={`icon ${item.mainIcon}`} />
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
            <i className={`icoBtn ${item.btnIcon}`} />
            <i className={`icoBtn ${item.btnIcon}`} />
            <i className={`icoBtn ${item.btnIcon}`} />
            <i className={`icoBtnMob ${item.mobIcon}`} />
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
