import axios from 'axios';

export const key ="5703a9a3079366f641257d264b1711c7a999c539";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{'Authorization': `Bearer ${key}`
    }
})

export default api;