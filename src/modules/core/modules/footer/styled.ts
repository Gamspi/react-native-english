import styled from 'styled-components/native';
import {Backgrounds} from '../../styles/variables';

export const FooterContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  background: ${Backgrounds.PRIMARY_BLACK};
  width: 100%;
  align-items: center;
  height: 60px;
`;

export const ButtonContainer = styled.View`
  padding: 0 10px 0 10px;
  margin-top: -30px;
`;
