import React from 'react'
import remove from "../images/icon-remove.svg";

const Header = ({ keywords, removeKeywords}) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key} &nbsp;
              <button className="remove" onClick={() => removeKeywords(key)}>
                <img src={remove} alt="" />
              </button>
            </li>
          );
        }
        )}
      </ul>
   
    </div>
  );
};

export default Header