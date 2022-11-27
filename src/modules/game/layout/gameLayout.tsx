import React from 'react';
import Screen from '../../core/component/screen/Screen';
import {useController} from './controller';
import Input from '../../core/component/Input/input';
import {
  StyledGameAnswer,
  StyledGameButtonContainer,
  StyledGamePage,
  StyledGameWord,
} from './styled';
import Button from '../../core/component/button/Button';
import {View} from 'react-native';

const GameLayout = () => {
  const {
    word,
    answer,
    isSuccess,
    isError,
    isDisabled,
    isShowAnswer,
    setAnswer,
    // updateWord,
    handelSubmit,
    handelShowAnswer,
  } = useController();
  return (
    <Screen>
      <StyledGamePage>
        {/*<Button title="update" onPress={updateWord} disabled={isDisabled} />*/}
        {word && (
          <>
            <StyledGameWord isSuccess={isSuccess} isError={isError}>
              {word.value.join(', ')}
            </StyledGameWord>
            <StyledGameAnswer isShow={isShowAnswer}>
              {word.label}
            </StyledGameAnswer>
          </>
        )}
        <Input value={answer} onChangeText={setAnswer} />
        <StyledGameButtonContainer>
          <Button
            title="I DON'T KNOW"
            onPress={handelShowAnswer}
            disabled={isDisabled}
            margin="0 0 15px 0"
          />
          <Button title="SUBMIT" onPress={handelSubmit} disabled={isDisabled} />
        </StyledGameButtonContainer>
      </StyledGamePage>
    </Screen>
  );
};

export default GameLayout;
