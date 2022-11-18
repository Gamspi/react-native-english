import styled from 'styled-components/native';
import {Colors, Fonts} from '../../styles/variables';

export const Container = styled.View`
  padding: 10px;
  background-color: ${Colors.BLACK};
`;

export const LogoText = styled.Text`
  font-family: ${Fonts.INK};
  background-color: ${Colors.BLACK};
  font-size: 24px;
  font-weight: 700;
`;
