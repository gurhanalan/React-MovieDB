import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
    const { query, setQuery, error, totalResults, setPage, page } =
        useGlobalContext();
    const totalButtons = Math.ceil(totalResults / 10);
    const buttons = Array.from({ length: totalButtons });
    return (
        <form
            className="search-form"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <h2>search movies</h2>
            <input
                type="text"
                className="form-input"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                }}
            />
            {error.show && (
                <div className="error">
                    {error.msg === "Incorrect IMDb ID."
                        ? "Please enter a movie name"
                        : error.msg}
                </div>
            )}
            {!error.show && (
                <>
                    <div className="movies-result">{`Total ${totalResults} Results `}</div>
                    <div className="btn-container">
                        <button
                            className="prev-btn"
                            onClick={() => {
                                if (page > 2) setPage((old) => old - 1);
                            }}
                        >
                            prev
                        </button>
                        {buttons.map((_, index) => (
                            <button
                                key={index}
                                className={`page-btn ${
                                    index + 1 === page ? "active-btn" : null
                                }`}
                                onClick={() => {
                                    setPage(index + 1);
                                }}
                            >
                                {" "}
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="next-btn"
                            onClick={() => {
                                if (page < totalButtons)
                                    setPage((old) => old + 1);
                            }}
                        >
                            next
                        </button>
                    </div>
                </>
            )}
        </form>
    );
};

export default SearchForm;
