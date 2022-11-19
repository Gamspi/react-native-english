import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../home/Home';

const {Screen, Navigator} = createStackNavigator();
export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
