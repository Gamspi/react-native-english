import styled, {css} from 'styled-components/native';
import {Colors} from '../../core/styles/variables';

export const StyledGamePage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const StyledGameUpdateButton = styled.Button`
  margin-left: auto;
`;

export const StyledGameWord = styled.Text`
  margin: 50px auto;
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
