import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9b7723d07d561c36706b36d5b892e4c1dd9ac7369000514184f4c5522ee1607d'
    }
});