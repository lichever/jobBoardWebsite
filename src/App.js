import data from "./data.json"
import Jobs from "./components/Jobs";
import Search from "./components/Search";
import { useState } from "react";

function App() {

  //extension: add more key words in the filterKeywords array
  const [filterKeywords, setfilterKeywords] = useState([]);

  const setSearchKeyword = (searchWord) => {
    setfilterKeywords(searchWord);
  };

  return (
    <div>
      <div className="header"></div>

      <Search setSearchKeyword={setSearchKeyword} />

      <Jobs
        data={data}
        keywords={filterKeywords}
      />
    </div>
  );
}

export default App;
/*



*/