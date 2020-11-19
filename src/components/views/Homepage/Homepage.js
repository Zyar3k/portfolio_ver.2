import Typical from "react-typical";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className='viewContent homeContent'>
        <article className='introduction'>
          <section className='top'>
            <h4 className='topWrapper'>Nazywam się Zygan...</h4>
            <div className='centralWrapper'>
              <div className='nameWrapper'>
                <div className='name'>ARKADIUSZ</div>
                <div className='lastName'>ZYGAN</div>
              </div>
              <span className='start'>
                <Typical
                  steps={[
                    2200,
                    "Pasja",
                    1500,
                    "Nauka",
                    1500,
                    "Praktyka",
                    1500,
                    "Praca",
                    1500,
                    "Sukces",
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </span>
            </div>
            <h4 className='bottomWrapper'>Frontend Developer</h4>
          </section>
          <section className='bottom'>
            <p>
              Bez ciągłego wzrostu i postępu, słowa takie jak poprawa,
              osiągnięcia i sukces nie mają znaczenia
            </p>
            <span>Benjamin Franklin</span>
          </section>
        </article>
      </div>
    </>
  );
};

export default Homepage;
