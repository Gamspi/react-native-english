import React, {memo} from 'react';
import WordList from '../components/wordList/wordList';
import Screen from '../../core/component/screen/Screen';
import Search from '../components/search/search';
import {useController} from './controller';
import {Animated, View} from 'react-native';
import {styles} from '../components/wordList/styled';
import MarginContainer from '../../core/component/marginContainer/MarginContainer';

const AnimationView = Animated.createAnimatedComponent(View);
const AnimationScrollView = Animated.createAnimatedComponent(View);
const WordListLayout = () => {
  const {
    setSearchValue,
    searchValue,
    computedWords,
    setIsShowSearch,
    animationStyles,
    scrollHeightStyles,
  } = useController();

  return (
    <Screen>
      <AnimationView style={[styles.search, animationStyles]}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </AnimationView>
      <AnimationScrollView style={scrollHeightStyles}>
        <MarginContainer>
          <WordList words={computedWords} setIsShow={setIsShowSearch} />
        </MarginContainer>
      </AnimationScrollView>
    </Screen>
  );
};

export default memo(WordListLayout);
