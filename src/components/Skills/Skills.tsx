import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './Skills.scss';

const skillsData = [
  {
    category: 'Languages:',
    skills: 'JavaScript, TypeScript, HTML, CSS, LESS, SCSS, Java, Scala, C#',
  },
  {
    category: 'Frameworks:',
    skills:
      'Angular, Gatsby, Bootstrap, Jasmine, Spring (Core, MVC, Boot), Apache Spark',
  },
  {
    category: 'Libraries:',
    skills:
      'React, React Query, Angular Material, RxJS, Axios, MobX, Ant Design',
  },
  {
    category: 'Databases:',
    skills: 'Microsoft SSMS, Oracle, MySQL, MariaDB',
  },
  {
    category: 'Tools:',
    skills: 'Git, Jenkins, Karma, Microsoft Azure, Figma',
  },
  {
    category: 'Other:',
    skills:
      'Atlassian Jira, Atlassian Confluence, Agile methodology (Scrum, Kanban)',
  },
];

const Skills = () => {
  return (
    <section id='skills'>
      <span className='sectionTitle'>Skills</span>
      <div className='list'>
        {skillsData.map((skillGroup, index) => (
          <InView threshold={0.25} triggerOnce={true} key={index}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className='skillBar'
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3>{skillGroup.category}</h3>
                <div>{skillGroup.skills}</div>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
};

export default Skills;
