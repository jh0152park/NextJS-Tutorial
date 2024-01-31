import { API_URL } from "../app/global";
import style from "../styles/movie-videos.module.css";

export async function getVideos(id: string) {
    return fetch(`${API_URL}/${id}/videos`).then((response) => response.json());
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={style.container}>
            {videos.map((video, index) => (
                <iframe
                    key={index}
                    src={`https://youtube.com/embed/${video.key}`}
                    title={video.name}
                    allow="accelerometer; autoplay clipboard-write; encryped-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ))}
        </div>
    );
}
