import {useTypeSelector} from '../../../core/hooks/useTypeSelector';
import {Text} from 'react-native';
import React from 'react';
import {WordListContainer} from './styled';

const WordList = () => {
  const {words} = useTypeSelector(state => state.word);
  return (
    <WordListContainer
      data={words}
      renderItem={({item}) => <Text>{item.value}</Text>}
    />
  );
};

export default WordList;
