import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ResultRestaurantDetail from './ResultRestaurantDetail';

const ResultsRestaurants = ({ title, results }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                data={results}
                renderItem={({ item }) => {
                    return <ResultRestaurantDetail result={item} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    viewStyle: {
        marginBottom: 10
    }
});

export default ResultsRestaurants;