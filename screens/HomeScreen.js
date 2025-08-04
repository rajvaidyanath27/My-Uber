import React from 'react';
import { Text, View, SafeAreaView,Image } from 'react-native';
import '../styles/global.css';
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className='p-7 pt-10'>
        <Image style={{
          height: 100,
          width: 100,
          PaddingLeft: 10,
          resizeMode: "contain"
        }}
           source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
           }}
         />

         <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
