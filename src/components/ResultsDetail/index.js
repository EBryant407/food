import React from 'react';
import { Text } from 'react-native';
import {
    ResultContainer,
    ResultImage,
    ResultName,
}
    from './styles';


const ResultsDetail = ({ result }) => {
    return (
        <ResultContainer>
            <ResultImage source={{ uri: result.image_url }} />
            <ResultName>
                {result.name}
            </ResultName>
            <Text>
                {result.rating} Stars,
            {result.review_count} Reviews
        </Text>
        </ResultContainer>
    );
};

export default ResultsDetail;