import { API_URL } from "../app/global";
import style from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={style.container}>
            <img
                src={movie.poster_path}
                className={style.poster}
                alt={movie.title}
            />
            <div className={style.info}>
                <h1 className={style.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target="_blank">
                    {" "}
                    Homepage
                </a>
            </div>
        </div>
    );
}
