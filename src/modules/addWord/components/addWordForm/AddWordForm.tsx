import React from 'react';
import {Button} from 'react-native';
import Input from '../Input/input';
import {StyledAddWordForm} from './stiled';
import {useController} from './controller';

const AddWordForm = () => {
  const {label, value, handlerAddWord, setLabel, setValue} = useController();
  return (
    <StyledAddWordForm>
      <Input
        placeholder="Word"
        value={label}
        onChangeText={setLabel}
        label="Word"
      />
      <Input
        placeholder="Value"
        value={value}
        onChangeText={setValue}
        label="Value"
      />
      <Button
        title={'Add word'}
        onPress={() => {
          handlerAddWord();
        }}
      />
    </StyledAddWordForm>
  );
};
export default AddWordForm;
