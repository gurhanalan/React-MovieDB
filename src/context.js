import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
// make sure to use https
// console.log(API_ENDPOINT);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("batman");
    const [page, setPage] = useState(1);

    const {
        isLoading,
        error,
        data: movies,
        totalResults,
    } = useFetch(`&s=${query}&page=${page}`);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                error,
                movies,
                query,
                setQuery,
                totalResults,
                setPage,
                page,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
