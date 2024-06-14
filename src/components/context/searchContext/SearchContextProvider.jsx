import { useState } from "react"
import { searchContext } from "./searchContext"

const SearchContextProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <searchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchContextProvider