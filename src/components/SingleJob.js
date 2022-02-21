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
          <div className='keywords-section'>
            <span className='category'>category: &nbsp; </span>
            <button onClick={() => props.setKeywords(key)} key={id}>{key}</button>
          </div>

        ))}
      </div>


    </div>
  );
};

export default SingleJob