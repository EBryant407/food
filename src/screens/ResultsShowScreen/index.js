import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import yelp from '../../api/yelp';
import {
    ImageResult,
    Name
} from './styles';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Name>
                {result.name}
            </Name>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <ImageResult 
                    source={{ uri: item }} />
                }}
            />
        </View>
    );
};


export default ResultsShowScreen;