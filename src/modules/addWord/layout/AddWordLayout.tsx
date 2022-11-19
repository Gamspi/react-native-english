import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../core/styles/variables';

const AddWordLayout = () => {
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
        Hello add ward
      </Text>
    </View>
  );
};

export default AddWordLayout;
