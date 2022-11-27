import styled from 'styled-components/native';
import {Props} from './FooterButton';
import {StyleSheet} from 'react-native';
import {Backgrounds} from '../../../../styles/variables';

export const StyledFooterButton = styled.View`
  align-items: center;
  border-radius: ${({isActive}) => (isActive ? '30px' : '25px')};
  overflow: hidden;
  border: 1px solid ${Backgrounds.SECONDARY_RED};
`;

export const StyledFooterButtonImageContainer = styled.View<Props>`
  width: ${({isActive}) => (isActive ? '60px' : '50px')};
  height: ${({isActive}) => (isActive ? '60px' : '50px')};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  //background: ${({isActive}) => (isActive ? '#ff0000' : '#7b7b7b')};
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
export const style = StyleSheet.create({
  gradient: {
    // borderRadius: 25,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: Backgrounds.SECONDARY_RED,
  },
});
