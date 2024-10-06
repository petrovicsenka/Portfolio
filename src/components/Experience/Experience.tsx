import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './Experience.scss';

const experiences = [
  {
    title:
      'Software Engineer, Factory World Wide d.o.o / Factory Group d.o.o, Belgrade',
    date: 'January 2024 – present',
    responsibilities: [
      'Application development from initial concept to completion and enhancement of existing applications using Angular, React and Gatsby',
      'State management with ReactQuery, Axios, MobX, RxJS',
      'Responsive Web design implementation using Mobile-first approach',
      'Close collaboration with designers, developers, QA testers and managers to deliver high-quality, performant and scalable solutions',
      'Work organized through Agile development methodology – Kanban',
    ],
  },
  {
    title: 'Software Developer, Intelisale d.o.o, Belgrade',
    date: 'June 2022 – January 2024',
    responsibilities: [
      'Frontend software development and maintenance of B2B solutions',
      'Angular components and new features development',
      'State management with RxJS',
      'Frontend - backend communication through REST API',
      'Responsive Web design',
      'Applications optimization for maximum speed and scalability',
      'Deploying applications to a test/production environment (Jenkins, Azure, IIS)',
      'Participation in code reviews of other colleagues',
      'Held presentations for colleagues in order to transfer knowledge',
      'Work organized through Agile development methodology - Scrum',
      'Distinguished skills: Angular, RxJS, Angular Material, LESS, Bootstrap, AG Grid, Microsoft SSMS',
    ],
  },
  {
    title: 'Solution Developer, Engineering Software Lab d.o.o, Belgrade',
    date: 'February 2021 – June 2022',
    responsibilities: [
      'Complex data management systems development and maintenance using a range of technologies: Scala and Apache Spark in Big Data and Spring Boot, Oracle and MariaDB for Backend development.',
    ],
  },
];

const Experience = () => {
  return (
    <section id='experience'>
      <span className='sectionTitle'>Experience</span>
      <span className='experienceDesc'>
        My work in both product and outsourcing companies as well as my
        contributions to personal projects has honed my skills and adaptability
        across various domains.
      </span>
      <div className='experienceItems'>
        {experiences.map((experience, index) => (
          <div key={index}>
            <InView threshold={0.25} triggerOnce={true}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className='experienceItem'
                  initial='hidden'
                  animate={inView ? 'visible' : 'hidden'}
                  variants={{
                    hidden: { x: index % 2 === 0 ? -150 : 150, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1.6 },
                    },
                  }}
                >
                  <h2>{experience.title}</h2>
                  <p>{experience.date}</p>
                  <ul>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </InView>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
