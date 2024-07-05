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
            <h2 className='blueText'>{education.institution}</h2>
            <p>{education.period}</p>
            {education.degree && <p>{education.degree}</p>}
            <p>{education.department}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
