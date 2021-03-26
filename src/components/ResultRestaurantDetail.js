import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultRestaurantDetail = ({ result }) => {
    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Start , {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultRestaurantDetail;