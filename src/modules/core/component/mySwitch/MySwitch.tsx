import React from 'react';
import {Switch} from 'react-native';
type Props = {
  callBack: () => void;
  value: boolean;
};
const MySwitch = ({callBack, value}: Props) => {
  const toggleSwitch = () => {
    callBack();
  };
  return (
    <Switch
      trackColor={{false: '#767577', true: '#ffffff'}}
      thumbColor={value ? '#f54b4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={value}
    />
  );
};

export default MySwitch;
