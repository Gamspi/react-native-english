import React, {memo} from 'react';
import {Button} from 'react-native';
import Input from '../Input/input';
import {StyledAddWordForm} from './stiled';
import {useController} from './controller';
import Checkbox from '../../../core/component/checkbox/Checkbox';
import {typeTab} from '../../constants/constants';

const AddWordForm = () => {
  const {
    label,
    value,
    activeCheckboxId,
    handlerAddWord,
    handlerEnglishOnInput,
    setValue,
    handlerChooserType,
  } = useController();
  return (
    <StyledAddWordForm>
      <Input
        placeholder="Word"
        value={label}
        onChangeText={handlerEnglishOnInput}
        label="Word"
      />
      <Input
        placeholder="Value"
        value={value}
        onChangeText={setValue}
        label="Value"
      />
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
