import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../core/styles/variables';

const WordListLayout = () => {
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
        Hello WordList
      </Text>
    </View>
  );
};

export default WordListLayout;
