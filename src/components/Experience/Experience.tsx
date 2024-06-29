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
        <h3>
          Software Engineer, Factory World Wide d.o.o / Factory Group d.o.o,
          Belgrade
        </h3>
        <span>January 2024 – present</span>
        <p>
          Kratak opis u 3 recenice. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam.
        </p>
      </div>
      <div className='experienceItem'>
        <h3>Software Developer, Intelisale d.o.o, Belgrade</h3>
        <span>June 2022 – January 2024</span>
        <p>
          Kratak opis u 3 recenice. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam.
        </p>
      </div>
      <div className='experienceItem'>
        <h3>Solution Developer, Engineering Software Lab d.o.o, Belgrade</h3>
        <span>February 2021 – June 2022</span>
        <p>
          Kratak opis u 3 recenice. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam.
        </p>
      </div>
    </section>
  );
};

export default Experience;
