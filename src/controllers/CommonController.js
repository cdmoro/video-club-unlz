import axios from 'axios';

const API_KEY = '7c8c670882ff4356c6aa8fd79464f874';
const STORE = {};

async function getTrendingMovies() {
    if (STORE['trendingMovies']) {
        return STORE['trendingMovies'];
    }

    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
    STORE['trendingMovies'] = response;
    return response;
}

async function getTrendingTV() {
    if (STORE['trendingTV']) {
        return STORE['trendingTV'];
    }

    const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`);
    STORE['trendingTV'] = response;
    return response;
}

function findMovies(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`);
}

async function getContenidoAdulto() {
    if (STORE['adulto']) {
        return STORE['adulto'];
    }

    const response = await axios.get(`https://api.themoviedb.org/4/list/7096809?api_key=${API_KEY}`);
    STORE['adulto'] = response;
    return response;
}

async function getEventosDeportivos() {
    if (STORE['evento']) {
        return STORE['evento'];
    }

    const response = await axios.get(`https://api.themoviedb.org/4/list/7096812?api_key=${API_KEY}`);
    STORE['evento'] = response;
    return response;
}

export default {
    getTrendingMovies,
    getTrendingTV,
    findMovies,
    getContenidoAdulto,
    getEventosDeportivos
}