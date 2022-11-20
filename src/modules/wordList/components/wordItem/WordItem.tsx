import React from 'react';
import {Text, View} from 'react-native';
import {Word} from '../../../core/store/reducers/word/types';
type Props = {
  item: Word;
};
const WordItem = ({item: {value, label, type}}: Props) => {
  return (
    <View style={{borderColor: 'red', borderWidth: 1}}>
      <Text>{label}</Text>
      <Text>{value}</Text>
      <Text>{type}</Text>
    </View>
  );
};

export default WordItem;
