import React from 'react';
import {Button} from 'react-native';
import Input from '../Input/input';
import {StyledAddWordForm} from './stiled';
import {useController} from './controller';

const AddWordForm = () => {
  const {word, value, handlerAddWord, setWord, setValue} = useController();
  return (
    <StyledAddWordForm>
      <Input
        placeholder="Word"
        value={word}
        onChangeText={setWord}
        label="Word"
      />
      <Input
        placeholder="Value"
        value={value}
        onChangeText={setValue}
        label="Value"
      />
      <Button title={'Add word'} onPress={handlerAddWord} />
    </StyledAddWordForm>
  );
};
export default AddWordForm;
