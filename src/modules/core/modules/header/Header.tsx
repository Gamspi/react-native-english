import React from 'react';
import {Container, LogoText} from './styled';
import {Button} from 'react-native';

const Header = () => {
  return (
    <Container>
      <LogoText>My English</LogoText>
      <Button
        title={'click'}
        onPress={() => {
          console.log('click');
          // navigation.navigate('Home');
        }}
      />
    </Container>
  );
};

export default Header;
