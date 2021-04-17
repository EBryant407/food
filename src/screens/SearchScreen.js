import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'Orlando'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Error. Try again later')
        }
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>
                {errorMessage}
        </Text> : null}
            <Text>
                We have found {results.length} results
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;