import React from 'react';
import {ButtonContainer, FooterContainer} from './styled';
import {NavigationEnum} from '../../utils/enums/navigation';
import Button from '../../component/button/Button';
import {useController} from './controller';
import FooterButton from './components/footerButton/FooterButton';
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
          <FooterButton
            source={require('../../assets/icons/add.png')}
            onPress={() => navigate(NavigationEnum.ADD_WORD)}
          />
        </ButtonContainer>
        <ButtonContainer>
          <FooterButton
            onPress={() => navigate(NavigationEnum.HOME)}
            source={require('../../assets/icons/home.png')}
          />
        </ButtonContainer>
        <ButtonContainer>
          <FooterButton
            source={require('../../assets/icons/list.png')}
            onPress={() => navigate(NavigationEnum.WORD_LIST)}
          />
        </ButtonContainer>
        <ButtonContainer>
          <FooterButton
            source={require('../../assets/icons/finger.png')}
            onPress={() => navigate(NavigationEnum.TEST)}
          />
        </ButtonContainer>
      </FooterContainer>
    )
  );
};

export default Footer;
