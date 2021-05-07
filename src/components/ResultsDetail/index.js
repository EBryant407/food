import React from 'react';
import { Text } from 'react-native';
import {
    ResultContainer,
    ResultImage,
    ResultName,
    ReviewsText
}
    from './styles';


const ResultsDetail = ({ result }) => {
    return (
        <ResultContainer>
            <ResultImage source={{ uri: result.image_url }} />
            <ResultName>
                {result.name}
            </ResultName>
            <ReviewsText>
                {result.rating} Stars
                -
                {result.review_count} Reviews
            </ReviewsText>
        </ResultContainer>
    );
};

export default ResultsDetail;