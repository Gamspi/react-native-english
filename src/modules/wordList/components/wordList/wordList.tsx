import {useTypeSelector} from '../../../core/hooks/useTypeSelector';
import {Text} from 'react-native';
import React from 'react';
import {WordListContainer} from './styled';
import WordItem from '../wordItem/WordItem';

const WordList = () => {
  const {words} = useTypeSelector(state => state.word);
  return words.length ? (
    <WordListContainer
      data={words}
      renderItem={({item}) => <WordItem item={item} />}
    />
  ) : (
    <Text> not find</Text>
  );
};

export default WordList;
