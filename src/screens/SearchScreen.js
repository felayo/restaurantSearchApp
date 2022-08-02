import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { ResultList } from "../components/ResultList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  const filteredResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList
          results={filteredResultsByPrice("$")}
          title="Cost Effective"
          
        />

        <ResultList
          results={filteredResultsByPrice("$$")}
          title="Bit Pricer"
          
        />

        <ResultList
          results={filteredResultsByPrice("$$$")}
          title="Big Spender!"
          
        />
      </ScrollView>

      <Button
        title="Go to Businesses"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default SearchScreen;
