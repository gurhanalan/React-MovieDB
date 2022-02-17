import { useState, useEffect } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState(null);

    const fetchMovies = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data2 = await response.json();
            if (data2.Response === "True") {
                setData(data2.Search || data2);
                setError({ show: false, msg: "" });
                if (data2.totalResults) setTotalResults(data2.totalResults);
            } else {
                setError({ show: true, msg: data2.Error });
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);
    return { isLoading, error, data, totalResults };
};

export default useFetch;
