import React from 'react';
import {Button} from 'react-native';
import Screen from '../../core/component/screen/Screen';
import {useController} from './controller';
import Input from '../../addWord/components/Input/input';
import {StyledGamePage, StyledGameUpdateButton, StyledGameWord} from './styled';

const GameLayout = () => {
  const {
    handelSubmit,
    word,
    answer,
    setAnswer,
    updateWord,
    isSuccess,
    isError,
    isDisabled,
  } = useController();
  return (
    <Screen>
      <StyledGamePage>
        <StyledGameUpdateButton
          title="update"
          onPress={updateWord}
          disabled={isDisabled}
        />
        {word && (
          <StyledGameWord isSuccess={isSuccess} isError={isError}>
            {word.value}
          </StyledGameWord>
        )}
        <Input
          value={answer}
          onChangeText={setAnswer}
          style={{
            minWidth: 200,
          }}
        />
        <Button title="submit" onPress={handelSubmit} disabled={isDisabled} />
      </StyledGamePage>
    </Screen>
  );
};

export default GameLayout;
