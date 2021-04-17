import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer M2j-r0qI7NgH8K3HQzNI_0rr5s86kXtF5J1iSJIrrkoKcwU_n7jzxOPkXVrNn4Pr6RtlfcDbnc7BeTk6WjPAjGH8PTeXuFuvMUI3V2dNDz-iNrpz4Qy1KZ9HGTY8YHYx'
    }
});

