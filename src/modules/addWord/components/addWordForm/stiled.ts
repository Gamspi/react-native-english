import styled from 'styled-components/native';
import {Colors} from '../../../core/styles/variables';

export const StyledAddWordForm = styled.View`
  flex: 1;
  justify-content: center;
`;

export const StyledAddWordSwitch = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const StyledAddWordSwitchText = styled.Text`
  margin-right: 10px;
  color: ${Colors.WHITE};
  opacity: ${({isInGame}) => (isInGame ? 1 : 0.7)};
`;
