import React from 'react';
import {ButtonContainer, FooterContainer} from './styled';
import {Text} from 'react-native';
import {NavigationEnum} from '../../utils/enums/navigation';
import Button from '../../component/button/Button';
import {useController} from './controller';
type Props = {
  navigate: (RouteName: NavigationEnum) => void;
  currentRouter?: string;
};
const Footer = ({navigate}: Props) => {
  const {isKeyboardShow} = useController();
  return (
    !isKeyboardShow && (
      <FooterContainer>
        <ButtonContainer>
          <Button
            title={'ADD_WORD'}
            onPress={() => navigate(NavigationEnum.ADD_WORD)}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            title={'HOME'}
            onPress={() => navigate(NavigationEnum.HOME)}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            title={'WORD_LIST'}
            onPress={() => navigate(NavigationEnum.WORD_LIST)}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            title={'test'}
            onPress={() => navigate(NavigationEnum.TEST)}
          />
        </ButtonContainer>
      </FooterContainer>
    )
  );
};

export default Footer;
