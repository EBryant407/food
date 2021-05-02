import React from 'react';
import {
    FlatList,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../ResultsDetail';
import {
    ParentContainer,
    TitleText
}
    from './styles';

const ResultsList = ({ title, results, navigation }) => {
    if (!results) {
        return null;
    }

    return (
        <ParentContainer>
            <TitleText>
                {title}
            </TitleText>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </ParentContainer>
    );
};

export default withNavigation(ResultsList);