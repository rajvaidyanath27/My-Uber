import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center font-medium py-5 text-xl">Good Morning!</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            console.log('Selected place:', data, details);
            if (details?.geometry?.location) {
              dispatch(
                setDestination({
                  location: {
                    lat: details.geometry.location.lat,
                    lng: details.geometry.location.lng,
                  },
                  description: data.description,
                })
              );
              navigation.navigate("RideOptions");
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          styles={{
            container: { 
              flex: 0,
              width: '100%',
              zIndex: 1,
            },
            textInput: { 
              fontSize: 18,
              height: 44,
              backgroundColor: "#DDDDDF",
            },
            listView: {
              backgroundColor: 'white',
              elevation: 5,
              zIndex: 10,
            },
            textInputContainer: {
              paddingHorizontal: 20,
              paddingVertical: 0,
            },
          }}
          textInputProps={{
            onFocus: () => {},
            onBlur: () => {},
            autoCapitalize: 'none',
            autoCorrect: false,
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          suppressDefaultStyles={false}
          currentLocation={false}
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]}
          predefinedPlaces={[]}
          debounce={200}
          onFail={(error) => {
            console.log('Places API Error:', error);
          }}
          onNotFound={() => {
            console.log('No results found');
          }}
          listEmptyComponent={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>No results found</Text>
            </View>
          )}
        />
        <NavFavourites />
      </View>
       <View className="flex-row bg-white justify-evenly py-2 mt-auto border-top border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptions")}
          className="flex flex-row bg-black w-24 px-4 py-3 rounded-full"
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center px-1">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});

export default NavigateCard;