import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [resultsRestaurants, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
            setErrorMessage('');
        } catch (e) {
            console.log('error');
            setErrorMessage('Something went wrong!');
        }
    };
    useEffect(() => { searchApi('steak'); }
        , []);

    return [searchApi, resultsRestaurants, errorMessage];
}