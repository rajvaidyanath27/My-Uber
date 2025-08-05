import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 left-5 p-3 rounded-full z-50"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl font-semibold">
          Select a Ride  {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className="flex-row justify-between items-center px-10"
            style={{
              backgroundColor: item.id === selected?.id ? "grey" : "white",
            }}
          >
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel time</Text>
            </View>
            <Text className="text-xl">{`$ ${50 * item.multplier}`}</Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className="bg-black py-3 m-3"
          style={{ backgroundColor: !selected ? "grey" : "black" }}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;