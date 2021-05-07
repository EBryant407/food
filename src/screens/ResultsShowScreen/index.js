import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import yelp from '../../api/yelp';
import {
    ImageResult,
    Name,
    PhoneText
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
            <PhoneText>
                {result.display_phone}
            </PhoneText>
            <TouchableOpacity>
                <Text>
                    {result.messaging.url}
                </Text>
            </TouchableOpacity>
            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={(photo) => photo}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <ImageResult
                        source={{ uri: item }} />
                }}
            />
        </View>
    );
};


export default ResultsShowScreen;