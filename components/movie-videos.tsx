import { API_URL } from "../app/(home)/page";

export async function getVideos(id: string) {
    return fetch(`${API_URL}/${id}/videos`).then((response) => response.json());
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h5>{JSON.stringify(videos)}</h5>;
}
