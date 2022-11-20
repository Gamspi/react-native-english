import React from 'react';

import {
  StyledFooterButtonImageContainer,
  StyledFooterButtonImage,
  StyledFooterButtonText,
  StyledFooterButton,
} from './styled';
import {Animated, Image, TouchableOpacity} from 'react-native';
import ComponentProps = Animated.ComponentProps;

type Props = {
  title?: string;
  isActive?: boolean;
};
const FooterButton = ({
  title,
  ...props
}: ComponentProps<Image> & ComponentProps<TouchableOpacity> & Props) => {
  return (
    <StyledFooterButton>
      <StyledFooterButtonImageContainer {...props}>
        <StyledFooterButtonImage {...props} />
      </StyledFooterButtonImageContainer>
      {title && <StyledFooterButtonText>{title}</StyledFooterButtonText>}
    </StyledFooterButton>
  );
};
export default FooterButton;
