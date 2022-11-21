import React, {memo} from 'react';
import WordList from '../components/wordList/wordList';
import Screen from '../../core/component/screen/Screen';
import Search from '../components/search/search';
import {useController} from './controller';

const WordListLayout = () => {
  const {setSearchValue, searchValue, computedWords} = useController();
  return (
    <Screen>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <WordList words={computedWords} />
    </Screen>
  );
};

export default memo(WordListLayout);
