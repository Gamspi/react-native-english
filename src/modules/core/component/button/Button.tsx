import React from 'react';
import {TouchableOpacity, Text, Animated} from 'react-native';
import ComponentProps = Animated.ComponentProps;
import LinearGradient from 'react-native-linear-gradient';
import {Backgrounds} from '../../styles/variables';
import {button, ButtonContainer} from './styled';
import {shadows} from '../../styles/shadows';

type Props = {
  title: string;
};
const Button = ({title, onPress}: Props & ComponentProps<TouchableOpacity>) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer style={shadows.button}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.6]}
          colors={[Backgrounds.PRIMARY_RED, Backgrounds.SECONDARY_RED]}
          style={button.gradient}>
          <Text>{title}</Text>
        </LinearGradient>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
