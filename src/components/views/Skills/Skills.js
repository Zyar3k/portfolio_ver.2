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
  const frontSection = skillsDB.frontContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <FontAwesomeIcon icon={item.icon} className={`icon ${item.class}`} />
      <span className='skillName'>{item.name}</span>
    </div>
  ));
  const backSection = skillsDB.backContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <FontAwesomeIcon icon={item.icon} className={`icon ${item.class}`} />
      <span className='skillName'>{item.name}</span>
    </div>
  ));
  const toolsSection = skillsDB.toolsContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <FontAwesomeIcon icon={item.icon} className={`icon ${item.class}`} />
      <span className='skillName'>{item.name}</span>
    </div>
  ));
  return (
    <>
      <main className='viewContent skillsContent'>
        <article className='skillsSection sectFront'>
          <h4 className='skillsTitle'>
            <p>{skillsDB.frontTitle}</p>
          </h4>
          <section className='skillsWrapp'>{frontSection}</section>
        </article>

        <article className='skillsSection sectBack'>
          <h4 className='skillsTitle'>
            <p>{skillsDB.backTitle}</p>
          </h4>
          <section className='skillsWrapp'>{backSection}</section>
        </article>
        <article className='skillsSection sectTool'>
          <h4 className='skillsTitle'>
            <p>{skillsDB.toolsTitle}</p>
          </h4>
          <section className='skillsWrapp'>{toolsSection}</section>
        </article>
      </main>
    </>
  );
};

export default Skills;

const skillsDB = {
  frontTitle: "Front-end",
  backTitle: "Back-end",
  toolsTitle: "narzędzia",
  frontContent: [
    {
      icon: faHtml5,
      name: "HTML5",
      class: "html5",
    },
    {
      icon: faCss3,
      name: "CSS",
      class: "css",
    },
    {
      icon: faSass,
      name: "Sass",
      class: "sass",
    },
    {
      icon: faBootstrap,
      name: "Bootstrap",
      class: "bootstrap",
    },
    {
      icon: faJs,
      name: "JavaScript",
      class: "js",
    },
    {
      icon: faReact,
      name: "React+Redux",
      class: "react",
    },
  ],
  backContent: [
    {
      icon: faNode,
      name: "Node.js - Express",
      class: "node",
    },
    {
      icon: faMdb,
      name: "MongoDB",
      class: "mongo",
    },
  ],
  toolsContent: [
    {
      icon: faGitAlt,
      name: "git",
      class: "git",
    },
    {
      icon: faNpm,
      name: "npm",
      class: "npm",
    },
    {
      icon: faYarn,
      name: "yarn",
      class: "yarn",
    },
    {
      icon: faJira,
      name: "Jira",
      class: "jira",
    },
  ],
};
