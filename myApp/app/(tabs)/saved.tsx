import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams} from "expo-router";

const Saved = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Hi Saved Page</Text>
        </View>
    )
}

export default Saved;

const styles = StyleSheet.create({})