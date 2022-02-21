import React, { useEffect, useState } from "react";
import SingleJob from './SingleJob';


const Jobs = ({data, setKeywords, keywords}) => {
  // console.log(data);

  //store filtered data
  const [filteredData, setfilteredData] = useState([]);


  const SearchFunc = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((d) => {
        return d.title.toLocaleLowerCase().includes(keywords)||
        d.location.toLocaleLowerCase().includes(keywords)||
        d.jobid.toLocaleLowerCase().includes(keywords)||
        d.category.toLocaleLowerCase().includes(keywords);
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };


  const filterData = () => {
    if (keywords) {
    const newData = data.filter((d) => {
      return keywords.every((key) => {
        return (
          d.category === key 
        );
      });
    });
    setfilteredData(newData);
  } else {
    setfilteredData(data);
  }
};

useEffect(() => {
  SearchFunc();
  filterData();

}, [keywords])




  return (
  <div className='jobs'>
    {
      filteredData.map(d=>
        {
          return <SingleJob 
          key={d.id}
          data = {d} 
          setKeywords={setKeywords}
          />
        })
    }

  </div>
  
    )
}

export default Jobs