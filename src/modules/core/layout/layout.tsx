import React, {useEffect, useState} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../modules/header/Header';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '../navigation';
import Footer from '../modules/footer/Footer';
import {useNavigationContainerRef} from '@react-navigation/native';
import {useAction} from '../hooks/useActions';
const CoreLayout = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [CurrenRoute, setCurrentRoute] = useState<string | undefined>(
    undefined,
  );
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {initBaseData} = useAction();
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentRoute(navigationRef.getCurrentRoute()?.name);
    const listener = navigationRef.addListener('state', () => {
      setCurrentRoute(navigationRef.getCurrentRoute()?.name);
    });
    return navigationRef.removeListener('state', listener);
  }, [navigationRef]);

  useEffect(() => {
    initBaseData();
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <Navigation navigationRef={navigationRef} />
      {CurrenRoute && (
        <Footer navigate={navigationRef.navigate} currentRouter={CurrenRoute} />
      )}
    </>
  );
};

export default CoreLayout;
