import React from 'react';
import MottsLogo from '../assets/motts.png';
import RidgeLogo from '../assets/ridge.png';

const Experience = () => {
  return (
    <>
      <h1 id='title'>Professional Experience</h1>
      <div className='project-wrapper'>
        <div className='project-3'>
          <h2 id='title2'>Mott MacDonald</h2>
          <div className='logo'>
            <a href='https://www.mottmac.com/' target='_blank' rel='noreferrer'>
              <img src={MottsLogo} alt='Mott MacDonald Icon' className='logo' />
            </a>
          </div>
          <h4>Civil Engineer | London | 2019 - 2022</h4>
          <h5>
            Oman Hospitals – Client: International Hospitals Group and Sultanate
            of Oman
          </h5>
          <ul>
            <li>
              Lead Civil Engineer for the externals design of three new
              hospitals in Khasab, Salalah and Suwaiq with an overall project
              value of circa £450m.
            </li>
            {/* <li>
              Managed a team of 8 engineers to develop the design from concept
              through to construction. Worked as part of a multi-disciplinary
              team to deliver the projects successfully to extremely demanding
              deadlines and tight budgets.
            </li>
            <li>
              Engaged in weekly client meetings to manage stakeholder
              expectations, including government and private interests.
            </li> */}
          </ul>
          <h5>
            St Thomas’ Hospital, London – Client: Guy’s and St Thomas’ NHS
            Foundation Trust
          </h5>
          <ul>
            {/* <li>
              Preparation of fee proposals and input into successful bid
              submissions.
            </li> */}
            <li>
              Lead Civil Engineer for the construction of a £22m development of
              a new theatre and educational space at the hospital.
            </li>
            {/* <li>
              Managed a team of 4 engineers to meet programmed deliverables.
            </li>
            <li>Managed budget and client interface for the scheme.</li> */}
          </ul>
          <h5>Confidential Defence Project</h5>
          <ul>
            <li>
              Lead Civil Engineer for externals design of a £308m Defence
              Project.
            </li>
            {/* <li>
              Responsible for the development of the 3D digital ground model.
            </li>
            <li>
              Managed a team of 4 engineers to develop a robust design and
              worked closely with the Architect and Landscape Architect to
              incorporate the client’s evolving requirements.
            </li> */}
          </ul>
          <h5>Royal Botanical Gardens, Kew, London – Client: Kew Gardens</h5>
          <ul>
            <li>
              Lead Civil Engineer for Concept and Detailed Civil Engineering
              design for the new restaurant.
            </li>
            {/* <li>
              Acted as Technical Advisor and conducted due diligence reviews on
              the Contractor’s proposals for quality assurance purposes and to
              ensure technical standards were met.
            </li> */}
          </ul>
        </div>
        <div className='project-3'>
          <h2 id='title2'>Ridge & Partners</h2>
          <div className='logo'>
            <a href='https://ridge.co.uk/' target='_blank' rel='noreferrer'>
              <img
                src={RidgeLogo}
                alt='Ridge & Partners LLP Icon'
                className='logo'
              />
            </a>
          </div>
          <h4>Civil Engineer | London | 2018 - 2019</h4>
          <p>
            Lead Civil Engineering consultant on multi-disciplinary £95 million
            Jaguar Land Rover scheme with BIM requirement. Preparation of fee
            proposals for own projects and as part of wider submissions.
            Management of resourcing and invoicing on a number of projects.
          </p>
          <h4>Graduate Civil Engineer | Winchester | 2015 - 2017</h4>
          <ul>
            <p>Drainage Design</p>
            <p>Environmental Impact Assessment</p>
            <p>Flood Risk Assessment</p>
            <p>Geo-Environmental / Geotechnical</p>
            <p>Highways Design</p>
            <p>Technical Report Writing</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
