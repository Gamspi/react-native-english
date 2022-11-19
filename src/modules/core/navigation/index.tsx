import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../home/Home';
import AddWord from '../../addWord/AddWord';
import WordListScreen from '../../wordList/WordListScreen';
import {NavigationEnum} from '../utils/enums/navigation';

const {Screen, Navigator} = createStackNavigator();

type Props = {
  navigationRef: ReturnType<typeof useNavigationContainerRef>;
};
export default function Navigation({navigationRef}: Props) {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Navigator>
          <Screen
            name={NavigationEnum.HOME}
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name={NavigationEnum.ADD_WORD}
            component={AddWord}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name={NavigationEnum.WORD_LIST}
            component={WordListScreen}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
