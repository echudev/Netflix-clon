import React, { useState, useRef } from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    const [expand, setExpand] = useState(false);
    const searchInput = useRef(null);

    const handlerExpand = () => {
        setExpand(true);
        searchInput.current.focus();
    }
    const handlerCollapse = () => {
        setExpand(false);
    }

 
    return (
        <div className="searchBar">
            <div className={expand ? 'search-field expand' : 'search-field'}>
                <SearchIcon
                    onClick={handlerExpand}
                    className="search-icon"
                />
                <input
                    onBlur={handlerCollapse}
                    ref={searchInput}
                    type="text"
                    placeholder="Titulos, personas, géneros"
                    name="search-input"
                    className="search-input" />
            </div>
        </div>
    )
}
