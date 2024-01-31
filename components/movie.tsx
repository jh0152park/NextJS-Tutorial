import Link from "next/link";
import style from "../styles/movie.module.css";

interface IMovieProps {
    title: string;
    id: string;
    poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
    return (
        <Link href={`/movies/${id}`}>
            <div className={style.movie}>
                <img src={poster_path} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    );
}
