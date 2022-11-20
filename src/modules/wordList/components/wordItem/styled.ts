import styled, {css} from 'styled-components/native';
import {Colors} from '../../../core/styles/variables';

export const StyledWordItem = styled.View`
  border: 1px solid red;
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
