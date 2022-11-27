import styled, {css} from 'styled-components/native';
import {Colors} from '../../core/styles/variables';

export const StyledGamePage = styled.View`
  flex: 1;
  justify-content: center;
`;

export const StyledGameAnswer = styled.Text`
  text-align: center;
  margin-bottom: 16px;
  opacity: ${({isShow}) => (isShow ? '1' : '0')};
`;

export const StyledGameWord = styled.Text`
  margin: 0 auto 10px;
  font-size: 30px;
  color: ${Colors.WHITE};
  ${({isError, isSuccess}) => {
    if (isSuccess) {
      return css`
        color: green;
      `;
    }
    if (isError) {
      return css`
        color: red;
      `;
    }
  }}
`;

export const StyledGameButtonContainer = styled.View`
  gap: 10px;
`;
