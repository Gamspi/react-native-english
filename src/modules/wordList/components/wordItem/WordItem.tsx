import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  StyledWordItem,
  StyledWordItemSwitchContainer,
  StyledWordItemSwitchText,
  StyledWordItemTitle,
  StyledWordItemValue,
  StyledWordItemValueContainer,
} from './styled';
import {useController} from './controller';
import {Word} from '../../../core/types/word';
import MySwitch from '../../../core/component/mySwitch/MySwitch';

type Props = {
  item: Word;
  isLast?: boolean;
};

const WordItem = ({item, ...props}: Props) => {
  const {value, label, type, id, isInGame} = item;
  const {isActive, handelDeleteWord, toggleIsActive, toggleIsInGame} =
    useController({id});

  return (
    <TouchableOpacity onPress={toggleIsActive} onLongPress={handelDeleteWord}>
      <StyledWordItem {...props}>
        <StyledWordItemSwitchContainer>
          <StyledWordItemSwitchText isInGame={isInGame}>
            {isInGame ? 'In the Game' : 'Not in the Game'}
          </StyledWordItemSwitchText>
          <MySwitch callBack={() => toggleIsInGame(item)} value={isInGame} />
        </StyledWordItemSwitchContainer>
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
