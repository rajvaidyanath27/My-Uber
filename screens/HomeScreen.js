import React from 'react';
import { Text, View, SafeAreaView,Image } from 'react-native';
import '../styles/global.css';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className='p-5 pt-10'>
        <Image style={{
          height: 100,
          width: 100,
          resizeMode: "contain"
        }}
           source={{
            uri: "https:/upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
           }}
         />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
