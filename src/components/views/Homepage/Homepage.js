import Typical from "react-typical";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className='viewContent homeContent'>
        <span className='start'>
          <div className='firstLine'>Nazywam się Arek</div>
          <div className='secondLine'>
            <span>Zygan</span>
            <span>Arek</span>{" "}
          </div>
          <Typical
            steps={["PASJA", 2000, "PRACA", 2000, "SUKCES", 2000]}
            loop={Infinity}
            wrapper='h3'
          />
        </span>
      </div>
    </>
  );
};

export default Homepage;
