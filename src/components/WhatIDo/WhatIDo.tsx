import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './WhatIDo.scss';
import { PlanningAndAnalysis } from '../../assets/svg/planning-and-analysis.tsx';
import { CustomSolutionDevelopment } from '../../assets/svg/custom-solution-development.tsx';
import { ResponsiveWebDesign } from '../../assets/svg/responsive-web-design.tsx';
import { VersionControl } from '../../assets/svg/version-control.tsx';
import { AgileMethodology } from '../../assets/svg/agile-methodology.tsx';

const activities = [
  {
    title: 'Planning and Analysis',
    Icon: PlanningAndAnalysis,
    description:
      'Understanding user needs and translating them into technical requirements. Defining project functionalities and specifications. Creating technical documentation.',
  },
  {
    title: 'Custom Solution Development',
    Icon: CustomSolutionDevelopment,
    description:
      'Web application development to meet specific clients’ preferences. Writing clean, efficient, and scalable code using modern technologies like TypeScript, JavaScript, Angular, React, Gatsby...',
  },
  {
    title: 'Responsive Web Design',
    Icon: ResponsiveWebDesign,
    description:
      'Designing and developing applications with a Mobile-First approach to ensure a seamless experience across all devices. Creating fluid grids, flexible images and media queries to ensure that web applications adjust smoothly to different screen sizes and resolutions. Providing cross-browser compatibility.',
  },
  {
    title: 'Version Control and Collaboration',
    Icon: VersionControl,
    description:
      'Using Git for code versioning and team collaboration. Ensuring code quality through code reviews and continuous integration practices.',
  },
  {
    title: 'Agile Methodology',
    Icon: AgileMethodology,
    description:
      'Working in Agile environments, including sprint planning, daily stand-up meetings and retrospectives.',
  },
];

const WhatIDo = () => {
  return (
    <section id='about'>
      <span className='sectionTitle'>What I do</span>
      <span className='whatIDoDesc'>
        From concept to reality, I bring ideas to life through detailed
        implementation. Each project is an opportunity to transform vision into
        concrete, user-centric experiences.
      </span>
      <div className='whatIDoBars'>
        {activities.map((activity, index) => (
          <div key={index}>
            <InView threshold={0.25} triggerOnce={true}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className='whatIDoBar'
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
                  <activity.Icon className='whatIDoBarImg' />
                  <div className='whatIDoBarText'>
                    <h2>{activity.title}</h2>
                    <p className='paragraph'>{activity.description}</p>
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
