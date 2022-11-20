import React from 'react';

import {
  StyledFooterButtonImageContainer,
  StyledFooterButtonImage,
  StyledFooterButtonText,
  StyledFooterButton,
} from './styled';
import {
  Animated,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ComponentProps = Animated.ComponentProps;

export type Props = {
  title?: string;
  isActive?: boolean;
};
const FooterButton = ({
  title,
  ...props
}: ComponentProps<Image> & ComponentProps<TouchableOpacity> & Props) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <StyledFooterButton>
        <StyledFooterButtonImageContainer {...props}>
          <StyledFooterButtonImage {...props} />
        </StyledFooterButtonImageContainer>
        {title && <StyledFooterButtonText>{title}</StyledFooterButtonText>}
      </StyledFooterButton>
    </TouchableWithoutFeedback>
  );
};
export default FooterButton;
