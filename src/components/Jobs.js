import React, { useEffect, useState } from "react";
import SingleJob from './SingleJob';


const Jobs = ({ data, keywords }) => {
  // console.log(data);

  //store filtered data
  const [filteredData, setfilteredData] = useState([]);


  const SearchFunc = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((d) => {
        return d.title.toLocaleLowerCase().includes(keywords) ||
          d.location.toLocaleLowerCase().includes(keywords) ||
          d.jobid.toLocaleLowerCase().includes(keywords) ||
          d.category.toLocaleLowerCase().includes(keywords);
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };


  useEffect(() => {
    SearchFunc();

  }, [keywords])


  return (
    <div className='jobs'>
      {
        filteredData.map(d => {
          return <SingleJob
            key={d.id}
            data={d}
          />
        })
      }

    </div>

  )
}

export default Jobs