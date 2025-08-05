import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
    location: { lat: 51.5223932, lng: -0.0708299 },
    description: "Home sweet home",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
    location: { lat: 51.5032973, lng: -0.1195537 },
    description: "Work work work",
  },
];

const NavFavourites = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: item.location,
                description: item.description,
              })
            );
            navigation.navigate("RideOptions");
          }}
          className="flex-row items-center p-5"
        >
          <Icon
            name={item.icon}
            type="ionicon"
            color="white"
            className="rounded-full bg-gray-300 p-3 mr-4"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{item.description}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});