import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResultRestaurant from '../hooks/useResultRestaurant';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, resultsRestaurants, errorMessage] = useResultRestaurant();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {resultsRestaurants.length} restaurant.</Text>
            {errorMessage ? <Text>Error -&gt; {errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;