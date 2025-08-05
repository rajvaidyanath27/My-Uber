import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
 const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
    if (!origin || !destination) return;
    console.log(destination);
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
    });
  }, [origin, destination]); 
  
const defaultRegion = {
  latitude: 28.6139,  // Delhi latitude
  longitude: 77.2090, // Delhi longitude
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType="standard"
      initialRegion={
        origin?.location 
          ? {
              latitude: origin.location.lat,
              longitude: origin.location.lng,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
          : defaultRegion
      }
    >
         {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={6}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}

export default Map;