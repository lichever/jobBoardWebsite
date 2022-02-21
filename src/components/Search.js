import React from 'react'

const Search = ({ setSearchKeyword }) => {
    return (
        <div className='search-container'>
            <div className='inner-container'>
                <span>Search :&nbsp;&nbsp;</span>
                <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} />
            </div>
        </div>
    )
}

export default Search