import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultRestaurantDetail from './ResultRestaurantDetail';
import { withNavigation } from 'react-navigation';

const ResultsRestaurants = ({ title, results, navigation }) => {
    if (!results.length) return null;
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultRestaurant', { id: item.id })} >
                            <ResultRestaurantDetail result={item} />
                        </TouchableOpacity>
                    );
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

export default withNavigation(ResultsRestaurants);