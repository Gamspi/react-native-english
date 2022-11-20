import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Word} from '../../../core/store/reducers/word/types';
import {StyledWordItem} from './styled';
import {useController} from './controller';

type Props = {
  item: Word;
  isLast?: boolean;
};

const WordItem = ({item: {value, label, type, id}, ...props}: Props) => {
  const {handelDeleteWord} = useController();
  return (
    <StyledWordItem {...props}>
      <Text>{label}</Text>
      {value.map((elem, index) => (
        <Text key={elem + index}>{elem}</Text>
      ))}
      <Text>{type}</Text>
      <TouchableOpacity onPress={() => handelDeleteWord(id)}>
        <Text>delete</Text>
      </TouchableOpacity>
    </StyledWordItem>
  );
};

export default WordItem;
