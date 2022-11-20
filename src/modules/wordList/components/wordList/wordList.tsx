import React from 'react';
import {RefreshControl, Text} from 'react-native';
import {WordListContainer} from './styled';
import WordItem from '../wordItem/WordItem';
import {useController} from './controller';

const WordList = () => {
  const {words, isRefreshingList, onRefresh} = useController();

  return (
    <WordListContainer
      data={words}
      renderItem={({item}) => <WordItem item={item} />}
      refreshControl={
        <RefreshControl refreshing={isRefreshingList} onRefresh={onRefresh} />
      }
    />
  );
};

export default WordList;
