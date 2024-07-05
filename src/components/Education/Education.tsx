import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './Education.scss';

const educationDetails = [
  {
    institution: 'Faculty of Organizational Sciences, University of Belgrade',
    period: '2019 - 2020',
    degree: 'Master of Science in Organizational Sciences',
    department: 'Department of Information Systems and Technologies',
  },
  {
    institution: 'Faculty of Organizational Sciences, University of Belgrade',
    period: '2014 - 2019',
    degree: 'Bachelor of Science in Organizational Sciences',
    department: 'Department of Information Systems and Technologies',
  },
  {
    institution: 'Zemun Gymnasium, Belgrade',
    period: '2010 - 2014',
    department: 'Department of Natural Sciences and Mathematics',
  },
];

const Education = () => {
  return (
    <section id='education'>
      <h1 className='sectionTitle'>Education</h1>
      <div className='education'>
        {educationDetails.map((education, index) => (
          <div className='educationItem' key={index}>
            <InView threshold={0.1} triggerOnce={true}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial='hidden'
                  animate={inView ? 'visible' : 'hidden'}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.2,
                      },
                    },
                  }}
                >
                  <h2 className='blueText'>{education.institution}</h2>
                  <p>{education.period}</p>
                  {education.degree && <p>{education.degree}</p>}
                  <p>{education.department}</p>
                </motion.div>
              )}
            </InView>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
