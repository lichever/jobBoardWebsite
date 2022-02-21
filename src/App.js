import data from "./data.json"
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

function App() {

//extension: add more key words in the filterKeywords array
const [filterKeywords, setfilterKeywords] = useState([]);
const [useSearch, setSearch] = useState(0);

  const setSearchKeyword = (data) => {
    setfilterKeywords(data);
  };


const addFilterKeywords = (data) => {
  if (!filterKeywords.includes(data)) {
    setfilterKeywords([...filterKeywords, data]);
  }
};

const deleteKeyword = (data) => {
  const rest = filterKeywords.filter((key) => key !== data);
  setfilterKeywords(rest);
};



  return (
    <div>
      <div className="header"></div>

      <Search setSearchKeyword={setSearchKeyword} />

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
        />
      )}

      <Jobs 
      data = {data} 
      setKeywords={addFilterKeywords}
      keywords={filterKeywords}

      />
    </div>
  );
}

export default App;
/*



*/