import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultRestaurantShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResult(id);
    }, []);

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };

    if (!result) return null;

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image
                        style={{ width: 300, height: 250 }}
                        source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultRestaurantShowScreen;