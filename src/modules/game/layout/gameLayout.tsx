import React from 'react';
import Screen from '../../core/component/screen/Screen';
import {useController} from './controller';
import Input from '../../addWord/components/Input/input';
import {StyledGameAnswer, StyledGamePage, StyledGameWord} from './styled';
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
              {word.value}
            </StyledGameWord>
            <StyledGameAnswer isShow={isShowAnswer}>
              {word.label}
            </StyledGameAnswer>
          </>
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
          <Button
            title="I DON'T KNOW"
            onPress={handelShowAnswer}
            disabled={isDisabled}
          />
          <Button title="SUBMIT" onPress={handelSubmit} disabled={isDisabled} />
        </View>
      </StyledGamePage>
    </Screen>
  );
};

export default GameLayout;
