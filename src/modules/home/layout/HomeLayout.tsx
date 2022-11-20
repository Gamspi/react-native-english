import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../core/styles/variables';

const HomeLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.DARK,
      }}>
      <Text
        style={{
          color: 'red',
        }}>
        Hello home
      </Text>
    </View>
  );
};

export default memo(HomeLayout);
