import React, {memo} from 'react';
import {StiledInput, StiledLabel} from './styled';
import {Colors} from '../../../core/styles/variables';
import {Animated, TextInput} from 'react-native';
import ComponentProps = Animated.ComponentProps;
type Props = {
  label?: string;
};
const Input = ({label, ...props}: ComponentProps<TextInput> & Props) => (
  <>
    {label && <StiledLabel>{label}</StiledLabel>}
    <StiledInput {...props} placeholderTextColor={Colors.LIGHT_DARK} />
  </>
);
export default memo(Input);
