export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

export const fetchMovies = async ( {query} : {query: string}) => {
    const endpoint = query?
        `${TMDB_CONFIG.BASE_URL}/search/movies/${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/disover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers,
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`)
    }

    const data = await response.json();

    return data.results;
}


// const url = 'https://api.themoviedb.org/3/keyword/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTkzZTFmNzZiNDJjMWIzZTE4ZTZjMzcxMDk2NGIxNSIsIm5iZiI6MTc1NjYzMjM1NC4wOSwic3ViIjoiNjhiNDE1MjI4ZWIyMmYzMDc3NTRlMzEwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Ma2dGSgYJVIASIVCSbQF7jRd7QY4iaQSnzwth-fTis4/movies?include_adult=false&language=en-US&page=1';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTkzZTFmNzZiNDJjMWIzZTE4ZTZjMzcxMDk2NGIxNSIsIm5iZiI6MTc1NjYzMjM1NC4wOSwic3ViIjoiNjhiNDE1MjI4ZWIyMmYzMDc3NTRlMzEwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Ma2dGSgYJVIASIVCSbQF7jRd7QY4iaQSnzwth-fTis4'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));