import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>
                {errorMessage}
            </Text> : null}

            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title='Quick Bite' 
                    navigation={navigation}
                    />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title='Stay For a Bit' 
                    navigation={navigation}
                    />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title='Now We Are Cookin With Fire!' 
                    navigation={navigation}
                    />
                <ResultsList
                    results={filterResultsByPrice('$$$$')}
                    title='You Fancy Huh?' 
                    navigation={navigation}
                    />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;