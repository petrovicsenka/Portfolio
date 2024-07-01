import './Education.scss';

const Education = () => {
  return (
    <section id='education'>
      <h1 className='sectionTitle'>Education</h1>

      <div className='education'>
        <div className='educationItem'>
          <h2 className='blueText'>
            Faculty of Organizational Sciences, University of Belgrade
          </h2>
          <p>2019 - 2020</p>
          <p>Master of Science in Organizational Sciences</p>
          <p>Department of Information Systems and Technologies</p>
        </div>
        <div className='educationItem'>
          <h2 className='blueText'>
            Faculty of Organizational Sciences, University of Belgrade
          </h2>
          <p>2014 - 2019</p>
          <p>Bachelor of Science in Organizational Sciences</p>
          <p>Department of Information Systems and Technologies</p>
        </div>
        <div className='educationItem'>
          <h2 className='blueText'>Zemun Gymnasium, Belgrade</h2>
          <p>2010 - 2014</p>
          <p>Department of Natural Sciences and Mathematics</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
