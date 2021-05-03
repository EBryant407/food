import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    ParentContainer,
} from './styles';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <ParentContainer>
            <FontAwesome5 name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </ParentContainer>
    )
};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;