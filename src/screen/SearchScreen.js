import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [resultsRestaurants, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
            setErrorMessage('');
        } catch (e) {
            console.log('error');
            setErrorMessage('Something went wrong!');
        }
    }
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>We have found {resultsRestaurants.length} restaurant.</Text>
            {errorMessage ? <Text>Error -&gt; {errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;