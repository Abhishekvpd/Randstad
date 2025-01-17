import { createContext, useContext } from "react";

export const searchContext = createContext()

export const useSearchContext = () => {
    return useContext(searchContext);
}