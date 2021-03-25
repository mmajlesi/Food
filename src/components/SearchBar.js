import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const SeachBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#DDDDDD',
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 4
    },
    textInputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 28,
        marginHorizontal: 15
    }
});

export default SeachBar;