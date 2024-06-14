import { useSearchContext } from "../context/searchContext/searchContext";
import "./header.css";

import React from 'react';

const Header = ({ searchable = false }) => {
    const { setSearchText } = useSearchContext();

    return (
        <header className='header'>
            <span className='header__title'>Logo</span>
            <input type="text" placeholder='Search' className="search__input" onChange={(e) => setSearchText(e.target.value)} />
        </header>
    )
}

export default Header