import {Image, Text, TextInput, View} from "react-native";
import React from "react";
import { useLocalSearchParams} from "expo-router";
import {icons} from "@/constants/icons";

interface Props {
    placeHolder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeHolder, onPress} : Props) => {
    const { id } = useLocalSearchParams();
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image
                source={icons.search}
                className="size-5"
                resizeMode="contain"
                tintColor="#AB8BFF"
            />
            <TextInput
                onPress={onPress}
                placeholder={placeHolder}
                value=""
                onChangeText={() => {}}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-2 text-white"
            />
        </View>
    )
}

export default SearchBar;
