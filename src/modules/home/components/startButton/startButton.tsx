import React, {ReactNode} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import ComponentProps = Animated.ComponentProps;
import {StyledStartButton, StyledStartButtonText} from './styled';
type Props = {
  children?: ReactNode;
};
const StartButton = ({
  children,
  ...props
}: Props & ComponentProps<TouchableWithoutFeedback>) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <StyledStartButton>
        <StyledStartButtonText>{children}</StyledStartButtonText>
      </StyledStartButton>
    </TouchableWithoutFeedback>
  );
};

export default StartButton;
