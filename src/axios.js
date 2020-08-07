import Axios from 'axios';

const axios = Axios.create({
    baseURL:"https://newsapi.org/v2/",
})


export default axios;