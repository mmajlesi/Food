import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>Error -&gt; {errorMessage}</Text> : null}
            <ScrollView showsVerticalScrollIndicator={false}>
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
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;