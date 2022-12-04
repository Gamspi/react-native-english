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
  const handlerAnimateSearch = (toValue: number) =>
    Animated.timing(animationValue, {
      isInteraction: undefined,
      useNativeDriver: false,
      toValue: toValue,
      duration: 300,
    });
  const fadeOut = () => {
    handlerAnimateSearch(50).start();
  };
  const fadeIn = () => {
    handlerAnimateSearch(0).start();
  };
  useEffect(() => {
    !isShowSearch ? fadeOut() : fadeIn();
  }, [isShowSearch]);

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
