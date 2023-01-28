import React, {memo, useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  StyledWordItem,
  StyledWordItemSwitchContainer,
  StyledWordItemSwitchText,
  StyledWordItemTitle,
  StyledWordItemValue,
  StyledWordItemValueContainer,
} from './style';
import {useController} from './controller';
import {Word} from '../../../core/types/word';
import MySwitch from '../../../core/component/mySwitch/MySwitch';

type Props = {
  item: Word;
  isLast?: boolean;
};

const WordItem = ({item, ...props}: Props) => {
  const {value, label, type, id, isInGame} = item;
  const {
    handelDeleteWord,
    toggleIsActive,
    toggleIsInGame,
    animationStyles,
    AnimationView,
  } = useController({id});
  const inputEl = useRef(null);
  console.log(inputEl && inputEl.current);
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
        <AnimationView style={animationStyles}>
          <StyledWordItemValueContainer>
            <StyledWordItemValue>{value.join(', ')}</StyledWordItemValue>
          </StyledWordItemValueContainer>
        </AnimationView>
      </StyledWordItem>
    </TouchableOpacity>
  );
};

export default memo(WordItem);
