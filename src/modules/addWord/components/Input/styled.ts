import styled from 'styled-components/native';
import {Colors} from '../../../core/styles/variables';

export const StiledInput = styled.TextInput`
  border-style: solid;
  background: ${Colors.WHITE};
  color: ${Colors.BLACK};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 32px;
`;

export const StiledLabel = styled.Text`
  color: ${Colors.WHITE};
  padding-bottom: 10px;
`;
