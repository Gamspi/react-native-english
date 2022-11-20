import styled from 'styled-components/native';
import {Props} from './FooterButton';

export const StyledFooterButton = styled.View`
  align-items: center;
`;

export const StyledFooterButtonImageContainer = styled.TouchableOpacity<Props>`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: ${({isActive}) => (isActive ? '#ff0000' : '#7b7b7b')};
`;
export const StyledFooterButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
export const StyledFooterButtonText = styled.Text`
  margin-top: 10px;
  object-fit: cover;
`;
