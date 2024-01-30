import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
    return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h5>{JSON.stringify(movie)}</h5>;
}
