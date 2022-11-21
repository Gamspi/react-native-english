import React, {memo, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../core/styles/variables';
import {useController} from './controller';

type Props = {
  checkIsFocused: () => boolean;
};
const HomeLayout = ({checkIsFocused}: Props) => {
  const h = () => {
    console.log(checkIsFocused());
  };
  useController({checkIsFocused});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.DARK,
      }}>
      <TouchableOpacity onPress={h}>
        <Text
          style={{
            color: 'red',
          }}>
          Hello home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(HomeLayout);
