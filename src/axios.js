import Axios from 'axios';

const axios = Axios.create({
    baseURL:"http://newsapi.org/v2/",
})


export default axios;