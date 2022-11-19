import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Input from '../Input/input';

const AddWordForm = () => {
  const [word, setWord] = useState('');
  const [value, setValue] = useState('');
  const handlerAddWord = () => {
    if (word && value) {
      console.log({
        word,
        value,
      });
      setWord('');
      setValue('');
    } else {
      Alert.alert('Error', 'Fill in all the fields');
    }
  };
  return (
    <View>
      <Text>Word</Text>
      <Input placeholder="Word" value={word} onChangeText={setWord} />
      <Text>Value</Text>
      <Input placeholder="Value" value={value} onChangeText={setValue} />
      <Button title={'Add word'} onPress={handlerAddWord} />
    </View>
  );
};
export default AddWordForm;
