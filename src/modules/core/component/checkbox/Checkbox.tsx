import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import ComponentProps = Animated.ComponentProps;
import {
  StyledCheckBox,
  StyledCheckBoxContainer,
  StyledCheckBoxDot,
  StyledCheckBoxLabel,
} from './styled';
type Props = {
  isActive: boolean;
  isDisabled?: boolean;
  label: string;
};
const Checkbox = ({
  onPress,
  label,
  isDisabled,
  ...props
}: Props & ComponentProps<TouchableOpacity>) => {
  return (
    <StyledCheckBox onPress={onPress} disabled={isDisabled}>
      <StyledCheckBoxContainer>
        <StyledCheckBoxDot {...props} />
      </StyledCheckBoxContainer>
      <StyledCheckBoxLabel>{label}</StyledCheckBoxLabel>
    </StyledCheckBox>
  );
};

export default Checkbox;
