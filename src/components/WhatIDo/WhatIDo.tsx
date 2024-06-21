import './WhatIDo.scss';
import planningAndAnalysis from '../../assets/planning-and-analysis.svg';
import customSolutionDevelopment from '../../assets/custom-soluton-development.svg';
import responsiveWebDesign from '../../assets/responsive-web-design.svg';
import versionControl from '../../assets/version-control.svg';
import agileMethodology from '../../assets/agile-methodology.svg';

const WhatIDo = () => {
  return (
    <section id='about'>
      <span className='whatIDoTitle'>What I do</span>
      <span className='whatIDoDesc'>From concept to reality, I bring ideas to life through detailed implementation. Each project is an opportunity to transform vision into concrete, user-centric experiences.</span>
      <div className='whatIDoBars'>
        <div className='whatIDoBar'>
          <img src={planningAndAnalysis} alt='PlanningAndAnalysis' className='whatIDoBarImg' />
          <div className='whatIDoBarText'>
            <h2>Planning and Analysis</h2>
            <p>Understanding user needs and translating them into technical requirements. Defining project functionalities and specifications. Creating technical documentation.</p>
          </div>
        </div>
        <div className='whatIDoBar'>
          <img src={customSolutionDevelopment} alt='CustomSolutionDevelopment' className='whatIDoBarImg customSolutionDev' />
          <div className='whatIDoBarText'>
            <h2>Custom Solution Development</h2>
            <p>Web application development to meet specific clients’ preferences. Writing clean, efficient, and scalable code using modern technologies like TypeScript, JavaScript, Angular, React, Gatsby...</p>
          </div>
        </div>
        <div className='whatIDoBar'>
          <img src={responsiveWebDesign} alt='ResponsiveWebDesign' className='whatIDoBarImg' />
          <div className='whatIDoBarText'>
            <h2>Responsive Web Design</h2>
            <p>Designing and developing applications with a Mobile-First approach to ensure a seamless experience across all devices. Creating fluid grids, flexible images and media queries to ensure that web applications adjust smoothly to different screen sizes and resolutions. Providing cross-browser compatibility.</p>
          </div>
        </div>
        <div className='whatIDoBar'>
          <img src={versionControl} alt='VersionControl' className='whatIDoBarImg' />
          <div className='whatIDoBarText'>
            <h2>Version Control and Collaboration</h2>
            <p>Using Git for code versioning and team collaboration.</p>
          </div>
        </div>
        <div className='whatIDoBar'>
          <img src={agileMethodology} alt='' className='whatIDoBarImg' />
          <div className='whatIDoBarText'>
            <h2>Agile Methodology</h2>
            <p>Working in Agile environments, including sprint planning, daily stand-up meetings and retrospectives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
