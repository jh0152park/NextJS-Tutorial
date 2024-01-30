import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
    return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

async function getVideos(id: string) {
    return fetch(`${API_URL}/${id}/videos`).then((response) => response.json());
}

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <h1>{movie.title}</h1>;
}
