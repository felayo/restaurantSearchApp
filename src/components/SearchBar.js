import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
      <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle} /> 
          <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputStyle}
              placeholder="Search"
              value={term}
              onChangeText= { onTermChange }
              onEndEditing= { onTermSubmit }
          />
      </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: { 
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 15
    },
    iconStyle: {
        fontSize: 35,
        color: "black",
        marginHorizontal: 15,
        alignSelf: "center"
    }
})