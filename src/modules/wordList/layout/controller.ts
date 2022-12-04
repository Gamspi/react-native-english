import {useTypeSelector} from '../../core/hooks/useTypeSelector';
import {useEffect, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';

export const useController = () => {
  const {words} = useTypeSelector(state => state.word);
  const [searchValue, setSearchValue] = useState('');
  const computedWords = useMemo(() => {
    if (searchValue) {
      return words.filter(
        elem =>
          elem.label.toLowerCase().includes(searchValue.toLowerCase()) ||
          elem.value
            .join(' ')
            .toLowerCase()
            .includes(searchValue.toLowerCase()),
      );
    }
    return words;
  }, [searchValue, words]);
  const animationValue = useRef(new Animated.Value(0)).current;
  const [isShowSearch, setIsShowSearch] = useState(true);
  const fadeOut = () => {
    Animated.timing(animationValue, {
      isInteraction: undefined,
      useNativeDriver: false,
      toValue: 50,
      duration: 300,
    }).start();
  };
  useEffect(() => {
    !isShowSearch ? fadeOut() : fadeIn();
  }, [isShowSearch]);
  const fadeIn = () => {
    Animated.timing(animationValue, {
      isInteraction: undefined,
      useNativeDriver: false,
      toValue: 0,
      duration: 300,
    }).start();
  };
  const scrollHeightStyles = {
    paddingTop: animationValue.interpolate({
      inputRange: [0, 50],
      outputRange: [100, 0],
      extrapolate: 'clamp',
    }),
  };
  const animationStyles = {
    transform: [
      {
        scaleY: animationValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animationValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  return {
    searchValue,
    computedWords,
    scrollHeightStyles,
    animationStyles,
    setIsShowSearch,
    setSearchValue,
  };
};
