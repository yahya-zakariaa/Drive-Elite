"use client"
import { createContext, useContext, useState } from "react";

const SearchBarContext = createContext()

export function SearchBarProvider({ children }) {
    const [searchBarIsShow, setSearchBarIsShow] = useState(false)
    return (
        <SearchBarContext.Provider value={{ setSearchBarIsShow, searchBarIsShow }}>
            {children}
        </SearchBarContext.Provider>
    )
}
export default function useSearchBarContext() {
    const context = useContext(SearchBarContext);
    if (!context) {
        throw new Error("useSearchBarContext must be used within a SearchBarProvider");
    }
    return context;
}