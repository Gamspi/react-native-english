import React, {memo} from 'react';
import {input, StiledInput, StiledLabel} from './styled';
import {Backgrounds, Colors} from '../../styles/variables';
import {Animated, TextInput} from 'react-native';
import {shadows} from '../../styles/shadows';
import LinearGradient from 'react-native-linear-gradient';
import ComponentProps = Animated.ComponentProps;
import {useController} from './controller';

type Props = {
  label?: string;
};
const Input = ({label, ...props}: ComponentProps<TextInput> & Props) => {
  const {leftColor, handelOnFocus, handlerOnBlur} = useController();
  return (
    <>
      {label && <StiledLabel>{label}</StiledLabel>}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[`rgb(${leftColor.join(', ')});`, Backgrounds.THIRD_BLACK]}
        style={{...input.gradient, ...shadows.input}}>
        <StiledInput
          {...props}
          placeholderTextColor={Colors.LIGHT_DARK}
          onFocus={handelOnFocus}
          onBlur={handlerOnBlur}
        />
      </LinearGradient>
    </>
  );
};
export default memo(Input);
