import React, {useEffect} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../modules/header/Header';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '../navigation';
const CoreLayout = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <Navigation />
    </>
  );
};

export default CoreLayout;
