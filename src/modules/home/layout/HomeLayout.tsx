import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useController} from './controller';
import Screen from '../../core/component/screen/Screen';

type Props = {
  checkIsFocused: () => boolean;
};
const HomeLayout = ({checkIsFocused}: Props) => {
  useController({checkIsFocused});
  return (
    <Screen>
      <TouchableOpacity>
        <Text
          style={{
            color: 'red',
          }}>
          Hello home
        </Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default memo(HomeLayout);
