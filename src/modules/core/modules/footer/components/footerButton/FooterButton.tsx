import React, {useCallback, useEffect, useRef} from 'react';

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
  View,
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
  isActive,
  ...props
}: ComponentProps<Image> & ComponentProps<TouchableOpacity> & Props) => {
  const AnimationView = Animated.createAnimatedComponent(View);
  const animationValue = useRef(new Animated.Value(0)).current;
  const handlerAnimateActive = useCallback(
    (toValue: number) =>
      Animated.timing(animationValue, {
        isInteraction: undefined,
        useNativeDriver: false,
        toValue: toValue,
        duration: 300,
      }).start(),
    [animationValue],
  );
  const animationStyles = {
    width: animationValue.interpolate({
      inputRange: [0, 10],
      outputRange: [60, 50],
      extrapolate: 'clamp',
    }),
    height: animationValue.interpolate({
      inputRange: [0, 10],
      outputRange: [60, 50],
      extrapolate: 'clamp',
    }),
  };
  useEffect(() => {
    !isActive ? handlerAnimateActive(100) : handlerAnimateActive(0);
  }, [handlerAnimateActive, isActive]);
  return (
    <TouchableWithoutFeedback {...props}>
      <StyledFooterButton style={shadows.circleButton} {...props}>
        <AnimationView style={animationStyles}>
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
        </AnimationView>
      </StyledFooterButton>
    </TouchableWithoutFeedback>
  );
};
export default FooterButton;
