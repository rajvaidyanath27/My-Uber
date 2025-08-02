import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import '../styles/global.css';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold text-blue-500">I am the homescreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
