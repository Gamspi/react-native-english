import React, {memo} from 'react';
import Input from '../../../core/component/Input/input';
import {
  StyledAddWordForm,
  StyledAddWordSwitch,
  StyledAddWordSwitchText,
} from './stiled';
import {useController} from './controller';
import Checkbox from '../../../core/component/checkbox/Checkbox';
import {typeTab} from '../../constants/constants';
import MySwitch from '../../../core/component/mySwitch/MySwitch';
import Button from '../../../core/component/button/Button';
import MarginContainer from '../../../core/component/marginContainer/MarginContainer';

const AddWordForm = () => {
  const {
    label,
    value,
    activeCheckboxId,
    handlerAddWord,
    handlerEnglishOnInput,
    setValue,
    handlerChooserType,
    isInGame,
    handelSetIsInGame,
  } = useController();
  return (
    <StyledAddWordForm>
      <StyledAddWordSwitch>
        <StyledAddWordSwitchText isInGame={isInGame}>
          {isInGame ? 'In the Game' : 'Not in the Game'}
        </StyledAddWordSwitchText>
        <MySwitch callBack={handelSetIsInGame} value={isInGame} />
      </StyledAddWordSwitch>
      <MarginContainer>
        <Input
          placeholder="Word"
          value={label}
          onChangeText={handlerEnglishOnInput}
          label="Word"
        />
      </MarginContainer>
      <MarginContainer>
        <Input
          placeholder="Value"
          value={value}
          onChangeText={setValue}
          label="Value"
        />
      </MarginContainer>

      {typeTab.map(item => (
        <Checkbox
          isActive={item.id === activeCheckboxId}
          key={item.id}
          label={item.valueType}
          isDisabled={item.id === activeCheckboxId}
          onPress={() => handlerChooserType(item)}
        />
      ))}

      <Button
        title={'Add word'}
        onPress={() => {
          handlerAddWord();
        }}
      />
    </StyledAddWordForm>
  );
};
export default memo(AddWordForm);
