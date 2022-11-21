import styled from 'styled-components/native';
import {Colors} from '../../../core/styles/variables';

export const StyledStartButton = styled.View`
  padding: 10px;
  background: blue;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
`;

export const StyledStartButtonText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${Colors.WHITE};
`;
