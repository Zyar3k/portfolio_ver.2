import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSass,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faNode,
  faMdb,
  faGitAlt,
  faNpm,
  faYarn,
  faJira,
} from "@fortawesome/free-brands-svg-icons";

import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <main className='viewContent skillsContent'>
        <article className='skillsSection sectFront'>
          <h4 className='skillsTitle'>
            <p>FRONT-END</p>
          </h4>
          <section className='skillsWrapp'>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faHtml5} className='icon html5' />
              <span className='skillName'>HTML5</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faCss3} className='icon css' />
              <span className='skillName'>CSS</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faSass} className='icon sass' />
              <span className='skillName'>Sass</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faBootstrap} className='icon bootstrap' />
              <span className='skillName'>Bootstrap</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faJs} className='icon js' />
              <span className='skillName'>JavaScript</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faReact} className='icon react' />
              <span className='skillName'>React+Redux</span>
            </div>
          </section>
        </article>
        <article className='skillsSection sectBack'>
          <h4 className='skillsTitle'>
            <p>BACK-END</p>
          </h4>
          <section className='skillsWrapp'>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faNode} className='icon node' />
              <span className='skillName node'>Node.Js / Express</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faMdb} className='icon mongo' />
              <span className='skillName'>MongoDB</span>
            </div>
          </section>
        </article>
        <article className='skillsSection sectTool'>
          <h4 className='skillsTitle'>
            <p>TOOLS</p>
          </h4>
          <section className='skillsWrapp'>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faGitAlt} className='icon git' />
              <span className='skillName'>git</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faNpm} className='icon npm' />
              <span className='skillName'>npm</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faYarn} className='icon yarn' />
              <span className='skillName'>yarn</span>
            </div>
            <div className='skillBox'>
              <FontAwesomeIcon icon={faJira} className='icon jira' />
              <span className='skillName'>Jira</span>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Skills;
