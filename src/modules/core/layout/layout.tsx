import React, {useEffect, useState} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../modules/header/Header';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '../navigation';
import Footer from '../modules/footer/Footer';
import {useNavigationContainerRef} from '@react-navigation/native';
const CoreLayout = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <Navigation navigationRef={navigationRef} />
      <Footer navigate={navigationRef.navigate} />
    </>
  );
};

export default CoreLayout;
