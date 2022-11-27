import styled from 'styled-components/native';
import {Backgrounds, Colors} from '../../styles/variables';
import {StyleSheet} from 'react-native';

export const StiledInput = styled.TextInput`
  border: 1px solid ${Backgrounds.THIRD_BLACK};
  border-radius: 10px;
  color: ${Colors.WHITE};
  padding: 10px;
`;

export const StiledLabel = styled.Text`
  color: ${Colors.WHITE};
  padding-bottom: 10px;
`;

export const input = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    marginBottom: 32,
  },
});
