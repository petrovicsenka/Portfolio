import './Skills.scss';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='sectionTitle'>Skills</span>
      <div className='list'>
        <div className='skillBar'>
          <h3>Languages:</h3>
          <div>
            JavaScript, TypeScript, HTML, CSS, LESS, SCSS, Java, Scala, C#
          </div>
        </div>
        <div className='skillBar'>
          <h3>Frameworks:</h3>
          <div>
            Angular, Gatsby, Bootstrap, Jasmine, Spring (Core, MVC, Boot),
            Apache Spark
          </div>
        </div>
        <div className='skillBar'>
          <h3>Libraries:</h3>
          <div>
            React, React Query, Angular Material, RxJS, Axios, MobX, Ant Design
          </div>
        </div>
        <div className='skillBar'>
          <h3>Databases:</h3>
          <div>Microsoft SSMS, Oracle, MySQL, MariaDB </div>
        </div>
        <div className='skillBar'>
          <h3>Tools:</h3>
          <div>Git, Jenkins, Karma, Microsoft Azure, Figma </div>
        </div>
        <div className='skillBar'>
          <h3>Other:</h3>
          <div>
            Atlassian Jira, Atlassian Confluence, Agile methodology (Scrum,
            Kanban)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
