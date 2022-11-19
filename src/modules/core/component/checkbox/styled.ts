import styled from 'styled-components/native';
import {Colors} from '../../styles/variables';

export const StyledCheckBoxContainer = styled.View`
  padding: 2px;
  margin-right: 10px;
  border: 1px solid ${Colors.WHITE};
  border-radius: 9px;
`;

export const StyledCheckBoxDot = styled.View`
  background: ${Colors.WHITE};
  width: 12px;
  height: 12px;
  border-radius: 6px;
  opacity: ${({isActive}) => (isActive ? 1 : 0.2)};
`;

export const StyledCheckBoxLabel = styled.Text`
  color: ${Colors.WHITE};
`;

export const StyledCheckBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
