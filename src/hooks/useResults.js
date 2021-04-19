import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Orlando'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Error. Try again later')
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [searchApi, results, errorMessage];
};