"use client";

import { useEffect, useState } from "react";

export default function FirstFunction() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState();

    async function getMovies() {
        const responst = await fetch(
            "https://nomad-movies.nomadcoders.workers.dev/movies"
        );
        const json = await responst.json();

        setMovies(json);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
