import React from 'react'

const Search = ({ setSearchKeyword }) => {
    return (
        <div className='header-container'>
            <ul>
                <span>Search  Category :&nbsp;</span>
                <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} />
            </ul>
        </div>
    )
}

export default Search