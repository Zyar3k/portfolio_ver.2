import data from "../../../data/db.json";

import "./Contact.scss";

const Contact = () => {
  const DB = data.contact;

  console.log(DB[0]);

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
              href={DB[0].cvPl}
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn cvBtn'
            >
              <img src={item.img1} alt='plFlag' />
            </a>
            <a
              href={DB[0].cvEng}
              target='_blank'
              rel='noopener noreferrer'
              className='checkBtn cvBtn'
            >
              <img src={item.img2} alt='ukFlag' />
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
