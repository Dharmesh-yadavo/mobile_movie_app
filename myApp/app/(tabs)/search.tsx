import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams} from "expo-router";

const Search = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Movie Details: {id}</Text>
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({})