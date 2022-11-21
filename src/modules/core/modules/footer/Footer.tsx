import React, {memo} from 'react';
import {ButtonContainer, FooterContainer} from './styled';
import {NavigationEnum} from '../../utils/enums/navigation';
import {useController} from './controller';
import FooterButton from './components/footerButton/FooterButton';
type Props = {
  navigate: (RouteName: NavigationEnum) => void;
  currentRouter: string;
};
const Footer = ({navigate, currentRouter}: Props) => {
  const {isKeyboardShow} = useController();
  return !isKeyboardShow &&
    !(currentRouter === (NavigationEnum.GAME as string)) ? (
    <FooterContainer>
      <ButtonContainer>
        <FooterButton
          isActive={currentRouter === NavigationEnum.ADD_WORD}
          source={require('../../assets/icons/add.png')}
          onPress={() => navigate(NavigationEnum.ADD_WORD)}
        />
      </ButtonContainer>
      <ButtonContainer>
        <FooterButton
          isActive={currentRouter === NavigationEnum.HOME}
          onPress={() => navigate(NavigationEnum.HOME)}
          source={require('../../assets/icons/home.png')}
        />
      </ButtonContainer>
      <ButtonContainer>
        <FooterButton
          isActive={currentRouter === NavigationEnum.WORD_LIST}
          source={require('../../assets/icons/list.png')}
          onPress={() => navigate(NavigationEnum.WORD_LIST)}
        />
      </ButtonContainer>
      <ButtonContainer>
        <FooterButton
          isActive={currentRouter === NavigationEnum.TEST}
          source={require('../../assets/icons/finger.png')}
          onPress={() => navigate(NavigationEnum.TEST)}
        />
      </ButtonContainer>
    </FooterContainer>
  ) : (
    <></>
  );
};

export default memo(Footer);
