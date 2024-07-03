// import './Skills.scss';

// const Skills = () => {
//   return (
//     <section id='skills'>
//       <span className='sectionTitle'>Skills</span>
//       <div className='list'>
//         <div className='skillBar'>
//           <h3>Languages:</h3>
//           <div>
//             JavaScript, TypeScript, HTML, CSS, LESS, SCSS, Java, Scala, C#
//           </div>
//         </div>
//         <div className='skillBar'>
//           <h3>Frameworks:</h3>
//           <div>
//             Angular, Gatsby, Bootstrap, Jasmine, Spring (Core, MVC, Boot),
//             Apache Spark
//           </div>
//         </div>
//         <div className='skillBar'>
//           <h3>Libraries:</h3>
//           <div>
//             React, React Query, Angular Material, RxJS, Axios, MobX, Ant Design
//           </div>
//         </div>
//         <div className='skillBar'>
//           <h3>Databases:</h3>
//           <div>Microsoft SSMS, Oracle, MySQL, MariaDB </div>
//         </div>
//         <div className='skillBar'>
//           <h3>Tools:</h3>
//           <div>Git, Jenkins, Karma, Microsoft Azure, Figma </div>
//         </div>
//         <div className='skillBar'>
//           <h3>Other:</h3>
//           <div>
//             Atlassian Jira, Atlassian Confluence, Agile methodology (Scrum,
//             Kanban)
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.5, when: "beforeChildren", staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id='skills'>
      <motion.span
        className='sectionTitle'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.span>
      <motion.div
        className='list'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className='skillBar' variants={itemVariants}>
          <h3>Languages:</h3>
          <div>
            JavaScript, TypeScript, HTML, CSS, LESS, SCSS, Java, Scala, C#
          </div>
        </motion.div>
        <motion.div className='skillBar' variants={itemVariants}>
          <h3>Frameworks:</h3>
          <div>
            Angular, Gatsby, Bootstrap, Jasmine, Spring (Core, MVC, Boot),
            Apache Spark
          </div>
        </motion.div>
        <motion.div className='skillBar' variants={itemVariants}>
          <h3>Libraries:</h3>
          <div>
            React, React Query, Angular Material, RxJS, Axios, MobX, Ant Design
          </div>
        </motion.div>
        <motion.div className='skillBar' variants={itemVariants}>
          <h3>Databases:</h3>
          <div>Microsoft SSMS, Oracle, MySQL, MariaDB</div>
        </motion.div>
        <motion.div className='skillBar' variants={itemVariants}>
          <h3>Tools:</h3>
          <div>Git, Jenkins, Karma, Microsoft Azure, Figma</div>
        </motion.div>
        <motion.div className='skillBar' variants={itemVariants}>
          <h3>Other:</h3>
          <div>
            Atlassian Jira, Atlassian Confluence, Agile methodology (Scrum,
            Kanban)
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
