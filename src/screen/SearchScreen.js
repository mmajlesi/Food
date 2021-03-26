import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResultRestaurant from '../hooks/useResultRestaurant';
import ResultsRestaurants from '../components/ResultRestaurant';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, resultsRestaurants, errorMessage] = useResultRestaurant();

    const filterResultsRestaurantsByPrice = (price) => {
        return resultsRestaurants.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/* <Text>We have found {resultsRestaurants.length} restaurant.</Text> */}
            {errorMessage ? <Text>Error -&gt; {errorMessage}</Text> : null}
            <ResultsRestaurants
                title="Cost Effective"
                results={filterResultsRestaurantsByPrice('$')}
            />
            <ResultsRestaurants
                title="Bit Pricier"
                results={filterResultsRestaurantsByPrice('$$')}

            />
            <ResultsRestaurants
                title="Big Spender"
                results={filterResultsRestaurantsByPrice('$$$')}
            />

        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;