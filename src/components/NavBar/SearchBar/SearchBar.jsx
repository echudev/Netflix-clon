import React, { useState, useRef } from 'react'
import style from './SearchBar.module.css'
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
        <div className={style.searchBar}>
            <div className={expand ? style.search_field_expand : style.search_field}>
                <SearchIcon
                    onClick={handlerExpand}
                    className={style.icon}/>
                <input
                    ref={searchInput}
                    onBlur={handlerCollapse}
                    type="text"
                    placeholder="Titulos, personas, géneros"
                    name="search-input"
                    className={style.input_text} />
            </div>
        </div>
    )
}
