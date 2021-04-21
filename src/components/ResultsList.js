import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title }) => {
    return <View>
        <Text style={styles.titleText}>
            {title}
        </Text>
    </View>
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;