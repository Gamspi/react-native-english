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
import Test from '../../test/test';
import Game from '../../game';

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
              presentation: 'transparentModal',
            }}
          />
          <Screen
            name={NavigationEnum.ADD_WORD}
            component={AddWord}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
            }}
          />
          <Screen
            name={NavigationEnum.WORD_LIST}
            component={WordListScreen}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
            }}
          />
          <Screen
            name={NavigationEnum.TEST}
            component={Test}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
            }}
          />
          <Screen
            name={NavigationEnum.GAME}
            component={Game}
            options={{
              presentation: 'transparentModal',
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
