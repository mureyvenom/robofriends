import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            placeholder='Search robots' 
            type='search' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
