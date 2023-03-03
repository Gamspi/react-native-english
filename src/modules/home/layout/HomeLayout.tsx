import React, {memo} from 'react';
import {useController} from './controller';
import Screen from '../../core/component/screen/Screen';
import StartButton from '../components/startButton/startButton';
import {StyledHomeContainer} from './styled';

type Props = {
  checkIsFocused: () => boolean;
};
const HomeLayout = ({checkIsFocused}: Props) => {
  const {handelStartGame} = useController({checkIsFocused});
  console.log('test');
  return (
    <Screen>
      <StyledHomeContainer>
        <StartButton onPress={handelStartGame}>Start</StartButton>
      </StyledHomeContainer>
    </Screen>
  );
};

export default memo(HomeLayout);
