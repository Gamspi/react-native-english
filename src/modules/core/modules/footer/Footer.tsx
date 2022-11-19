import React from 'react';
import {FooterContainer} from './styled';
import {Button, Text} from 'react-native';
import {NavigationEnum} from '../../utils/enums/navigation';
type Props = {
  navigate: (RouteName: NavigationEnum) => void;
  currentRouter?: string;
};
const Footer = ({navigate}: Props) => {
  return (
    <FooterContainer>
      <Button
        title={'ADD_WORD'}
        onPress={() => navigate(NavigationEnum.ADD_WORD)}
      />
      <Button title={'HOME'} onPress={() => navigate(NavigationEnum.HOME)} />
      <Button
        title={'WORD_LIST'}
        onPress={() => navigate(NavigationEnum.WORD_LIST)}
      />
    </FooterContainer>
  );
};

export default Footer;
