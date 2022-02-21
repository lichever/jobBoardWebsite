import React from 'react'

const SingleJob = (props) => {
  // console.log(props);
  const {
    id,
    location,
    category,
    title,
    jobid,
  } = props.data;

  let keywords = [category];

  return (
    <div className='job-container'>

      <div className="section1">
        <div className='jobid-container'><span className="jobid">jobid:  {jobid}</span> </div>
        <div className="position">{title}</div>
        <div className="location">
          <span>{location}</span>
        </div>
      </div>

      <div className="section2">
        {keywords.map((key, id) => (
          <ul className='section2-map' key={id}>
            <li >
              <span className='category'>category: &nbsp; </span>
              <span className='button' >{key} </span>
            </li>

          </ul>


        ))}
      </div>

    </div>
  );
};

export default SingleJob