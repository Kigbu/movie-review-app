import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=05b5d21f9c5013e0793594a5a0b4c9ed';
//Get popular Movies
export const getPopularMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
    return resp.data.results;
};

//Get upcoming Movies
export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
    return resp.data.results;
};

//Get popular TV Series
export const getPopularTvSeries = async () => {
    const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
    return resp.data.results;
};

//Get Family Movies
export const getFamliyMovies = async () => {
    const resp = await axios.get(
        `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
    );
    return resp.data.results;
};

//Get Documentaries
export const getDocumentaries = async () => {
    const resp = await axios.get(
        `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
    );
    return resp.data.results;
};

//Get Trending Movies
export const getTrendingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/trending/all/day?${apiKey}`);
    return resp.data.results;
};

//Get Movie Detail
export const getMovieDetails = async id => {
    const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
    // console.log('resp :>> ', JSON.stringify(resp.data, null, 4));
    return resp.data;
};

//Search Movie and Tv series by keyword
export const searchMovieTv = async (query, type) => {
    const resp = await axios.get(
        `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
    );
    return resp.data.results;
};
