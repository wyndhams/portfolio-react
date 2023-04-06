import React from 'react';

const Education = () => {
  return (
    <>
      <h1 id='title'>Education</h1>
      <div className='project-wrapper'>
        <div className='project-4'>
          <h2 id='title2'>General Assembly</h2>
          <h4>
            Software Engineering Immersive Course, Computer Software Engineering
          </h4>
          <h5>October 2022 - February 2023</h5>
          {/* <p>
            Frontend: Bulma, Chrome Dev Tools, CSS, HTML, JavaScript, Material
            UI, React, Sass, SCSS <br />
            <br /> Backend: Django, Express, MongoDB, Mongoose, Node.js, Python,
            PostgreSQL <br />
            <br /> Package: npm, pip, pipenv <br />
            <br /> Storage: Cloudinary, Heroku, Netlify Software: VSCode,
            Postman, TablePlus <br />
            <br />
            Version Control: Git, GitHub
          </p> */}
          <p>
            The course was conducted over Zoom with 37.5 contact hours and 25+
            hours of additional working time per week. The initial weeks of the
            course built upon my knowledge of HTML, CSS and JavaScript which
            acted as a strong foundation for development of full-stack
            applications in later weeks, working solo and in groups. I built and
            deployed applications working to tight deadlines using the MERN
            stack and also developed using Python/Django REST Framework and
            PostgreSQL. I took part in daily standups to discuss issues and plan
            work for the forthcoming day/week.
          </p>
          {/* <h5>Skills</h5> */}
          {/* <p>
            Responsive Web Design | Postman API | npm | Netlify · Heroku ·
            Cloudinary · SASS · Material-UI · PostgreSQL · Node.js · Mongoose
            ODM · MongoDB · Express.js · Cascading Style Sheets (CSS) · HTML ·
            Django REST Framework · Django · Python (Programming Language) ·
            React.js · JavaScript
          </p> */}
        </div>
        <div className='project-4'>
          <h2 id='title2'>Cardiff University</h2>
          <h4>
            First Class Honours, Master of Engineering (MEng), Civil and
            Environmental Engineering
          </h4>
          <h5>2010 - 2014</h5>
          <p>
            Activities and societies: Cardiff University Xpress Radio Friday
            Night Presenter, Intramural 11-a-side Football
          </p>
          {/* <p>
            4th Year Modules: Alternative Energy Systems; Coastal and Estuarine
            Engineering; Contaminated Land Design; Environmental Modelling;
            Industrial Practice; Management in Industry; Professional
            Engineering Studies; Renewable Energy Design; Soil and Groundwater
            Chemistry; Soil Mechanics
          </p>
          <p>
            3rd Year Modules: Business Management; Civil Engineering Design;
            Continuum Solid Mechanics; Environmental Geotechnics; Environmental
            Law; Geotechnical Engineering; Dissertation; Structural Design
            Studies; Water Engineering
          </p> */}
          <h5>Programming Skills</h5>
          <p>C++, MATLAB</p>
        </div>
        <div className='project-4'>
          <h2 id='title2'>St. Bartholomew's School</h2>
          <h4>A Levels: Geography, Mathematics, Physics</h4>
          <h4>AS Level: Art & Design</h4>
          <h5>2003 - 2010</h5>
          <p>
            Activities and societies: House Captain and Senior Prefect involved
            with Football, Music and Charity Fundraising.
          </p>
        </div>
      </div>
    </>
  );
};

export default Education;
