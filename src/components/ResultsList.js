import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleText}>
                {title}
            </Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />;
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;