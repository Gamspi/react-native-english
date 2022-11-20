import styled, {css} from 'styled-components/native';

export const StyledWordItem = styled.View`
  border: 1px solid red;
  border-radius: 8px;
  padding: 8px;
  ${({isLast}) =>
    !isLast &&
    css`
      margin-bottom: 16px;
    `}
`;
