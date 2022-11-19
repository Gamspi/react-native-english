import React from 'react';
import {Container, LogoText} from './styled';
import {Button} from 'react-native';
import {useTypeSelector} from '../../hooks/useTypeSelector';

const Header = () => {
  const {isLoading} = useTypeSelector(state => state.test);
  return (
    <Container>
      <LogoText>My English</LogoText>
      <Button
        title={'click'}
        onPress={() => {
          console.log(isLoading);
        }}
      />
    </Container>
  );
};

export default Header;
