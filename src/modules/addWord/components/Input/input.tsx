import React from 'react';
import {StiledInput} from './styled';
import {Colors} from '../../../core/styles/variables';
import {Animated, TextInput} from 'react-native';
import ComponentProps = Animated.ComponentProps;

const Input = (props: ComponentProps<TextInput>) => (
  <StiledInput {...props} placeholderTextColor={Colors.LIGHT_DARK} />
);
export default Input;
