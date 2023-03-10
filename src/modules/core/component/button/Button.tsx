import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import ComponentProps = Animated.ComponentProps;
import LinearGradient from 'react-native-linear-gradient';
import {Backgrounds} from '../../styles/variables';
import {button, ButtonContainer, ButtonText, ButtonTouch} from './styled';
import {shadows} from '../../styles/shadows';

export type Props = {
  title: string;
  margin?: string;
};
const Button = ({
  title,
  onPress,
  ...props
}: Props & ComponentProps<TouchableOpacity>) => {
  return (
    <ButtonTouch onPress={onPress} {...props}>
      <ButtonContainer style={shadows.button}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.6]}
          colors={[Backgrounds.PRIMARY_RED, Backgrounds.SECONDARY_RED]}
          style={button.gradient}>
          <ButtonText>{title}</ButtonText>
        </LinearGradient>
      </ButtonContainer>
    </ButtonTouch>
  );
};

export default Button;
