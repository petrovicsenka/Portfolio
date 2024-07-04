import './WhatIDo.scss';
import planningAndAnalysis from '../../assets/planning-and-analysis.svg';
import customSolutionDevelopment from '../../assets/custom-soluton-development.svg';
import responsiveWebDesign from '../../assets/responsive-web-design.svg';
import versionControl from '../../assets/version-control.svg';
import agileMethodology from '../../assets/agile-methodology.svg';

const activities = [
  {
    title: 'Planning and Analysis',
    imgSrc: planningAndAnalysis,
    alt: 'PlanningAndAnalysis',
    description:
      'Understanding user needs and translating them into technical requirements. Defining project functionalities and specifications. Creating technical documentation.',
  },
  {
    title: 'Custom Solution Development',
    imgSrc: customSolutionDevelopment,
    alt: 'CustomSolutionDevelopment',
    description:
      'Web application development to meet specific clients’ preferences. Writing clean, efficient, and scalable code using modern technologies like TypeScript, JavaScript, Angular, React, Gatsby...',
  },
  {
    title: 'Responsive Web Design',
    imgSrc: responsiveWebDesign,
    alt: 'ResponsiveWebDesign',
    description:
      'Designing and developing applications with a Mobile-First approach to ensure a seamless experience across all devices. Creating fluid grids, flexible images and media queries to ensure that web applications adjust smoothly to different screen sizes and resolutions. Providing cross-browser compatibility.',
  },
  {
    title: 'Version Control and Collaboration',
    imgSrc: versionControl,
    alt: 'VersionControl',
    description: 'Using Git for code versioning and team collaboration.',
  },
  {
    title: 'Agile Methodology',
    imgSrc: agileMethodology,
    alt: 'AgileMethodology',
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
          <div className='whatIDoBar' key={index}>
            <img
              src={activity.imgSrc}
              alt={activity.alt}
              className='whatIDoBarImg'
            />
            <div className='whatIDoBarText'>
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
