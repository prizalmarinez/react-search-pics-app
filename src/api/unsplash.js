import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aa9398800730d21ab7e0645859c94b6c1a2559978c8f43d6f3880b4f1147ec82'
    }

})