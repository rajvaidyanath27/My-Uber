import { View, Text } from 'react-native';
import Map from '../components/Map'
import MapView from 'react-native-maps';
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard"

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      {/* <Text>Here is the map stuff...</Text> */}

      <View className="h-1/2">
       <Map />
      </View>

      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
