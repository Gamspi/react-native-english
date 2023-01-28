import styled, {css} from 'styled-components/native';
import {Backgrounds, Colors} from '../../../core/styles/variables';

export const StyledWordItem = styled.View`
  border: 1px solid ${Backgrounds.PRIMARY_RED};
  border-radius: 16px;
  padding: 14px;
  ${({isLast}) =>
    !isLast &&
    css`
      margin-bottom: 16px;
    `}
`;

export const StyledWordItemTitle = styled.Text`
  color: ${Colors.WHITE};
  font-size: 30px;
`;

export const StyledWordItemValue = styled.Text`
  color: ${Colors.WHITE};
  font-size: 20px;
`;

export const StyledWordItemValueContainer = styled.View`
  flex-direction: row;
`;

export const StyledWordItemSwitchContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledWordItemSwitchText = styled.Text`
  margin-right: 10px;
  color: ${Colors.WHITE};
  opacity: ${({isInGame}) => (isInGame ? 1 : 0.7)};
  flex-direction: row;
`;
