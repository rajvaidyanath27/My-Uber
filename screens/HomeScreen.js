import 'react-native-get-random-values';
import React from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavOptions from '../components/NavOptions';
import '../styles/global.css';

console.log("API Key:", GOOGLE_MAPS_APIKEY);

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-7 pt-10">
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            console.log('Selected place:', data, details);
            if (details?.geometry?.location) {
              dispatch(
                setOrigin({
                  location: {
                    lat: details.geometry.location.lat,
                    lng: details.geometry.location.lng,
                  },
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
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
            },
            listView: {
              backgroundColor: 'white',
              elevation: 5,
              zIndex: 10,
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

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;