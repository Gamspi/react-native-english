import React from 'react';
import Screen from '../../core/component/screen/Screen';
import {useController} from './controller';
import Input from '../../addWord/components/Input/input';
import {StyledGamePage, StyledGameWord} from './styled';
import Button from '../../core/component/button/Button';
import {View} from 'react-native';

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
        <Button title="update" onPress={updateWord} disabled={isDisabled} />
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
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Button title="SUBMIT" onPress={handelSubmit} disabled={isDisabled} />
          <Button
            title="I DON'T KNOW"
            onPress={handelSubmit}
            disabled={isDisabled}
          />
        </View>
      </StyledGamePage>
    </Screen>
  );
};

export default GameLayout;
