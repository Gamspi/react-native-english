import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Word} from '../../../core/store/reducers/word/types';
import {
  StyledWordItem,
  StyledWordItemTitle,
  StyledWordItemValue,
  StyledWordItemValueContainer,
} from './styled';
import {useController} from './controller';

type Props = {
  item: Word;
  isLast?: boolean;
};

const WordItem = ({item: {value, label, type, id}, ...props}: Props) => {
  const {isActive, handelDeleteWord, toggleIsActive} = useController();

  return (
    <TouchableOpacity
      onPress={toggleIsActive}
      onLongPress={() => handelDeleteWord(id)}>
      <StyledWordItem {...props}>
        <StyledWordItemTitle>
          {label[0].toUpperCase() + label.slice(1)}
        </StyledWordItemTitle>
        <Text>{type}</Text>
        {isActive && (
          <StyledWordItemValueContainer>
            <StyledWordItemValue>{value.join(', ')}</StyledWordItemValue>
          </StyledWordItemValueContainer>
        )}
      </StyledWordItem>
    </TouchableOpacity>
  );
};

export default memo(WordItem);
