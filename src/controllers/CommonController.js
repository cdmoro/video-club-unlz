import axios from 'axios';

const API_KEY = '7c8c670882ff4356c6aa8fd79464f874';

function getTrending() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
}

export default {
    getTrending
}