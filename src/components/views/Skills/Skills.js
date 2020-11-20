import data from "../../../data/db.json";

import "./Skills.scss";

const Skills = () => {
  const DB = data.skillsDB;
  const frontSection = DB[0].frontContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <i className={`icon ${item.class} ${item.icon}`} />
      <span className='skillName'>{item.name}</span>
    </div>
  ));

  const backSection = DB[0].backContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <i className={`icon ${item.class} ${item.icon}`} />
      <span className={item.class1 ? `skillName ${item.class1}` : "skillName"}>
        {item.name}
      </span>
    </div>
  ));
  const toolsSection = DB[0].toolsContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <i className={`icon ${item.class} ${item.icon}`} />
      <span className='skillName'>{item.name}</span>
    </div>
  ));

  return (
    <>
      <main className='viewContent skillsContent'>
        <article className='skillsSection sectFront'>
          <h4 className='skillsTitle'>
            <p>{DB[0].frontTitle.title}</p>
          </h4>
          <section className='skillsWrapp'>{frontSection}</section>
        </article>

        <article className='skillsSection sectBack'>
          <h4 className='skillsTitle'>
            <p>{DB[0].backTitle.title}</p>
          </h4>
          <section className='skillsWrapp'>{backSection}</section>
        </article>
        <article className='skillsSection sectTool'>
          <h4 className='skillsTitle'>
            <p>{DB[0].toolsTitle.title}</p>
          </h4>
          <section className='skillsWrapp'>{toolsSection}</section>
        </article>
      </main>
    </>
  );
};

export default Skills;
