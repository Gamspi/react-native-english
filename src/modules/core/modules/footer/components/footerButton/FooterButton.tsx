import React from 'react';

import {
  StyledFooterButtonImageContainer,
  StyledFooterButtonImage,
  StyledFooterButtonText,
  StyledFooterButton,
  style,
} from './styled';
import {
  Animated,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ComponentProps = Animated.ComponentProps;
import {shadows} from '../../../../styles/shadows';
import LinearGradient from 'react-native-linear-gradient';
import {Backgrounds} from '../../../../styles/variables';

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
      <StyledFooterButton style={shadows.circleButton} {...props}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          locations={[0, 1]}
          colors={[Backgrounds.PRIMARY_RED, Backgrounds.SECONDARY_RED]}
          style={style.gradient}>
          <StyledFooterButtonImageContainer {...props}>
            <StyledFooterButtonImage {...props} />
          </StyledFooterButtonImageContainer>
          {title && <StyledFooterButtonText>{title}</StyledFooterButtonText>}
        </LinearGradient>
      </StyledFooterButton>
    </TouchableWithoutFeedback>
  );
};
export default FooterButton;
