import React, {memo} from 'react';
import {RefreshControl} from 'react-native';
import {WordListContainer} from './styled';
import WordItem from '../wordItem/WordItem';
import {useController} from './controller';
import {Word} from '../../../core/types/word';

type Props = {
  words: Word[];
  setIsShow: React.Dispatch<boolean>;
};
const WordList = ({words, setIsShow, ...props}: Props) => {
  const {isRefreshingList, onRefresh, handelScroll} = useController({
    setIsShow,
  });
  return (
    <WordListContainer
      {...props}
      data={words}
      onScroll={handelScroll}
      renderItem={({item}) => <WordItem item={item} />}
      refreshControl={
        <RefreshControl refreshing={isRefreshingList} onRefresh={onRefresh} />
      }
    />
  );
};

export default memo(WordList);
