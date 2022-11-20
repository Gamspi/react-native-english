import React, {memo} from 'react';
import WordList from '../components/wordList/wordList';
import Screen from '../../core/component/screen/Screen';

const WordListLayout = () => {
  return (
    <Screen>
      <WordList />
    </Screen>
  );
};

export default memo(WordListLayout);
