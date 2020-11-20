import Typical from "react-typical";
import "./Homepage.scss";

import data from "../../../data/db.json";

const Homepage = () => {
  const DB = data.home[0];

  return (
    <>
      <div className='viewContent homeContent'>
        <article className='introduction'>
          <section className='top'>
            <h4 className='topWrapper'>{DB.start}</h4>
            <div className='centralWrapper'>
              <div className='nameWrapper'>
                <div className='name'>{DB.name}</div>
                <div className='lastName'>{DB.lastName}</div>
              </div>
              <span className='start'>
                <Typical
                  steps={[
                    2200,
                    `${DB.step1}`,
                    1500,
                    `${DB.step2}`,
                    1500,
                    `${DB.step3}`,
                    1500,
                    `${DB.step4}`,
                    1500,
                    `${DB.step5}`,
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </span>
            </div>
            <h4 className='bottomWrapper'>{DB.job}</h4>
          </section>
          <section className='bottom'>
            <p>{DB.quote}</p>
            <span>{DB.author}</span>
          </section>
        </article>
      </div>
    </>
  );
};

export default Homepage;
