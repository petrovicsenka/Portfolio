import './Experience.scss';

const Experience = () => {
  return (
    <section id='experience'>
      <span className='sectionTitle'>Experience</span>
      <span className='experienceDesc'>
        My work in both product and outsourcing companies as well as my
        contributions to personal projects has honed my skills and adaptability
        across various domains.
      </span>
      <div className='experienceItem'>
        <h2>
          Software Engineer, Factory World Wide d.o.o / Factory Group d.o.o,
          Belgrade
        </h2>
        <p>January 2024 – present</p>
        <ul>
          <li>
            Application development from initial concept to completion and
            enhancement of existing applications using Angular, React and Gatsby
          </li>
          <li>State management with ReactQuery, Axios, MobX, RxJS</li>
          <li>
            Responsive Web design implementation using Mobile-first approach
          </li>
          <li>
            Close collaboration with designers, developers, QA testers and
            managers to deliver high-quality, performant and scalable solutions
          </li>
          <li>Work organized through Agile development methodology – Kanban</li>
        </ul>
      </div>
      <div className='experienceItem'>
        <h2>Software Developer, Intelisale d.o.o, Belgrade</h2>
        <p>June 2022 – January 2024</p>
        <ul>
          <li>
            Frontend software development and maintenance of B2B solutions
          </li>
          <li>Angular components and new features development</li>
          <li>State management with RxJS</li>
          <li>Frontend - backend communication through REST API</li>
          <li>Responsive Web design</li>
          <li>Applications optimization for maximum speed and scalability</li>
          <li>
            Deploying applications to a test/production environment (Jenkins,
            Azure, IIS)
          </li>
          <li>Participation in code reviews of other colleagues</li>
          <li>
            Held presentations for colleagues in order to transfer knowledge
          </li>
          <li>Work organized through Agile development methodology - Scrum</li>
          <li>
            Distinguished skills: Angular, RxJS, Angular Material, LESS,
            Bootstrap, AG Grid, Microsoft SSMS
          </li>
        </ul>
      </div>
      <div className='experienceItem'>
        <h2>Solution Developer, Engineering Software Lab d.o.o, Belgrade</h2>
        <p>February 2021 – June 2022</p>
        <ul>
          <li>Complex data management systems development and maintenance using a range of technologies: Scala and Apache Spark in Big Data and Spring Boot, Angular, Oracle and MariaDB for Full-stack development.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
