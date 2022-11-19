import React from 'react';
import {TouchableOpacity, Text, Animated} from 'react-native';
import ComponentProps = Animated.ComponentProps;
import {StyledButtonContainer} from './styled';
type Props = {
  title: string;
};
const Button = ({title, onPress}: Props & ComponentProps<TouchableOpacity>) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledButtonContainer>
        <Text>{title}</Text>
      </StyledButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
